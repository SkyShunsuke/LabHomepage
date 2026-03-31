import { AdminShell } from "@/components/admin-shell";
import { prisma } from "@/lib/prisma";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export default async function AdminPublicationsPage() {
  if (isGitHubPagesBuild()) {
    return (
      <AdminShell>
        <article className="card">
          <h1>Publications Admin</h1>
          <p className="muted">Admin editing is disabled on the GitHub Pages static build.</p>
        </article>
      </AdminShell>
    );
  }

  const { deletePublication, savePublication } = await import("@/lib/admin-actions.server");
  const publications = await prisma.publication.findMany({
    orderBy: [{ year: "desc" }, { createdAt: "desc" }]
  });

  return (
    <AdminShell>
      <article className="card">
        <h1>Publications</h1>
        <p className="muted">Manage your paper list without hard-coding HTML entries.</p>
      </article>

      <article className="card">
        <h2>Create Publication</h2>
        <form action={savePublication} className="form">
          <label>
            Title
            <input name="title" required />
          </label>
          <label>
            Authors
            <input name="authors" required />
          </label>
          <div className="form-row">
            <label>
              Venue
              <input name="venue" required />
            </label>
            <label>
              Year
              <input name="year" type="number" defaultValue={new Date().getFullYear()} required />
            </label>
          </div>
          <label>
            Paper URL
            <input name="url" placeholder="https://" />
          </label>
          <div className="form-row">
            <label>
              Project URL
              <input name="projectUrl" placeholder="https://" />
            </label>
            <label>
              Code URL
              <input name="codeUrl" placeholder="https://" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Teaser Image URL
              <input name="teaserImageUrl" placeholder="https://" />
            </label>
            <label>
              Upload Teaser Image
              <input name="teaserImageFile" type="file" accept="image/*" />
            </label>
          </div>
          <label>
            Abstract
            <textarea name="abstract" />
          </label>
          <label>
            Highlight (optional)
            <input name="highlight" placeholder="Accepted at CVPR 2026" />
          </label>
          <button type="submit" className="button button-primary">
            Save Publication
          </button>
        </form>
      </article>

      <article className="card">
        <h2>Edit Publications</h2>
        <p className="muted">Click a publication card to open and update details.</p>
        <div className="admin-compact-list">
          {publications.map((item) => (
            <details key={item.id} className="admin-compact-card">
              <summary className="admin-compact-card-summary">
                <div>
                  <strong>{item.title}</strong>
                  <p className="muted">
                    {item.venue} ({item.year})
                  </p>
                  {(item as { highlight?: string | null }).highlight ? (
                    <p className="muted">Highlight: {(item as { highlight?: string | null }).highlight}</p>
                  ) : null}
                </div>
              </summary>

              <div className="admin-compact-card-body">
                <form action={savePublication} className="form">
                  <input type="hidden" name="id" value={item.id} />
                  <label>
                    Title
                    <input name="title" defaultValue={item.title} required />
                  </label>
                  <label>
                    Authors
                    <input name="authors" defaultValue={item.authors} required />
                  </label>
                  <div className="form-row">
                    <label>
                      Venue
                      <input name="venue" defaultValue={item.venue} required />
                    </label>
                    <label>
                      Year
                      <input name="year" type="number" defaultValue={item.year} required />
                    </label>
                  </div>
                  <label>
                    Paper URL
                    <input name="url" defaultValue={item.url || ""} />
                  </label>
                  <div className="form-row">
                    <label>
                      Project URL
                      <input name="projectUrl" defaultValue={(item as { projectUrl?: string | null }).projectUrl || ""} />
                    </label>
                    <label>
                      Code URL
                      <input name="codeUrl" defaultValue={(item as { codeUrl?: string | null }).codeUrl || ""} />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Teaser Image URL
                      <input name="teaserImageUrl" defaultValue={item.teaserImageUrl || ""} />
                    </label>
                    <label>
                      Upload Teaser Image
                      <input name="teaserImageFile" type="file" accept="image/*" />
                    </label>
                  </div>
                  {item.teaserImageUrl ? (
                    <p>
                      <img
                        src={item.teaserImageUrl}
                        alt={`${item.title} teaser`}
                        className="image-preview image-preview-banner"
                      />
                    </p>
                  ) : null}
                  <label>
                    Abstract
                    <textarea name="abstract" defaultValue={item.abstract || ""} />
                  </label>
                  <label>
                    Highlight (optional)
                    <input
                      name="highlight"
                      defaultValue={(item as { highlight?: string | null }).highlight || ""}
                      placeholder="Accepted at CVPR 2026"
                    />
                  </label>
                  <button type="submit" className="button button-secondary">
                    Update Publication
                  </button>
                </form>

                <form action={deletePublication} style={{ marginTop: "0.7rem" }}>
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit" className="button button-danger">
                    Delete
                  </button>
                </form>
              </div>
            </details>
          ))}
        </div>
      </article>
    </AdminShell>
  );
}
