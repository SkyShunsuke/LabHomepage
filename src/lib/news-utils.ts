export function getNewsTypeVariant(type: string | null): string {
  if (!type) {
    return "general";
  }

  const normalized = type.trim().toLowerCase();

  if (
    normalized.includes("award") ||
    normalized.includes("achievement") ||
    normalized.includes("paper") ||
    normalized.includes("受賞")
  ) {
    return "achievement";
  }

  if (
    normalized.includes("event") ||
    normalized.includes("conference") ||
    normalized.includes("workshop") ||
    normalized.includes("seminar") ||
    normalized.includes("イベント") ||
    normalized.includes("学会")
  ) {
    return "event";
  }

  if (
    normalized.includes("media") ||
    normalized.includes("press") ||
    normalized.includes("news") ||
    normalized.includes("記事")
  ) {
    return "media";
  }

  if (
    normalized.includes("recruit") ||
    normalized.includes("hiring") ||
    normalized.includes("join") ||
    normalized.includes("募集")
  ) {
    return "recruitment";
  }

  if (
    normalized.includes("release") ||
    normalized.includes("update") ||
    normalized.includes("announcement") ||
    normalized.includes("公開") ||
    normalized.includes("更新") ||
    normalized.includes("お知らせ")
  ) {
    return "announcement";
  }

  return "general";
}
