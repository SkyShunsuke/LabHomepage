import { PageHero } from "@/components/page-hero";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

type AdminLoginPageProps = {
  searchParams: { error?: string } | Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  if (isGitHubPagesBuild()) {
    return (
      <>
        <PageHero title="Admin Login" subtitle="Manage dynamic content for your laboratory website." />
        <section className="section">
          <div className="container">
            <article className="card" style={{ maxWidth: "480px" }}>
              <p className="muted">Admin login is disabled on the GitHub Pages static build.</p>
            </article>
          </div>
        </section>
      </>
    );
  }

  const resolvedSearchParams = await Promise.resolve(searchParams);

  return (
    <>
      <PageHero title="Admin Login" subtitle="Manage dynamic content for your laboratory website." />
      <section className="section">
        <div className="container">
          <article className="card" style={{ maxWidth: "480px" }}>
            <form className="form" action="/api/admin/login" method="post">
              <label>
                Username
                <input name="username" required />
              </label>

              <label>
                Password
                <input name="password" type="password" required />
              </label>

              <button type="submit" className="button button-primary">
                Sign in
              </button>
            </form>
            {resolvedSearchParams.error ? <p style={{ color: "#b93030" }}>Invalid credentials.</p> : null}
          </article>
        </div>
      </section>
    </>
  );
}
