"use client";

import { useState } from "react";
import { InternalStudentGuideContent } from "@/components/internal-student-guide-content";

export function InternalStudentGuideButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button type="button" className="button button-secondary" onClick={() => setIsOpen(true)}>
        Guide for Internal Student
      </button>

      {isOpen ? (
        <div className="join-guide-overlay" role="presentation" onClick={() => setIsOpen(false)}>
          <div className="join-guide-dialog card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="join-guide-head">
              <h3>Guide for Internal Students</h3>
              <button type="button" className="button button-secondary" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
            <InternalStudentGuideContent />
          </div>
        </div>
      ) : null}
    </div>
  );
}
