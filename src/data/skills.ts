import type { Locale } from './site';

type LocalizedText = Record<Locale, string>;

export type CoreSkill = {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
};

export const coreExpertise: CoreSkill[] = [
  {
    id: 'product-design',
    title: { ru: 'Product Design', en: 'Product Design' },
    text: {
      ru: 'Проектирование продукта от требований и бизнес-задачи до интерфейса и передачи решения в разработку.',
      en: 'Taking a product from requirements and business goals to interface design and development handoff.',
    },
  },
  {
    id: 'complex-systems',
    title: { ru: 'Complex Systems', en: 'Complex Systems' },
    text: {
      ru: 'Dashboard, CRM, ERP и внутренние системы с большим количеством сущностей, ролей, состояний и связей.',
      en: 'Dashboards, CRM, ERP and internal tools with many entities, roles, states and relationships.',
    },
  },
  {
    id: 'ux-ui',
    title: { ru: 'UX/UI', en: 'UX/UI' },
    text: {
      ru: 'Сценарии, информационная архитектура, структура интерфейса, визуальная иерархия и responsive web/mobile UI.',
      en: 'Flows, information architecture, interface structure, visual hierarchy and responsive web/mobile UI.',
    },
  },
  {
    id: 'design-systems',
    title: { ru: 'Design Systems', en: 'Design Systems' },
    text: {
      ru: 'Компоненты, состояния и переиспользуемые паттерны, которые поддерживают consistency дизайна и разработки.',
      en: 'Components, states and reusable patterns that keep design and implementation consistent.',
    },
  },
  {
    id: 'technical-prototyping',
    title: { ru: 'Technical Prototyping', en: 'Technical Prototyping' },
    text: {
      ru: 'Интерактивные web-прототипы для проверки сценариев дальше статичного Figma-макета.',
      en: 'Interactive web prototypes for evaluating product flows beyond a static Figma file.',
    },
  },
  {
    id: 'cross-functional',
    title: { ru: 'Cross-functional Work', en: 'Cross-functional Work' },
    text: {
      ru: 'Работа с аналитиками, заказчиками, разработчиками и техническими специалистами на одном языке.',
      en: 'Working closely with analysts, stakeholders, developers and technical specialists.',
    },
  },
];

