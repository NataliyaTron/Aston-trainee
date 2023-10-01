# ASTON REST COUNTRIES

SPA-приложение для поиска информации о странах мира(наименовании, численности населения, столицы, валюты, государственного языка, соседних стран) с выбором светлой/тёмной темы, с поиском и фильтацией.

## 1 уровень (необходимый минимум)

- Реализованы Требования к функциональности:

**React**

- Пишем функциональные компоненты c хуками в приоритете над классовыми;
- Есть разделение на [умные](/src/pages/HomePage.jsx) и [глупые](/src/components/Container.jsx) компоненты;
- Есть рендеринг списков - [Info](/src/components/Info.jsx), [Card](/src/components/Card.jsx), [HomePage](/src/pages/HomePage.jsx);
- Реализована хотя бы одна форма [Search](/src/components/Search.jsx);
- Есть применение Контекст API - нет;
- Есть применение предохранителя - нет;
- Есть хотя бы один кастомный хук: [useSelector](/src/components/Header.jsx),[useGetAllQuery](/src/api/mockApi.js);
- Хотя бы несколько компонентов используют PropTypes: [Info](/src/components/Info.jsx), [Card](/src/components/Card.jsx);
- Поиск не должен триггерить много запросов к серверу;
- Есть применение lazy + Suspense - нет.

**Redux**

- Используем Modern Redux with Redux Toolkit: [store](/src/store/);
- Используем слайсы - нет;
- Есть хотя бы одна кастомная мидлвара - нет;
- Используется RTK Query: [countryApi](/src/api/countryApi.js), [mockApi](/src/api/mockApi.js);
- Используется Transforming Responses - нет.

## Дополнительно

В проекте использовалась библиотека styled-components.
