import type { Locale } from './site';

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

// TODO: enrich case studies with verified team composition, additional project screenshots and measurable outcomes when supplied.
// Until then, results remain qualitative and are limited to facts already present in the repository.

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: LocalizedText;
  productType: LocalizedText;
  platform: LocalizedText;
  industry: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  cover?: string;
  visual: 'dashboard' | 'website' | 'mobile' | 'brand' | 'landing' | 'charts' | 'system';
  featured: boolean;
  nda?: boolean;
  context: LocalizedText;
  problem: LocalizedText;
  constraints: LocalizedList;
  contribution: LocalizedList;
  thinking: LocalizedText;
  decisions: Record<Locale, { title: string; text: string }[]>;
  designSystem?: LocalizedText;
  collaboration: LocalizedText;
  result: LocalizedText;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'bintech-government-ecosystem',
    title: 'BinTech Government Ecosystem',
    company: 'BinTech',
    period: '2024–2026',
    role: { ru: 'UI/UX Design, дизайн-система, адаптация под React', en: 'UI/UX design, design system, React adaptation' },
    productType: { ru: 'Государственная B2B/enterprise-экосистема', en: 'Government B2B/enterprise ecosystem' },
    platform: { ru: 'Web-приложение', en: 'Web application' },
    industry: { ru: 'Государственные цифровые сервисы', en: 'Government digital services' },
    summary: {
      ru: 'Сложная экосистема с большим количеством экранов, ролей, форм, статусов и взаимосвязанных сценариев.',
      en: 'A complex ecosystem with many screens, roles, forms, statuses and interconnected workflows.',
    },
    tags: ['Product Design', 'Complex UX', 'Design System', 'B2B'],
    cover: '/images/main_case_1.jpg',
    visual: 'system',
    featured: true,
    nda: true,
    context: {
      ru: 'Крупный цифровой продукт, где интерфейс должен поддерживать множество сущностей и рабочих сценариев. Публичная версия кейса намеренно не раскрывает конфиденциальные детали.',
      en: 'A large digital product whose interface supports many entities and operational flows. This public case intentionally omits confidential product details.',
    },
    problem: {
      ru: 'Собрать понятную и масштабируемую структуру экранов, чтобы сложная бизнес-логика оставалась управляемой для пользователей и команды разработки.',
      en: 'Create a clear, scalable screen structure so complex business logic remains manageable for users and the development team.',
    },
    constraints: {
      ru: ['NDA и ограниченная публичная демонстрация', 'Большое количество форм, статусов, ролей и сценариев', 'Реализация внутри существующего React-приложения', 'Постоянное взаимодействие с аналитиками и backend-разработчиками'],
      en: ['NDA and limited public disclosure', 'Many forms, statuses, roles and workflows', 'Implementation inside an existing React application', 'Ongoing collaboration with analysts and backend developers'],
    },
    contribution: {
      ru: ['Структура экранов и пользовательские сценарии', 'UI/UX и визуальная иерархия', 'UI-kit и библиотека компонентов в Figma', 'Адаптация интерфейсных решений под React', 'Production implementation — команда разработки'],
      en: ['Screen structure and user flows', 'UI/UX and visual hierarchy', 'UI kit and component library in Figma', 'Adapting interface decisions to React', 'Production implementation — development team'],
    },
    thinking: {
      ru: 'Работа начиналась с сущностей, ролей и состояний. Это позволяло строить экраны вокруг реальных рабочих действий, а не вокруг изолированных макетов.',
      en: 'The work started with entities, roles and states. This kept screens centered on real operational actions rather than isolated mockups.',
    },
    decisions: {
      ru: [
        { title: 'Система вместо набора экранов', text: 'Повторяемые сценарии переводились в согласованные компоненты и паттерны, чтобы продукт можно было развивать без визуального расхождения.' },
        { title: 'Состояния как часть дизайна', text: 'Формы, статусы и служебные состояния учитывались до handoff, чтобы макет не скрывал сложность реализации.' },
        { title: 'Реалистичный handoff', text: 'Решения сверялись с ограничениями React-приложения и обсуждались с технической командой.' },
      ],
      en: [
        { title: 'A system, not a screen collection', text: 'Recurring workflows became consistent components and patterns so the product could grow without visual drift.' },
        { title: 'States as part of design', text: 'Forms, statuses and system states were considered before handoff instead of hiding implementation complexity.' },
        { title: 'Realistic handoff', text: 'Decisions were aligned with React constraints and discussed with the technical team.' },
      ],
    },
    designSystem: {
      ru: 'Библиотека компонентов и согласованные состояния в Figma поддерживали единые правила для новых экранов и реализации.',
      en: 'A Figma component library and consistent states provided shared rules for new screens and implementation.',
    },
    collaboration: {
      ru: 'Работа с аналитиками и backend-разработчиками помогала уточнять требования и отделять интерфейсное решение от технических допущений.',
      en: 'Working with analysts and backend developers helped clarify requirements and separate interface decisions from technical assumptions.',
    },
    result: {
      ru: 'Сформирована единая визуальная система и основа для масштабирования экранов и более предсказуемой передачи решений в разработку.',
      en: 'A unified visual system and foundation for scaling screens and making development handoff more predictable.',
    },
  },
  {
    slug: 'helios-erp-system',
    title: 'Helios ERP System',
    company: 'Helios Soft',
    period: '2021–2023',
    role: { ru: 'UI/UX Design, frontend, участие в Laravel-логике', en: 'UI/UX design, frontend, partial Laravel work' },
    productType: { ru: 'ERP-система', en: 'ERP system' },
    platform: { ru: 'Web-приложение', en: 'Web application' },
    industry: { ru: 'Корпоративные бизнес-системы', en: 'Enterprise business software' },
    summary: {
      ru: 'Плотный data-heavy интерфейс для форм, таблиц, фильтров, статусов и внутренних бизнес-процессов.',
      en: 'A dense, data-heavy interface for forms, tables, filters, statuses and internal business processes.',
    },
    tags: ['ERP', 'Product UI', 'Data-heavy', 'Frontend Background'],
    visual: 'dashboard',
    featured: true,
    context: {
      ru: 'Web-версия ERP для ежедневной работы с данными и внутренними операциями компании.',
      en: 'A web ERP used for day-to-day work with company data and internal operations.',
    },
    problem: {
      ru: 'Сохранить плотность рабочего интерфейса, но сделать формы, таблицы и статусы читаемыми и пригодными для дальнейшего развития.',
      en: 'Preserve the density of an operational interface while keeping forms, tables and statuses readable and extendable.',
    },
    constraints: {
      ru: ['Существующая Laravel-система', 'Большой объём данных и рабочих форм', 'Необходимость совмещать дизайн с реальной frontend-реализацией'],
      en: ['Existing Laravel system', 'Large amounts of data and operational forms', 'Need to connect design directly to real frontend implementation'],
    },
    contribution: {
      ru: ['Визуальная концепция', 'Экраны и компоненты ERP', 'Интерфейсная логика и состояния', 'Frontend web-версии', 'Частичное участие в Laravel-логике'],
      en: ['Visual direction', 'ERP screens and components', 'Interface logic and states', 'Web frontend implementation', 'Partial involvement in Laravel logic'],
    },
    thinking: {
      ru: 'Приоритетом была не декоративность, а скорость чтения данных, повторяемость паттернов и предсказуемое поведение форм.',
      en: 'The priority was not decoration but data readability, repeatable patterns and predictable form behavior.',
    },
    decisions: {
      ru: [
        { title: 'Плотность без хаоса', text: 'Контент группировался по рабочим действиям, а повторяемые элементы получали устойчивую иерархию.' },
        { title: 'Единые формы и статусы', text: 'Повторяемые состояния оформлялись как общий интерфейсный язык вместо локальных исключений.' },
        { title: 'Click, not show', text: 'Frontend-участие позволяло проверять решения непосредственно в работающем web-интерфейсе.' },
      ],
      en: [
        { title: 'Density without chaos', text: 'Content was grouped by operational action and recurring elements received a stable hierarchy.' },
        { title: 'Consistent forms and statuses', text: 'Recurring states were treated as a shared interface language instead of local exceptions.' },
        { title: 'Click, not show', text: 'Frontend involvement made it possible to evaluate decisions directly in a working web interface.' },
      ],
    },
    collaboration: {
      ru: 'Дизайн и frontend развивались рядом, поэтому стоимость и ограничения UI-решений были видны раньше.',
      en: 'Design and frontend evolved together, making the cost and constraints of UI decisions visible earlier.',
    },
    result: {
      ru: 'Создана понятная интерфейсная основа ERP, которую можно развивать через повторяемые компоненты и единые UI-правила.',
      en: 'A clear ERP interface foundation that can be extended through repeatable components and shared UI rules.',
    },
  },
  {
    slug: 'kindergarten-face-recognition-app',
    title: 'Balasan',
    company: 'Helios Soft',
    period: '2024–2026',
    role: { ru: 'Product/UX, UI, интерактивный прототип', en: 'Product/UX, UI, interactive prototype' },
    productType: { ru: 'Система управления посещаемостью детей', en: 'Child attendance management system' },
    platform: { ru: 'Web-dashboard и mobile', en: 'Web dashboard and mobile' },
    industry: { ru: 'Образование / computer vision', en: 'Education / computer vision' },
    summary: {
      ru: 'Web-dashboard и мобильный сценарий для автоматизации учёта посещаемости с распознаванием лиц.',
      en: 'A web dashboard and mobile flow for automating attendance tracking with face recognition.',
    },
    tags: ['Product Design', 'Dashboard', 'Mobile', 'Complex UX'],
    cover: '/images/portfolio/figma/balasan/cover.jpg',
    visual: 'mobile',
    featured: true,
    context: {
      ru: 'Концепция связывает сложную технологию распознавания лиц с понятными сценариями для сотрудников и мобильных пользователей.',
      en: 'The concept connects face-recognition technology with clear workflows for staff and mobile users.',
    },
    problem: {
      ru: 'Показать технологически сложную идею через понятный продуктовый поток, роли, состояния и ключевые экраны.',
      en: 'Explain a technically complex idea through a clear product flow, roles, states and key screens.',
    },
    constraints: {
      ru: ['Несколько типов пользователей и платформ', 'Сценарии отметки посещаемости и статусы детей', 'Концептуальная стадия без подтверждённых продуктовых метрик'],
      en: ['Multiple user types and platforms', 'Attendance marking workflows and child statuses', 'Concept stage without verified product metrics'],
    },
    contribution: {
      ru: ['User flow и структура экранов', 'Dashboard UX', 'Mobile UI', 'Визуальное направление', 'Интерактивный Figma-прототип', 'Production implementation — не подтверждена'],
      en: ['User flow and screen structure', 'Dashboard UX', 'Mobile UI', 'Visual direction', 'Interactive Figma prototype', 'Production implementation — not confirmed'],
    },
    thinking: {
      ru: 'Сценарии были разложены по ролям и ежедневным действиям: обзор статусов, сотрудники, группы, дети и табель посещений.',
      en: 'Flows were organized around roles and daily actions: status overview, staff, groups, children and attendance records.',
    },
    decisions: {
      ru: [
        { title: 'Обзор до деталей', text: 'Dashboard сначала показывает состояние посещаемости, а затем ведёт к группам и отдельным записям.' },
        { title: 'Роли через навигацию', text: 'Основные сущности вынесены в понятную навигацию вместо перегрузки одного экрана.' },
        { title: 'Связка web и mobile', text: 'Мобильный сценарий дополняет web-dashboard и показывает продукт как систему, а не один макет.' },
      ],
      en: [
        { title: 'Overview before detail', text: 'The dashboard shows attendance state first, then leads into groups and individual records.' },
        { title: 'Roles through navigation', text: 'Core entities use clear navigation instead of overloading a single screen.' },
        { title: 'Web and mobile together', text: 'The mobile flow complements the dashboard and presents the idea as a product system rather than one mockup.' },
      ],
    },
    collaboration: {
      ru: 'Кейс демонстрирует дизайн-концепцию и прототип. Данные о составе команды и production-реализации требуют уточнения.',
      en: 'This case demonstrates the design concept and prototype. Team composition and production implementation still need confirmation.',
    },
    result: {
      ru: 'Создана демонстрационная основа для обсуждения сценариев, ограничений и дальнейшей реализации продукта.',
      en: 'A demonstrable foundation for discussing workflows, constraints and future product implementation.',
    },
  },
  {
    slug: 'jobtron-crm', title: 'Jobtron CRM', company: 'Jobtron', period: '2022–2023',
    role: { ru: 'Frontend, компоненты, участие в UX', en: 'Frontend, components, UX contribution' },
    productType: { ru: 'CRM / внутренний продукт', en: 'CRM / internal product' }, platform: { ru: 'Web', en: 'Web' }, industry: { ru: 'Business software', en: 'Business software' },
    summary: { ru: 'Клиентская часть CRM, компоненты и переработка дизайн-концепции по ходу разработки.', en: 'Client-side CRM work, components and design concept improvements during development.' },
    tags: ['CRM', 'Components', 'UX', 'Frontend'], visual: 'dashboard', featured: false,
    context: { ru: 'Рабочая CRM с постоянно развивающимися компонентами и состояниями.', en: 'An operational CRM with continuously evolving components and states.' },
    problem: { ru: 'Реализовывать интерфейс и одновременно улучшать согласованность рабочих сценариев.', en: 'Implement the interface while improving the coherence of operational workflows.' },
    constraints: { ru: ['Существующий продукт', 'Работа в продуктовой команде'], en: ['Existing product', 'Work within a product team'] },
    contribution: { ru: ['Клиентская часть', 'Пользовательские компоненты', 'Участие в переработке UX', 'Backend — не мой вклад'], en: ['Client-side implementation', 'User-facing components', 'Contribution to UX improvements', 'Backend — not my contribution'] },
    thinking: { ru: 'Компоненты рассматривались в контексте рабочих сценариев, а не как изолированная вёрстка.', en: 'Components were evaluated in the context of operational flows rather than as isolated implementation.' },
    decisions: { ru: [{ title: 'Согласованность', text: 'Повторяемые элементы приводились к общему поведению по мере развития продукта.' }], en: [{ title: 'Consistency', text: 'Recurring elements were aligned to shared behavior as the product evolved.' }] },
    collaboration: { ru: 'Работа с дизайнерами и backend-разработчиками.', en: 'Collaboration with designers and backend developers.' },
    result: { ru: 'Интерфейс получил более согласованные компоненты и улучшенную UX-логику.', en: 'The interface gained more consistent components and improved UX logic.' },
  },
  {
    slug: 'csi-information-system', title: 'CSI Information System', company: 'Center for Strategic Initiatives', period: '2020–2026',
    role: { ru: 'Frontend Developer (Vue.js), UI-доработки', en: 'Frontend Developer (Vue.js), UI refinements' },
    productType: { ru: 'Крупная информационная система', en: 'Large information system' }, platform: { ru: 'Web', en: 'Web' }, industry: { ru: 'Data-heavy software', en: 'Data-heavy software' },
    summary: { ru: 'Модули, сложные формы, графики и визуализация данных по Figma-макетам.', en: 'Modules, complex forms, charts and data visualization built from Figma designs.' },
    tags: ['Vue.js', 'Data-heavy UI', 'Forms', 'Charts'], visual: 'charts', featured: false, nda: true,
    context: { ru: 'Информационная система с большим количеством модулей и данных.', en: 'An information system with many modules and large data volumes.' },
    problem: { ru: 'Сохранить точность макетов и адаптировать их к реальным требованиям продукта.', en: 'Preserve design accuracy while adapting it to real product requirements.' },
    constraints: { ru: ['NDA', 'Существующая Vue.js-система', 'Сложные формы и данные'], en: ['NDA', 'Existing Vue.js system', 'Complex forms and data'] },
    contribution: { ru: ['Vue.js-компоненты', 'Формы и графики', 'UI-доработки', 'Исходный product design — не мой'], en: ['Vue.js components', 'Forms and charts', 'UI refinements', 'Original product design — not my contribution'] },
    thinking: { ru: 'Технический опыт помогал выявлять состояния и ограничения, которых не было видно в статичных макетах.', en: 'Technical experience helped surface states and constraints not visible in static designs.' },
    decisions: { ru: [{ title: 'Реальные состояния', text: 'Компоненты адаптировались под фактические данные и требования модулей.' }], en: [{ title: 'Real states', text: 'Components were adapted to actual data and module requirements.' }] },
    collaboration: { ru: 'Работа по Figma-макетам в технической команде.', en: 'Implementation from Figma within a technical team.' },
    result: { ru: 'Разработаны и доработаны интерфейсные модули системы.', en: 'Interface modules were implemented and refined.' },
  },
  {
    slug: 'gosauda-marketplace', title: 'GoSauda Marketplace', company: 'GoSauda', period: '2019–2022',
    role: { ru: 'UI/UX и HTML-разработка', en: 'UI/UX and HTML development' },
    productType: { ru: 'Marketplace', en: 'Marketplace' }, platform: { ru: 'Web и mobile', en: 'Web and mobile' }, industry: { ru: 'E-commerce', en: 'E-commerce' },
    summary: { ru: 'Торговая платформа, сайт и мобильное приложение: экраны, компоненты и адаптивная реализация.', en: 'Marketplace, website and mobile app work across screens, components and responsive implementation.' },
    tags: ['Marketplace', 'Web & Mobile', 'UI/UX'], visual: 'website', featured: false,
    context: { ru: 'Торговая платформа с web и mobile-сценариями.', en: 'A marketplace with web and mobile flows.' },
    problem: { ru: 'Соединить коммерческие сценарии, структуру каталога и техническую реализацию.', en: 'Connect commercial workflows, catalog structure and technical implementation.' },
    constraints: { ru: ['Несколько платформ', 'Адаптивная реализация'], en: ['Multiple platforms', 'Responsive implementation'] },
    contribution: { ru: ['Новые экраны', 'Компоненты', 'Пользовательские сценарии', 'Адаптивная вёрстка'], en: ['New screens', 'Components', 'User flows', 'Responsive implementation'] },
    thinking: { ru: 'Дизайн развивался вместе с реальными сценариями каталога и покупки.', en: 'Design evolved alongside real catalog and purchase workflows.' },
    decisions: { ru: [{ title: 'Web + mobile', text: 'Сценарии проектировались с учётом разных размеров экранов.' }], en: [{ title: 'Web + mobile', text: 'Flows were designed for different screen sizes.' }] },
    collaboration: { ru: 'UI/UX и frontend в рамках продуктовой работы.', en: 'UI/UX and frontend within product delivery.' },
    result: { ru: 'Платформа получила более цельный интерфейс для web и mobile.', en: 'The platform received a more coherent interface across web and mobile.' },
  },
  {
    slug: 'aman-online-cashbox-business-systems', title: 'Aman Online Cashbox & Business Systems', company: 'Aman Systems', period: '2018–2020',
    role: { ru: 'Интерфейсы и frontend', en: 'Interface design and frontend' },
    productType: { ru: 'SaaS / business tools', en: 'SaaS / business tools' }, platform: { ru: 'Web', en: 'Web' }, industry: { ru: 'Business operations', en: 'Business operations' },
    summary: { ru: 'Онлайн-касса, бухгалтерия, складской учёт и внутренние web-системы.', en: 'Online cash register, accounting, inventory and internal web systems.' },
    tags: ['Business Tools', 'Vue.js', 'Laravel'], visual: 'system', featured: false,
    context: { ru: 'Несколько повседневных бизнес-инструментов в одной продуктовой среде.', en: 'Several day-to-day business tools within one product environment.' },
    problem: { ru: 'Сделать операционные интерфейсы практичными и подготовить их к SPA-архитектуре.', en: 'Make operational interfaces practical and prepare them for a SPA architecture.' },
    constraints: { ru: ['Существующие бизнес-процессы', 'Переход к Laravel + Vue.js'], en: ['Existing business processes', 'Transition to Laravel + Vue.js'] },
    contribution: { ru: ['Интерфейсы', 'Frontend', 'Презентационные и обучающие материалы'], en: ['Interfaces', 'Frontend', 'Presentation and training materials'] },
    thinking: { ru: 'Основой были ежедневные операции и понятность действий.', en: 'Daily operations and action clarity were the foundation.' },
    decisions: { ru: [{ title: 'Операционный фокус', text: 'Интерфейс строился вокруг повторяющихся рабочих задач.' }], en: [{ title: 'Operational focus', text: 'The interface was structured around recurring work tasks.' }] },
    collaboration: { ru: 'Дизайн и frontend в рамках разработки продуктов.', en: 'Design and frontend within product development.' },
    result: { ru: 'Создана интерфейсная основа для дальнейшего развития систем.', en: 'An interface foundation was created for further product development.' },
  },
  {
    slug: 'helios-corporate-website-brandbook', title: 'Helios Corporate Website & Brandbook', company: 'Helios Soft', period: '2024–2026',
    role: { ru: 'UI/UX и visual design', en: 'UI/UX and visual design' },
    productType: { ru: 'Корпоративный сайт и бренд-система', en: 'Corporate website and brand system' }, platform: { ru: 'Web / brand', en: 'Web / brand' }, industry: { ru: 'IT services', en: 'IT services' },
    summary: { ru: 'Корпоративный сайт, брендбук, презентации и digital-материалы.', en: 'Corporate website, brandbook, presentations and digital materials.' },
    tags: ['Web Design', 'Brandbook', 'Digital'], visual: 'brand', featured: false,
    context: { ru: 'Обновление цифровой и визуальной системы компании.', en: 'A refresh of the company’s digital and visual system.' },
    problem: { ru: 'Связать сайт и коммуникационные материалы в цельную визуальную систему.', en: 'Connect the website and communication materials into a coherent visual system.' },
    constraints: { ru: ['Несколько форматов коммуникации'], en: ['Multiple communication formats'] },
    contribution: { ru: ['Сайт', 'Визуальные правила', 'Презентации', 'Digital и печатные материалы'], en: ['Website', 'Visual rules', 'Presentations', 'Digital and print materials'] },
    thinking: { ru: 'Сайт и бренд-носители проектировались как части одной системы.', en: 'The website and brand assets were designed as parts of one system.' },
    decisions: { ru: [{ title: 'Единый язык', text: 'Повторяемые визуальные принципы связали разные форматы.' }], en: [{ title: 'Shared language', text: 'Recurring visual principles connected multiple formats.' }] },
    collaboration: { ru: 'Дизайн и подготовка материалов внутри компании.', en: 'Design and asset production within the company.' },
    result: { ru: 'Компания получила более цельную визуальную основу.', en: 'The company received a more coherent visual foundation.' },
  },
  {
    slug: 'landing-pages-corporate-websites', title: 'Landing Pages & Corporate Websites', company: 'Freelance / Companies', period: '2019–2026',
    role: { ru: 'Web design и frontend', en: 'Web design and frontend' },
    productType: { ru: 'Коллекция web-проектов', en: 'Web project collection' }, platform: { ru: 'Web', en: 'Web' }, industry: { ru: 'Разные отрасли', en: 'Multiple industries' },
    summary: { ru: 'Лендинги, корпоративные сайты и посадочные страницы.', en: 'Landing pages, corporate websites and campaign pages.' },
    tags: ['Web Design', 'Responsive', 'Frontend'], visual: 'landing', featured: false,
    context: { ru: 'Коллекция коммерческих и корпоративных web-задач.', en: 'A collection of commercial and corporate web work.' },
    problem: { ru: 'Быстро донести ценность и обеспечить корректный responsive UI.', en: 'Communicate value quickly while delivering reliable responsive UI.' },
    constraints: { ru: ['Разные бренды и объёмы контента'], en: ['Different brands and content volumes'] },
    contribution: { ru: ['Структура', 'UI', 'Адаптивные версии', 'HTML/CSS и анимации'], en: ['Structure', 'UI', 'Responsive design', 'HTML/CSS and motion'] },
    thinking: { ru: 'Каждая страница строилась вокруг ясной коммуникационной задачи.', en: 'Each page was built around a clear communication goal.' },
    decisions: { ru: [{ title: 'Ясный первый экран', text: 'Основная ценность и действие получали максимальный приоритет.' }], en: [{ title: 'Clear first viewport', text: 'The core value and action received the highest priority.' }] },
    collaboration: { ru: 'Разные форматы: самостоятельная работа и взаимодействие с командами.', en: 'A mix of independent delivery and team collaboration.' },
    result: { ru: 'Созданы и запущены публичные web-проекты.', en: 'Public web projects were designed and launched.' },
  },
  {
    slug: 'digital-print-design-collection', title: 'Digital & Print Design Collection', company: 'Freelance / Companies', period: '2018–2026',
    role: { ru: 'Visual design', en: 'Visual design' },
    productType: { ru: 'Additional creative work', en: 'Additional creative work' }, platform: { ru: 'Digital / print', en: 'Digital / print' }, industry: { ru: 'Коммуникации', en: 'Communications' },
    summary: { ru: 'Презентации, баннеры, рекламные и печатные материалы.', en: 'Presentations, banners, advertising and print materials.' },
    tags: ['Presentation', 'Visual Design', 'Print'], visual: 'brand', featured: false,
    context: { ru: 'Дополнительная визуальная практика за пределами продуктовых интерфейсов.', en: 'Additional visual practice outside product interfaces.' },
    problem: { ru: 'Создавать понятные и применимые материалы для реальных коммуникаций.', en: 'Create clear and usable materials for real communication needs.' },
    constraints: { ru: ['Разные форматы и носители'], en: ['Multiple formats and media'] },
    contribution: { ru: ['Визуальные концепции', 'Макеты', 'Презентации', 'Digital и print'], en: ['Visual concepts', 'Layouts', 'Presentations', 'Digital and print'] },
    thinking: { ru: 'Визуальное решение подчинялось задаче и носителю.', en: 'The visual solution followed the communication goal and medium.' },
    decisions: { ru: [{ title: 'Формат прежде декора', text: 'Композиция учитывала реальный способ использования материала.' }], en: [{ title: 'Format before decoration', text: 'Composition reflected how the material would actually be used.' }] },
    collaboration: { ru: 'Работа для компаний и freelance-заказов.', en: 'Work for companies and freelance projects.' },
    result: { ru: 'Собрана коллекция реальных коммуникационных материалов.', en: 'A collection of real communication materials was delivered.' },
  },
];

