
Запуск проекта

 1. git clone <repo>
 2. cd testove-dashbord
 3. npm install
 4. npm run dev

Структура ПРОЕКТА


 my-app/
├── public/                 # Статические файлы
│   └── vite.svg
├── src/
│   ├── components/         # Переиспользуемые компоненты
│   │   ├── Layout.jsx      # Основной лейаут с sidebar
│   │   └── MetricCard.jsx  # Карточка метрики
│   ├── data/              # Mock данные
│   │   └── mockData.js    # Пользователи и метрики
│   ├── pages/             # Страницы приложения
│   │   ├── Overview.jsx   # Главная страница с метриками
│   │   ├── Users.jsx      # Управление пользователями
│   │   └── Settings.jsx   # Настройки приложения
│   ├── index.css         # Глобальные стили + Tailwind    
│   │
│   ├── App.jsx            # Главный компонент с роутингом
│   └── main.jsx           # Точка входа приложения
├── index.html             # HTML шаблон
├── package.json           # Зависимости и скрипты
├── tailwind.config.js     # Конфигурация Tailwind
├── postcss.config.js      # Конфигурация PostCSS
└── vite.config.js         # Конфигурация Vite


Архітектура и реаліція
    1.1 Маршрутизація
        Використовую declarative routing с nested routes
    1.2 Керування станом 
        Використовую React Hooks ( useState, useMemo, useLocation(навігація))
    1.3 Стилізація TailwindCSS
