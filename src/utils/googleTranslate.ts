export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region?: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    region: 'Primary',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    region: 'Europe',
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    region: 'Europe',
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    region: 'Europe',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'Europe',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    region: 'Europe',
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    region: 'Europe',
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    flag: '🇹🇭',
    region: 'Asia',
  },
  {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    flag: '🇨🇳',
    region: 'Asia',
  },
  {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    flag: '🇲🇾',
    region: 'Asia',
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    region: 'Auto Translate',
  },
];

/**
 * Triggers Google Translate translation to the selected language code.
 */
export function changeLanguageWithGoogleTranslate(targetCode: string): void {
  try {
    localStorage.setItem('fuji_language', targetCode);

    // Cookie configuration for Google Translate
    const domain = window.location.hostname;
    const cookieValue = targetCode === 'en' ? '' : `/en/${targetCode}`;

    if (targetCode === 'en') {
      // Clear translation cookies to restore original English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    } else {
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain};`;
    }

    // Try finding Google Translate dropdown combo
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = targetCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // If element is not yet initialized or changed, reload to let Google Translate read cookie
      window.location.reload();
    }
  } catch (err) {
    console.error('Error changing language via Google Translate:', err);
  }
}

/**
 * Reads current language code from cookie, localStorage, or defaults to 'en'
 */
export function getCurrentLanguageCode(): string {
  try {
    const saved = localStorage.getItem('fuji_language');
    if (saved) return saved;

    // Check googtrans cookie
    const cookies = document.cookie.split(';');
    for (const c of cookies) {
      const trimmed = c.trim();
      if (trimmed.startsWith('googtrans=')) {
        const val = trimmed.substring('googtrans='.length);
        const parts = val.split('/');
        if (parts.length >= 3 && parts[2]) {
          return parts[2];
        }
      }
    }
  } catch {
    // ignore
  }
  return 'en';
}