export type SelectedWork = {
  title: string;
  type: LocalizedText;
  role: LocalizedText;
  value: LocalizedText;
  tags: string[];
  cover: string;
  url: string;
};

export const selectedWork: SelectedWork[] = [
  { title: 'QazQar Mobile App', type: { ru: 'Мобильный сервис аренды автомобилей', en: 'Mobile car rental service' }, role: { ru: 'UI/UX Design', en: 'UI/UX Design' }, value: { ru: 'Авторизация, подбор автомобиля, фильтры и путь к бронированию.', en: 'Authentication, vehicle discovery, filters and the path to booking.' }, tags: ['Mobile', 'Filters', 'Product UI'], cover: '/images/portfolio/figma/qazqar-app/cover.jpg', url: 'https://embed.figma.com/design/NEKl84s43dYf3RJXJXZUz9/Qazqar-mobile-App-UI-UX?node-id=661-3622&embed-host=share' },
  { title: 'Izbasar', type: { ru: 'Сайт карьерной программы', en: 'Career program website' }, role: { ru: 'UI/UX, frontend, backend', en: 'UI/UX, frontend, backend' }, value: { ru: 'Публичный responsive-сайт программы развития молодых специалистов.', en: 'A public responsive website for a young specialist development program.' }, tags: ['Web', 'Responsive', 'Public'], cover: '/images/portfolio/sites/izbasar/cover.jpg', url: 'https://izbasar.kazatomprom.kz/' },
  { title: 'Murager', type: { ru: 'Сайт образовательной программы', en: 'Education program website' }, role: { ru: 'UI/UX, frontend, backend', en: 'UI/UX, frontend, backend' }, value: { ru: 'Ясная подача условий грантовой программы и сценария заявки.', en: 'Clear communication of grant terms and the application flow.' }, tags: ['Web', 'Education', 'Responsive'], cover: '/images/portfolio/sites/murager/cover.jpg', url: 'https://murager.kazatomprom.kz/' },
  { title: 'QazQar', type: { ru: 'Сервис аренды автомобилей', en: 'Car rental service' }, role: { ru: 'UI/UX, frontend, backend', en: 'UI/UX, frontend, backend' }, value: { ru: 'Публичная web-основа сервиса проката без водителя.', en: 'A public web foundation for a self-drive car rental service.' }, tags: ['Web Product', 'Rental', 'Full Cycle'], cover: '/images/portfolio/sites/qazqar/cover.jpg', url: 'https://qazqar.kz/' },
  { title: 'Helios Soft', type: { ru: 'Корпоративный сайт', en: 'Corporate website' }, role: { ru: 'UI/UX, frontend, backend', en: 'UI/UX, frontend, backend' }, value: { ru: 'Структура услуг, визуальная система и управление контентом.', en: 'Service structure, visual system and content management.' }, tags: ['Corporate', 'Web', 'CMS'], cover: '/images/portfolio/sites/helios-soft/cover.jpg', url: 'https://fvr.kz/' },
  { title: 'BInTech', type: { ru: 'Корпоративный one-page сайт', en: 'Corporate one-page website' }, role: { ru: 'UI/UX, frontend', en: 'UI/UX, frontend' }, value: { ru: 'Компактная презентация компании, компетенций и контакта.', en: 'A compact presentation of the company, capabilities and contact.' }, tags: ['Corporate', 'One-page', 'Responsive'], cover: '/images/portfolio/sites/bintech/cover.jpg', url: 'https://bintech.kz/' },
  { title: 'Aitia Systems', type: { ru: 'Концепция корпоративного сайта', en: 'Corporate website concept' }, role: { ru: 'UI/UX Design', en: 'UI/UX Design' }, value: { ru: 'Исходная дизайн-концепция и структура многостраничного сайта IT-компании.', en: 'The original design direction and structure for a multi-page IT company website.' }, tags: ['Concept', 'Corporate', 'Web UI'], cover: '/images/portfolio/sites/aitia-systems/cover.jpg', url: 'https://aitiasystems.kz/' },
  { title: 'ҚазМұнайГаз', type: { ru: 'Страницы корпоративной платформы', en: 'Corporate platform pages' }, role: { ru: 'Частичный UI/UX и frontend', en: 'Partial UI/UX and frontend' }, value: { ru: 'Адаптация интерфейсных блоков под существующую корпоративную систему и backend.', en: 'Interface blocks adapted to an existing corporate system and backend.' }, tags: ['Existing System', 'Corporate', 'Frontend'], cover: '/images/portfolio/sites/kmg/cover.jpg', url: 'https://www.kmg.kz/' },
  { title: 'Total Service', type: { ru: 'Frontend по сложному визуальному макету', en: 'Frontend from a complex visual design' }, role: { ru: 'Frontend implementation', en: 'Frontend implementation' }, value: { ru: 'Точная responsive-вёрстка с сохранением деталей исходного дизайна.', en: 'Accurate responsive implementation preserving the source design details.' }, tags: ['Archive', 'Responsive', 'Frontend'], cover: '/images/portfolio/sites/total-service/cover.jpg', url: 'https://totalservice.kz/' },
  { title: 'HiTarget', type: { ru: 'Концепция продуктового сайта', en: 'Product website concept' }, role: { ru: 'UI/UX, совместно с другим дизайнером', en: 'UI/UX, co-designed' }, value: { ru: 'Исходная визуальная концепция и структура экранов.', en: 'The original visual direction and screen structure.' }, tags: ['Web UI', 'Figma', 'Collaboration'], cover: '/images/portfolio/figma/hitarget/cover.jpg', url: 'https://embed.figma.com/design/jHsDs7Rt0b0wp4Mb5Hg2hb/Hitarget?node-id=147-1&embed-host=share' },
  { title: 'Puls', type: { ru: 'Концепция медицинского mobile-приложения', en: 'Healthcare mobile app concept' }, role: { ru: 'UI/UX Design', en: 'UI/UX Design' }, value: { ru: 'Выбор услуги, запись и структура ключевых экранов.', en: 'Service selection, booking and key screen structure.' }, tags: ['Archive', 'Mobile', 'Healthcare'], cover: '/images/portfolio/figma/puls/cover.jpg', url: 'https://embed.figma.com/design/5JLu7Y1RUZZoFhGq1Cq5vg/mobile-App-PULS-UI%5CUX?node-id=882-129&embed-host=share' },
];

export const featuredCases = caseStudies.filter((item) => item.featured);
