export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toDateLocale(locale: string): string {
  if (locale === "ja") {
    return "ja-JP";
  }

  if (locale === "zh") {
    return "zh-CN";
  }

  return "en-US";
}

export function formatDate(date: Date, locale = "en"): string {
  return new Intl.DateTimeFormat(toDateLocale(locale), {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}
