import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { MemberPhoto } from "@/components/member-photo";
import { getMembers } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

function getRoleBadgeTone(role: string): string {
  const normalized = role.trim().toLowerCase();

  if (
    normalized.includes("principal investigator") ||
    normalized === "pi" ||
    normalized.includes("professor") ||
    normalized.includes("教授") ||
    normalized.includes("主任研究員")
  ) {
    return "badge-role-pi";
  }

  if (
    normalized.includes("phd") ||
    normalized.includes("doctoral") ||
    normalized.includes("博士")
  ) {
    return "badge-role-phd";
  }

  if (
    normalized.includes("master") ||
    normalized.includes("msc") ||
    normalized.includes("修士")
  ) {
    return "badge-role-msc";
  }

  if (
    normalized.includes("undergraduate") ||
    normalized.includes("bachelor") ||
    normalized.includes("学部")
  ) {
    return "badge-role-bachelor";
  }

  if (normalized.includes("postdoc") || normalized.includes("ポスドク")) {
    return "badge-role-postdoc";
  }

  if (
    normalized.includes("visiting") ||
    normalized.includes("客員")
  ) {
    return "badge-role-visiting";
  }

  if (
    normalized.includes("researcher") ||
    normalized.includes("staff") ||
    normalized.includes("research assistant") ||
    normalized.includes("研究員") ||
    normalized.includes("教員")
  ) {
    return "badge-role-researcher";
  }

  return "badge-role-default";
}

function isAlumniRole(role: string): boolean {
  const normalized = role.trim().toLowerCase();
  return (
    normalized.includes("alumni") ||
    normalized.includes("alumnus") ||
    normalized.includes("alumna") ||
    normalized.includes("former")
  );
}

function isAlumniMember(member: { role: string; isActive: boolean | null }): boolean {
  if (typeof member.isActive === "boolean") {
    return !member.isActive;
  }

  return isAlumniRole(member.role);
}

function isPiRole(role: string): boolean {
  const normalized = role.trim().toLowerCase();
  return (
    normalized === "pi" ||
    normalized.includes("principal investigator") ||
    normalized.includes("professor") ||
    normalized.includes("主任研究員") ||
    normalized.includes("教授")
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.members.title,
    description: messages.members.subtitle
  };
}

type MembersPageProps = {
  searchParams?: Promise<{
    view?: string;
  }>;
};

export default async function MembersPage({ searchParams }: MembersPageProps) {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const members = await getMembers(locale);
  const currentLabel = locale === "ja" ? "現所属" : "Current Members";
  const alumniLabel = locale === "ja" ? "修了生" : "Alumni";
  const noAlumniTitle = locale === "ja" ? "修了生はまだいません" : "No alumni yet";
  const noAlumniBody = locale === "ja" ? "修了生のプロフィールはここに表示されます。" : "Alumni profiles will appear here once added.";
  const selectedView = isGitHubPagesBuild()
    ? "current"
    : (await searchParams)?.view === "alumni"
      ? "alumni"
      : "current";
  const currentMembers = members.filter((member) => !isAlumniMember(member));
  const alumniMembers = members.filter((member) => isAlumniMember(member));
  const visibleMembers = selectedView === "alumni" ? alumniMembers : currentMembers;
  const noItemsTitle = selectedView === "alumni" ? noAlumniTitle : messages.members.noItemsTitle;
  const noItemsBody = selectedView === "alumni" ? noAlumniBody : messages.members.noItemsBody;

  return (
    <>
      <PageHero title={messages.members.title} subtitle={messages.members.subtitle} />

      <section className="section">
        <div className="container">
          <div className="member-view-switch" role="tablist" aria-label="Member groups">
            <Link
              href="/members"
              className={`member-view-link ${selectedView === "current" ? "member-view-link-active" : ""}`}
              role="tab"
              aria-selected={selectedView === "current"}
            >
              {currentLabel} ({currentMembers.length})
            </Link>
            <Link
              href="/members?view=alumni"
              className={`member-view-link ${selectedView === "alumni" ? "member-view-link-active" : ""}`}
              role="tab"
              aria-selected={selectedView === "alumni"}
            >
              {alumniLabel} ({alumniMembers.length})
            </Link>
          </div>
        </div>

        <div className="container grid grid-3">
          {visibleMembers.length === 0 ? (
            <article className="card">
              <h2>{noItemsTitle}</h2>
              <p className="muted">{noItemsBody}</p>
            </article>
          ) : (
            visibleMembers.map((member) => {
              return (
                <article key={member.id} className={`card ${isPiRole(member.role) ? "member-card-pi" : ""}`}>
                  <div className="member-card-head">
                    <div className="member-card-main">
                      <span className={`badge ${getRoleBadgeTone(member.role)}`}>
                        {member.role}
                      </span>
                      <h2>{member.name}</h2>
                    </div>
                    <MemberPhoto name={member.name} photoAltSuffix={messages.members.photoAltSuffix} imageUrl={member.imageUrl} />
                  </div>
                  {member.researchArea ? (
                    <div className="member-topic" aria-label={messages.members.researchTopicLabel}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 6a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.4.6l4.5 4.5a2 2 0 0 1 .6 1.4V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm2 0v12h12v-7h-4a1 1 0 0 1-1-1V6H6zm9 .4V9h2.6L15 6.4z" />
                      </svg>
                      <span>{member.researchArea}</span>
                    </div>
                  ) : null}
                  {member.graduateYear ? (
                    <p className="member-graduate-year">
                      {locale === "ja" ? `${member.graduateYear}年修了` : `Graduated in ${member.graduateYear}`}
                    </p>
                  ) : null}
                  {member.comment ? <p className="muted">{member.comment}</p> : null}
                  {member.email || member.websiteUrl ? (
                    <div className="member-actions" aria-label="Member links">
                      {member.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className="member-action-icon"
                          aria-label={`Email ${member.name}`}
                          title={member.email}
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2L12 13l8-4.8V8H4zm16 8V10l-7.5 4.5a1 1 0 0 1-1 0L4 10v6h16z" />
                          </svg>
                        </a>
                      ) : null}
                      {member.websiteUrl ? (
                        <a
                          href={member.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="member-action-icon"
                          aria-label={`${messages.members.personalPage}: ${member.name}`}
                          title={messages.members.personalPage}
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3.2 3 10.4V21h6.5v-6h5V21H21V10.4L12 3.2zm7 15.8h-2.5v-6h-9v6H5v-7.6l7-5.6 7 5.6V19z" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
