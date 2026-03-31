const RESEARCH_TOPIC_MARKER = "[RESEARCH_TOPIC]";

export function parseMemberBio(rawBio: string) {
  const normalizedBio = rawBio.trim();
  const markerMatch = normalizedBio.match(/(?:^|\n)\[RESEARCH_TOPIC\]([\s\S]*)$/);

  if (!markerMatch || typeof markerMatch.index !== "number") {
    return { bio: normalizedBio, researchTopic: "" };
  }

  const bio = normalizedBio.slice(0, markerMatch.index).trim();
  const researchTopic = markerMatch[1].trim();

  return { bio, researchTopic };
}

export function buildMemberBio(bio: string, researchTopic: string) {
  const normalizedBio = bio.trim();
  const normalizedResearchTopic = researchTopic.trim();

  if (!normalizedResearchTopic) {
    return normalizedBio;
  }

  return `${normalizedBio}\n${RESEARCH_TOPIC_MARKER}${normalizedResearchTopic}`;
}
