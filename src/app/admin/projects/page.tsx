import { AdminShell } from "@/components/admin-shell";
import { prisma } from "@/lib/prisma";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export default async function AdminProjectsPage() {
  if (isGitHubPagesBuild()) {
    return (
      <AdminShell>
        <article className="card">
          <h1>Projects Admin</h1>
          <p className="muted">Admin editing is disabled on the GitHub Pages static build.</p>
        </article>
      </AdminShell>
    );
  }

  const { deleteProject, saveProject } = await import("@/lib/admin-actions.server");
  const projects = await prisma.project.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <AdminShell>
      <article className="card">
        <h1>Projects</h1>
        <p className="muted">Manage the project showcased in the homepage &quot;Latest Project&quot; section.</p>
      </article>

      <article className="card">
        <h2>Create Project</h2>
        <form action={saveProject} className="form">
          <label>
            Title
            <input name="title" required />
          </label>
          <label>
            Slug (optional)
            <input name="slug" />
          </label>
          <label>
            Summary
            <textarea name="summary" required />
          </label>
          <label>
            Description
            <textarea name="description" required />
          </label>
          <div className="form-row">
            <label>
              Link URL
              <input name="linkUrl" placeholder="https://" />
            </label>
            <label>
              Featured on homepage
              <input type="checkbox" name="isFeatured" defaultChecked />
            </label>
          </div>
          <button type="submit" className="button button-primary">
            Save Project
          </button>
        </form>
      </article>

      {projects.map((project) => (
        <article key={project.id} className="card">
          <h2>Edit: {project.title}</h2>
          <form action={saveProject} className="form">
            <input type="hidden" name="id" value={project.id} />
            <label>
              Title
              <input name="title" defaultValue={project.title} required />
            </label>
            <label>
              Slug
              <input name="slug" defaultValue={project.slug} />
            </label>
            <label>
              Summary
              <textarea name="summary" defaultValue={project.summary} required />
            </label>
            <label>
              Description
              <textarea name="description" defaultValue={project.description} required />
            </label>
            <div className="form-row">
              <label>
                Link URL
                <input name="linkUrl" defaultValue={project.linkUrl || ""} />
              </label>
              <label>
                Featured on homepage
                <input type="checkbox" name="isFeatured" defaultChecked={project.isFeatured} />
              </label>
            </div>
            <button type="submit" className="button button-secondary">
              Update Project
            </button>
          </form>

          <form action={deleteProject} style={{ marginTop: "0.7rem" }}>
            <input type="hidden" name="id" value={project.id} />
            <button type="submit" className="button button-danger">
              Delete
            </button>
          </form>
        </article>
      ))}
    </AdminShell>
  );
}
