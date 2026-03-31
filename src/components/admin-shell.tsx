import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/news", label: "News" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/members", label: "Members" },
  { href: "/admin/publications", label: "Publications" },
  { href: "/admin/blogs", label: "Blogs" }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="admin-wrap">
      <div className="container admin-grid">
        <aside className="admin-nav">
          {adminLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <form action="/api/admin/logout" method="post">
            <button type="submit">Logout</button>
          </form>
        </aside>

        <div className="admin-content">{children}</div>
      </div>
    </section>
  );
}
