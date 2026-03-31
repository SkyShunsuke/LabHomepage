import { AdminShell } from "@/components/admin-shell";
import { prisma } from "@/lib/prisma";
import { parseMemberBio } from "@/lib/member-research-topic";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export default async function AdminMembersPage() {
  if (isGitHubPagesBuild()) {
    return (
      <AdminShell>
        <article className="card">
          <h1>Members Admin</h1>
          <p className="muted">Admin editing is disabled on the GitHub Pages static build.</p>
        </article>
      </AdminShell>
    );
  }

  const { deleteMember, saveMember } = await import("@/lib/admin-actions.server");
  const members = await prisma.member.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] });

  return (
    <AdminShell>
      <article className="card">
        <h1>Members</h1>
        <p className="muted">Manage team members shown on the public Members page.</p>
      </article>

      <article className="card">
        <h2>Create Member</h2>
        <form action={saveMember} className="form">
          <div className="form-row">
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Role
              <input name="role" required />
            </label>
          </div>
          <label>
            Bio
            <textarea name="bio" required />
          </label>
          <label>
            Research Topic
            <input name="researchTopic" />
          </label>
          <div className="form-row">
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Website URL
              <input name="websiteUrl" placeholder="https://" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Image URL
              <input name="imageUrl" placeholder="https://" />
            </label>
            <label>
              Upload Photo
              <input name="imageFile" type="file" accept="image/*" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Display order
              <input name="order" type="number" defaultValue={0} />
            </label>
          </div>
          <label>
            Active
            <input type="checkbox" name="isActive" defaultChecked />
          </label>
          <button type="submit" className="button button-primary">
            Save Member
          </button>
        </form>
      </article>

      <article className="card">
        <h2>Edit Members</h2>
        <p className="muted">Click a member card to open and update details.</p>
        <div className="admin-compact-list">
          {members.map((member) => {
            const { bio, researchTopic } = parseMemberBio(member.bio);

            return (
              <details key={member.id} className="admin-compact-card">
                <summary className="admin-compact-card-summary">
                  <div>
                    <strong>{member.name}</strong>
                    <p className="muted">{member.role}</p>
                  </div>
                </summary>

                <div className="admin-compact-card-body">
                  <form action={saveMember} className="form">
                    <input type="hidden" name="id" value={member.id} />
                    <div className="form-row">
                      <label>
                        Name
                        <input name="name" defaultValue={member.name} required />
                      </label>
                      <label>
                        Role
                        <input name="role" defaultValue={member.role} required />
                      </label>
                    </div>
                    <label>
                      Bio
                      <textarea name="bio" defaultValue={bio} required />
                    </label>
                    <label>
                      Research Topic
                      <input name="researchTopic" defaultValue={researchTopic} />
                    </label>
                    <div className="form-row">
                      <label>
                        Email
                        <input name="email" type="email" defaultValue={member.email || ""} />
                      </label>
                      <label>
                        Website URL
                        <input name="websiteUrl" defaultValue={member.websiteUrl || ""} />
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        Image URL
                        <input name="imageUrl" defaultValue={member.imageUrl || ""} />
                      </label>
                      <label>
                        Upload Photo
                        <input name="imageFile" type="file" accept="image/*" />
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        Display order
                        <input name="order" type="number" defaultValue={member.order} />
                      </label>
                    </div>
                    {member.imageUrl ? (
                      <p>
                        <img
                          src={member.imageUrl}
                          alt={`${member.name} photo`}
                          className="image-preview image-preview-square"
                        />
                      </p>
                    ) : null}
                    <label>
                      Active
                      <input type="checkbox" name="isActive" defaultChecked={member.isActive} />
                    </label>
                    <button type="submit" className="button button-secondary">
                      Update Member
                    </button>
                  </form>

                  <form action={deleteMember} style={{ marginTop: "0.7rem" }}>
                    <input type="hidden" name="id" value={member.id} />
                    <button type="submit" className="button button-danger">
                      Delete
                    </button>
                  </form>
                </div>
              </details>
            );
          })}
        </div>
      </article>
    </AdminShell>
  );
}
