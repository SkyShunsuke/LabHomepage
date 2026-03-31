"use client";

import { useMemo, useState } from "react";

type MemberPhotoProps = {
  name: string;
  photoAltSuffix: string;
  imageUrl: string | null;
};

function initialsFromName(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "M";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 1).toUpperCase();
  }

  return `${parts[0].slice(0, 1)}${parts[parts.length - 1].slice(0, 1)}`.toUpperCase();
}

export function MemberPhoto({ name, photoAltSuffix, imageUrl }: MemberPhotoProps) {
  const [hasError, setHasError] = useState(false);
  const initials = useMemo(() => initialsFromName(name), [name]);

  if (!imageUrl || hasError) {
    return (
      <div className="member-photo member-photo-fallback" aria-label={`${name} ${photoAltSuffix}`}>
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${name} ${photoAltSuffix}`}
      className="member-photo"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
