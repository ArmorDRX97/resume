import type { Locale } from './site';

type LocalizedText = Record<Locale, string>;

export type ExperienceItem = {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  employmentType?: LocalizedText; // TODO: verify the employment type for every overlapping role before displaying it.
  summary: LocalizedText;
  responsibilities: Record<Locale, string[]>;
  focus: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'BinTech',
    role: { ru: 'UI/UX Designer | Frontend Developer', en: 'UI/UX Designer | Frontend Developer' },
    period: { ru: '2024 — настоящее время', en: '2024 — Present' },
    location: { ru: 'Астана', en: 'Astana' },
    summary: {
      ru: 'Проектирование UI/UX крупной государственной экосистемы и развитие интерфейсной системы для реального React-продукта.',
      en: 'UI/UX design for a large government ecosystem and evolution of an interface system for a production React product.',
    },
    responsibilities: {
      ru: ['Структура экранов и пользовательские сценарии сложной экосистемы.', 'Дизайн-система и библиотека компонентов в Figma.', 'Адаптация решений под React и работа с аналитиками и backend-разработчиками.'],
      en: ['Screen structure and user flows for a complex ecosystem.', 'Design system and component library in Figma.', 'Adapting solutions to React while collaborating with analysts and backend developers.'],
    },
    focus: ['Product Design', 'Complex Systems', 'Design Systems'],
  },
  {
    company: 'Freelance',
    role: { ru: 'Product Designer с опытом технического прототипирования', en: 'Product Designer with technical prototyping experience' },
    period: { ru: '2020 — настоящее время', en: '2020 — Present' },
    location: { ru: 'Удалённо', en: 'Remote' },
    summary: {
      ru: '20+ коммерческих проектов: web/mobile интерфейсы, дизайн-системы, сайты, презентации, визуальные материалы и работающие HTML-прототипы.',
      en: '20+ commercial projects across web/mobile interfaces, design systems, websites, presentations, visual assets and working HTML prototypes.',
    },
    responsibilities: {
      ru: ['Декомпозиция небольших продуктовых и коммуникационных задач.', 'UX/UI, responsive layouts и визуальная подача.', 'Интерактивные HTML-мокапы и frontend-реализация, когда это было частью задачи.'],
      en: ['Breaking down focused product and communication problems.', 'UX/UI, responsive layouts and visual direction.', 'Interactive HTML mockups and frontend implementation when required by the project.'],
    },
    focus: ['Product Design', 'Web & Mobile', 'Prototyping'],
  },
  {
    company: 'Helios Soft',
    role: { ru: 'UI/UX Designer / Senior Programmer', en: 'UI/UX Designer / Senior Programmer' },
    period: { ru: '2021 — 2026', en: '2021 — 2026' },
    location: { ru: 'Астана', en: 'Astana' },
    summary: {
      ru: 'ERP-интерфейсы и развитие цифровой визуальной системы компании: корпоративный сайт, брендбук и продуктовые материалы.',
      en: 'ERP interfaces and development of the company’s digital visual system, including its corporate website, brandbook and product materials.',
    },
    responsibilities: {
      ru: ['Визуальная концепция и frontend web-версии ERP.', 'Экраны, компоненты, формы и интерфейсная логика.', 'Корпоративный сайт, брендбук, презентации и концепция мобильного приложения.'],
      en: ['Visual direction and frontend work for the web ERP.', 'Screens, components, forms and interface logic.', 'Corporate website, brandbook, presentations and a mobile application concept.'],
    },
    focus: ['ERP', 'UX/UI', 'Frontend Background'],
  },
  {
    company: 'Center for Strategic Initiatives',
    role: { ru: 'Frontend Developer (Vue.js)', en: 'Frontend Developer (Vue.js)' },
    period: { ru: '2020 — 2026', en: '2020 — 2026' },
    location: { ru: 'Астана', en: 'Astana' },
    summary: {
      ru: 'Интерфейсы крупной информационной системы с модулями, сложными формами, графиками и визуализацией данных.',
      en: 'Interfaces for a large information system with multiple modules, complex forms, charts and data visualizations.',
    },
    responsibilities: {
      ru: ['Разработка Vue.js-компонентов по Figma-макетам.', 'Сложные формы, графики и data-heavy модули.', 'UI-доработки с учётом реальных требований и технических ограничений.'],
      en: ['Building Vue.js components from Figma designs.', 'Complex forms, charts and data-heavy modules.', 'UI refinements shaped by real requirements and technical constraints.'],
    },
    focus: ['Data-heavy UI', 'Vue.js', 'Complex Forms'],
  },
  {
    company: 'Jobtron',
    role: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    period: { ru: '2022 — 2023', en: '2022 — 2023' },
    location: { ru: 'Шымкент', en: 'Shymkent' },
    summary: {
      ru: 'Клиентская часть CRM: компоненты, рабочие сценарии и участие в переработке дизайн-концепции по ходу разработки.',
      en: 'Client-side CRM work: components, operational flows and participation in evolving the design concept during development.',
    },
    responsibilities: {
      ru: ['Пользовательские компоненты и состояния CRM.', 'Улучшение UX рабочих сценариев.', 'Взаимодействие с дизайнерами и backend-разработчиками.'],
      en: ['CRM components and interface states.', 'UX improvements for operational workflows.', 'Collaboration with designers and backend developers.'],
    },
    focus: ['CRM', 'Components', 'UX Improvement'],
  },
  {
    company: 'GoSauda / Aman Systems / PING MEDIA / Foxinet',
    role: { ru: 'UI/UX, web design и frontend', en: 'UI/UX, web design and frontend' },
    period: { ru: '2018 — 2022', en: '2018 — 2022' },
    location: { ru: 'Казахстан / удалённо', en: 'Kazakhstan / Remote' },
    summary: {
      ru: 'Ранние web/digital задачи: торговые платформы, онлайн-кассы, складской учёт, корпоративные сайты и маркетинговые материалы.',
      en: 'Early web and digital work across marketplaces, online cash registers, inventory tools, corporate websites and marketing assets.',
    },
    responsibilities: {
      ru: ['Интерфейсы web-продуктов и адаптивная вёрстка.', 'Работа с Angular, Vue и Laravel в рамках продуктовых задач.', 'Визуальные и коммуникационные материалы для запуска.'],
      en: ['Web product interfaces and responsive implementation.', 'Angular, Vue and Laravel within product delivery tasks.', 'Visual and communication assets supporting product launches.'],
    },
    focus: ['Web UI', 'Business Tools', 'Digital Design'],
  },
];

