import { AdminShell } from "@/components/admin-shell";
import { prisma } from "@/lib/prisma";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export default async function AdminNewsPage() {
  if (isGitHubPagesBuild()) {
    return (
      <AdminShell>
        <article className="card">
          <h1>News Admin</h1>
          <p className="muted">Admin editing is disabled on the GitHub Pages static build.</p>
        </article>
      </AdminShell>
    );
  }

  const { deleteNews, saveNews } = await import("@/lib/admin-actions.server");
  const items = await prisma.news.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <AdminShell>
      <article className="card">
        <h1>News</h1>
        <p className="muted">Create and edit latest announcements shown on the homepage.</p>
      </article>

      <article className="card">
        <h2>Create News</h2>
        <form action={saveNews} className="form">
          <label>
            Title
            <input name="title" required />
          </label>
          <div className="form-row">
            <label>
              Slug (optional)
              <input name="slug" placeholder="auto-generated-from-title" />
            </label>
            <label>
              Published
              <input type="checkbox" name="isPublished" defaultChecked />
            </label>
          </div>
          <label>
            Summary
            <textarea name="summary" required />
          </label>
          <label>
            Content
            <textarea name="content" required />
          </label>
          <button type="submit" className="button button-primary">
            Save News
          </button>
        </form>
      </article>

      {items.map((item) => (
        <article key={item.id} className="card">
          <h2>Edit: {item.title}</h2>
          <form action={saveNews} className="form">
            <input type="hidden" name="id" value={item.id} />
            <label>
              Title
              <input name="title" defaultValue={item.title} required />
            </label>
            <div className="form-row">
              <label>
                Slug
                <input name="slug" defaultValue={item.slug} />
              </label>
              <label>
                Published
                <input type="checkbox" name="isPublished" defaultChecked={item.isPublished} />
              </label>
            </div>
            <label>
              Summary
              <textarea name="summary" defaultValue={item.summary} required />
            </label>
            <label>
              Content
              <textarea name="content" defaultValue={item.content} required />
            </label>
            <button type="submit" className="button button-secondary">
              Update News
            </button>
          </form>

          <form action={deleteNews} style={{ marginTop: "0.7rem" }}>
            <input type="hidden" name="id" value={item.id} />
            <button type="submit" className="button button-danger">
              Delete
            </button>
          </form>
        </article>
      ))}
    </AdminShell>
  );
}
