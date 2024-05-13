export function formatDate(
  date?: string,
  locale: string | string[] | undefined = "en",
  showWeekDay = false,
) {
  if (!date) return "";

  if (showWeekDay) {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  }
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function ruFormatDate(date?: string, showWeekDay = false) {
  return formatDate(date, "ru", showWeekDay).replace(" г.", "");
}

