import { NextResponse } from "next/server";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export const dynamic = "force-static";

function safeFileId(raw: string | null): string | null {
  if (!raw) {
    return null;
  }

  const trimmed = raw.trim();
  if (!/^[A-Za-z0-9_-]{10,}$/.test(trimmed)) {
    return null;
  }

  return trimmed;
}

async function fetchImage(url: string): Promise<Response | null> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 LabHomepage MemberImage Proxy"
      },
      next: { revalidate: 60 * 60 * 24 }
    });

    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      return null;
    }

    return response;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  if (isGitHubPagesBuild()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const url = new URL(request.url);
  const id = safeFileId(url.searchParams.get("id"));

  if (!id) {
    return new NextResponse("Invalid image id", { status: 400 });
  }

  const candidates = [
    `https://lh3.googleusercontent.com/d/${id}=w800`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w800`,
    `https://drive.google.com/uc?export=view&id=${id}`
  ];

  for (const candidate of candidates) {
    const upstream = await fetchImage(candidate);
    if (!upstream) {
      continue;
    }

    return new NextResponse(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "image/jpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
      }
    });
  }

  return new NextResponse("Image not available", { status: 404 });
}
