import { AdminShell } from "@/components/admin-shell";
import { prisma } from "@/lib/prisma";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export default async function AdminBlogsPage() {
  if (isGitHubPagesBuild()) {
    return (
      <AdminShell>
        <article className="card">
          <h1>Blogs Admin</h1>
          <p className="muted">Admin editing is disabled on the GitHub Pages static build.</p>
        </article>
      </AdminShell>
    );
  }

  const { deleteBlogPost, saveBlogPost } = await import("@/lib/admin-actions.server");
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <AdminShell>
      <article className="card">
        <h1>Blogs</h1>
        <p className="muted">
          Write Markdown directly or upload a `.md` file. Markdown is automatically processed on the public site.
        </p>
      </article>

      <article className="card">
        <h2>Create Blog Post</h2>
        <form action={saveBlogPost} className="form">
          <label>
            Title
            <input name="title" required />
          </label>
          <label>
            Slug (optional)
            <input name="slug" />
          </label>
          <label>
            Excerpt
            <textarea name="excerpt" required />
          </label>
          <label>
            Markdown content
            <textarea name="markdown" placeholder="# Title\n\nWrite your article in Markdown..." />
          </label>
          <label>
            Or upload a Markdown file
            <input type="file" name="markdownFile" accept=".md,text/markdown" />
          </label>
          <label>
            Published
            <input type="checkbox" name="isPublished" defaultChecked />
          </label>
          <button type="submit" className="button button-primary">
            Save Blog Post
          </button>
        </form>
      </article>

      {posts.map((post) => (
        <article key={post.id} className="card">
          <h2>Edit: {post.title}</h2>
          <form action={saveBlogPost} className="form">
            <input type="hidden" name="id" value={post.id} />
            <label>
              Title
              <input name="title" defaultValue={post.title} required />
            </label>
            <label>
              Slug
              <input name="slug" defaultValue={post.slug} />
            </label>
            <label>
              Excerpt
              <textarea name="excerpt" defaultValue={post.excerpt} required />
            </label>
            <label>
              Markdown content
              <textarea name="markdown" defaultValue={post.markdown} required />
            </label>
            <label>
              Replace with Markdown file
              <input type="file" name="markdownFile" accept=".md,text/markdown" />
            </label>
            <label>
              Published
              <input type="checkbox" name="isPublished" defaultChecked={post.isPublished} />
            </label>
            <button type="submit" className="button button-secondary">
              Update Blog Post
            </button>
          </form>

          <form action={deleteBlogPost} style={{ marginTop: "0.7rem" }}>
            <input type="hidden" name="id" value={post.id} />
            <button type="submit" className="button button-danger">
              Delete
            </button>
          </form>
        </article>
      ))}
    </AdminShell>
  );
}
