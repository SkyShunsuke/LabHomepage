import type { Messages } from "@/lib/i18n/types";

type SiteFooterProps = {
  messages: Messages["footer"];
};

export function SiteFooter({ messages }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {messages.copyright}
        </p>
        <img
          src="/assets/logos/university_of_fukui_logo.svg"
          alt="University of Fukui"
          className="footer-logo"
        />
      </div>
    </footer>
  );
}
