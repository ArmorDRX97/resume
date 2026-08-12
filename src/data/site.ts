export type Locale = 'ru' | 'en';

export const siteConfig = {
  name: 'Timur Khairullin',
  email: 'armor.d.r.x@gmail.com',
  linkedin: '', // TODO: add the verified LinkedIn profile URL.
  resumeUrl: '', // TODO: add the public CV/PDF URL when the file is available.
  telegram: 'https://t.me/KTR_D7',
  phone: '+7 (700) 270-74-02',
  city: {
    ru: 'Астана, Казахстан',
    en: 'Astana, Kazakhstan',
  },
} as const;

export const localizedPath = (locale: Locale, path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? `/en${normalized}`.replace(/\/{2,}/g, '/') : normalized;
};

export const navigation = {
  ru: [
    { label: 'Работы', href: '/cases/' },
    { label: 'Опыт', href: '/experience/' },
    { label: 'Навыки', href: '/skills/' },
    { label: 'Обо мне', href: '/about/' },
    { label: 'Контакты', href: '/contact/' },
  ],
  en: [
    { label: 'Work', href: '/cases/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'Skills', href: '/skills/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;

export const ui = {
  ru: {
    productDesigner: 'Product Designer',
    positioning: 'Complex B2B systems · Web & Mobile · Design Systems · Technical Prototyping',
    contact: 'Связаться',
    email: 'Email',
    viewCases: 'Посмотреть кейсы',
    allCases: 'Все работы',
    viewCase: 'Открыть кейс',
    nda: 'NDA-safe',
    languageLabel: 'Switch to English',
    footerTitle: 'Проектирую сложные цифровые продукты — от бизнес-логики до интерфейса и передачи в разработку.',
    navigation: 'Навигация',
    contacts: 'Контакты',
    location: 'Локация',
  },
  en: {
    productDesigner: 'Product Designer',
    positioning: 'Complex B2B systems · Web & Mobile · Design Systems · Technical Prototyping',
    contact: 'Get in touch',
    email: 'Email',
    viewCases: 'View case studies',
    allCases: 'All work',
    viewCase: 'View case',
    nda: 'NDA-safe',
    languageLabel: 'Переключить на русский',
    footerTitle: 'I design complex digital products — from business logic to interface and development handoff.',
    navigation: 'Navigation',
    contacts: 'Contact',
    location: 'Location',
  },
} as const;

