import type { Locale } from '@/lib/i18n';

/** Parse YYYY-MM-DD without UTC midnight shifting the calendar day. */
function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatDate(dateString: string, locale: Locale = 'en'): string {
  const date = parseDateString(dateString);
  return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
