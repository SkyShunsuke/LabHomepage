"use client";

import { useMemo, useState } from "react";

type JoinFaqItem = {
  question: string;
  description: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

type JoinFaqListProps = {
  faqs: JoinFaqItem[];
  initialVisibleCount?: number;
};

export function JoinFaqList({ faqs, initialVisibleCount = 5 }: JoinFaqListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = useMemo(() => {
    if (showAll) {
      return faqs;
    }

    return faqs.slice(0, initialVisibleCount);
  }, [faqs, initialVisibleCount, showAll]);

  const hasMore = faqs.length > initialVisibleCount;

  return (
    <div className="join-faq-list">
      {visibleFaqs.map((faq) => (
        <details key={faq.question} className="join-faq-item">
          <summary>{faq.question}</summary>
          <p className="muted">{faq.description}</p>
          {faq.links?.length ? (
            <p>
              {faq.links.map((link) => (
                <a key={link.label} href={link.href} className="inline-link" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}
        </details>
      ))}

      {hasMore ? (
        <button type="button" className="button button-secondary join-faq-toggle" onClick={() => setShowAll((v) => !v)}>
          {showAll ? "Show less" : "More details"}
        </button>
      ) : null}
    </div>
  );
}