export const skillSections = [
  {
    id: 'product-ux',
    title: { ru: 'Product & UX', en: 'Product & UX' },
    description: {
      ru: 'Структурирую задачу и поведение продукта до того, как перехожу к визуальному слою.',
      en: 'I structure the problem and product behavior before moving into visual design.',
    },
    items: {
      ru: ['Анализ требований', 'Декомпозиция задачи', 'Пользовательские сценарии', 'User flows', 'Information architecture', 'Навигация', 'Роли и permissions', 'Состояния интерфейса', 'Empty / error / loading states', 'Edge cases', 'Сложные CRUD-сценарии', 'Dashboard UX', 'Data-heavy interfaces', 'Web / mobile сценарии', 'Согласование решений', 'Development handoff'],
      en: ['Requirements analysis', 'Problem decomposition', 'User scenarios', 'User flows', 'Information architecture', 'Navigation', 'Roles and permissions', 'Interface states', 'Empty / error / loading states', 'Edge cases', 'Complex CRUD flows', 'Dashboard UX', 'Data-heavy interfaces', 'Web / mobile flows', 'Solution alignment', 'Development handoff'],
    },
  },
  {
    id: 'ui-visual',
    title: { ru: 'UI & Visual Design', en: 'UI & Visual Design' },
    description: {
      ru: 'Визуальная часть поддерживает сценарий, плотность данных и понятную иерархию, а не живёт отдельно от продукта.',
      en: 'The visual layer supports the flow, information density and hierarchy instead of operating separately from the product.',
    },
    items: {
      ru: ['Web product UI', 'Mobile UI', 'Responsive layouts', 'Визуальная иерархия', 'Typography', 'Spacing', 'Forms', 'Tables', 'Dashboards', 'Navigation', 'Component states', 'Complex data presentation', 'Presentation design', 'Marketing visuals', 'Supporting graphics', 'Image editing'],
      en: ['Web product UI', 'Mobile UI', 'Responsive layouts', 'Visual hierarchy', 'Typography', 'Spacing', 'Forms', 'Tables', 'Dashboards', 'Navigation', 'Component states', 'Complex data presentation', 'Presentation design', 'Marketing visuals', 'Supporting graphics', 'Image editing'],
    },
  },
  {
    id: 'design-systems',
    title: { ru: 'Design Systems', en: 'Design Systems' },
    description: {
      ru: 'Развиваю согласованные интерфейсные правила и компоненты вместе с реальными ограничениями продукта и frontend.',
      en: 'I evolve coherent interface rules and components alongside real product and frontend constraints.',
    },
    items: {
      ru: ['Reusable components', 'Variants', 'Component states', 'Consistent patterns', 'UI libraries', 'Design ↔ development consistency', 'Documentation', 'Responsive behavior', 'Handoff', 'Работа в существующей системе', 'Контролируемое расширение паттернов'],
      en: ['Reusable components', 'Variants', 'Component states', 'Consistent patterns', 'UI libraries', 'Design ↔ development consistency', 'Documentation', 'Responsive behavior', 'Handoff', 'Working within existing systems', 'Controlled pattern extension'],
    },
  },
  {
    id: 'technical-prototyping',
    title: { ru: 'Technical Prototyping', en: 'Technical Prototyping' },
    description: {
      ru: 'Frontend background помогает проектировать реалистичные решения и превращать дизайн в работающую демонстрацию.',
      en: 'My frontend background helps me design realistic solutions and turn design into a working demonstration.',
    },
    items: {
      ru: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Git', 'Responsive implementation', 'Interactive states', 'Fake-data scenarios', 'Prototype hosting'],
      en: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Git', 'Responsive implementation', 'Interactive states', 'Fake-data scenarios', 'Prototype hosting'],
    },
  },
  {
    id: 'ai-workflow',
    title: { ru: 'AI-assisted Workflow', en: 'AI-assisted Workflow' },
    description: {
      ru: 'Использую AI для ускорения разбора задачи, поиска вариантов, работы с текстом, прототипирования, кода и production-задач. Решения, структура продукта и итоговый контроль остаются моей ответственностью.',
      en: 'I use AI to accelerate problem framing, option exploration, copy, prototyping, code and production tasks. Product decisions, structure and final quality remain my responsibility.',
    },
    items: {
      ru: ['Структурирование информации', 'Ideation', 'Черновики и microcopy', 'Прототипирование', 'Помощь с кодом', 'Production acceleration', 'ChatGPT', 'Claude', 'Codex'],
      en: ['Information structuring', 'Ideation', 'Drafts and microcopy', 'Prototyping', 'Code assistance', 'Production acceleration', 'ChatGPT', 'Claude', 'Codex'],
    },
  },
  {
    id: 'additional',
    title: { ru: 'Additional Toolkit', en: 'Additional Toolkit' },
    description: {
      ru: 'Дополнительные технические и визуальные инструменты — полезная широта, но не отдельное профессиональное позиционирование.',
      en: 'Additional technical and visual tools provide useful breadth without becoming a separate professional identity.',
    },
    items: {
      ru: ['Figma', 'FigJam', 'Adobe Photoshop', 'Adobe Illustrator', 'Laravel', 'GSAP', 'Three.js', 'Presentation design', 'Banners', 'Print materials', 'Brand support'],
      en: ['Figma', 'FigJam', 'Adobe Photoshop', 'Adobe Illustrator', 'Laravel', 'GSAP', 'Three.js', 'Presentation design', 'Banners', 'Print materials', 'Brand support'],
    },
  },
] as const;

