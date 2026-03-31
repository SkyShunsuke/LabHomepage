import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <article className="card">
        <h1>Content Dashboard</h1>
        <p className="muted">
          Update your website without editing HTML files. Use these sections to manage dynamic content.
        </p>
        <div className="grid grid-2">
          <Link className="card" href="/admin/news">
            <h2>News</h2>
            <p className="muted">Add and edit latest announcements.</p>
          </Link>
          <Link className="card" href="/admin/projects">
            <h2>Projects</h2>
            <p className="muted">Manage featured and ongoing projects.</p>
          </Link>
          <Link className="card" href="/admin/members">
            <h2>Members</h2>
            <p className="muted">Keep team profiles and roles up to date.</p>
          </Link>
          <Link className="card" href="/admin/publications">
            <h2>Publications</h2>
            <p className="muted">Publish papers and links from one place.</p>
          </Link>
          <Link className="card" href="/admin/blogs">
            <h2>Blogs (Markdown)</h2>
            <p className="muted">Write in Markdown or upload `.md` files.</p>
          </Link>
        </div>
      </article>
    </AdminShell>
  );
}
