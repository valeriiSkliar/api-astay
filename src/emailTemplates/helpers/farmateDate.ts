export function formatDate(
  date: string,
  locale: Intl.LocalesArgument = 'en',
  showWeekDay = false,
) {
  if (showWeekDay) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
  }
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}
