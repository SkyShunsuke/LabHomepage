"use client";

import { useState } from "react";
import { InternalStudentGuideContent } from "@/components/internal-student-guide-content";

type ApplicationTrack = "abroad" | "fukui" | "domestic";

type JoinApplicationGatewayProps = {
  startLabel: string;
};

const ABROAD_FORM_URL = "https://forms.gle/xBRGB3MDfevkod1X8";
const DOMESTIC_FORM_URL = "https://forms.gle/3gXvxjL9kx14To2i7";

const trackLabels: Record<ApplicationTrack, string> = {
  abroad: "Planning to visit our laboratory from abroad",
  fukui: "Planning to join our laboratory from the University of Fukui",
  domestic: "Planning to join our laboratory from another university in Japan"
};

export function JoinApplicationGateway({ startLabel }: JoinApplicationGatewayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<ApplicationTrack | null>(null);

  return (
    <div className="join-application-gateway">
      <button
        type="button"
        className="button button-primary"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        {startLabel}
      </button>

      {isOpen ? (
        <div className="join-application-panel card">
          <p className="muted">
            Select the option that best matches your situation. We will guide you to the right next step.
          </p>
          <div className="join-track-options" role="radiogroup" aria-label="Application track selection">
            {(Object.keys(trackLabels) as ApplicationTrack[]).map((track) => (
              <button
                key={track}
                type="button"
                role="radio"
                aria-checked={selectedTrack === track}
                className={`join-track-option ${selectedTrack === track ? "join-track-option-active" : ""}`}
                onClick={() => setSelectedTrack(track)}
              >
                {trackLabels[track]}
              </button>
            ))}
          </div>

          {selectedTrack === "abroad" ? (
            <div className="join-track-result">
              <p className="muted">
                Please complete the international applicant form first. We will follow up after reviewing your
                response.
              </p>
              <a href={ABROAD_FORM_URL} className="button button-primary" target="_blank" rel="noreferrer">
                Open Application Form
              </a>
            </div>
          ) : null}

          {selectedTrack === "fukui" ? (
            <div className="join-track-result">
              <h3>Application Guidance for University of Fukui Students</h3>
              <InternalStudentGuideContent />
            </div>
          ) : null}

          {selectedTrack === "domestic" ? (
            <div className="join-track-result">
              <p className="muted">
                Please complete the domestic external applicant form first. We will review your response and contact
                you for the next step.
              </p>
              <a href={DOMESTIC_FORM_URL} className="button button-primary" target="_blank" rel="noreferrer">
                Open Application Form
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
