# Интернет-магазин

веб-приложение интернет-магазина, разработанное на стеке **React + TypeScript + Vite** с бэкендом на **Express**.

- Сборка на **Vite + React + TypeScript**
- Отсутствие сторонних UI-библиотек (все компоненты написаны с нуля)
- Модульный CSS (**SCSS Modules**)
- Архитектурное разделение: `Pages`, `UI`, `Widgets`, `Components`, `Context`
- Ролевая модель: `guest`, `user`, `admin`
- Валидация форм: **React Hook Form + Yup**
- Управление состоянием: **Context API**
- Авторизация через **JWT-токены**
- Бэкенд упакован в **Docker** с `docker-compose.yml`
- Более 5 страниц (Home, Catalog, Cart, Login, Register, Profile, Admin)
- Корректная работа команды `npm run build`

## Функционал
- **Авторизация и регистрация:** Безопасный вход с хешированием паролей (bcrypt) и выдачей JWT.
- **Каталог товаров:** Поиск, фильтрация по категориям, сортировка (цена, рейтинг), переключение вида (сетка/список).
- **Корзина:** Управление количеством, удаление товаров, расчет стоимости, применение промокода (`sale10`).
- **Личный кабинет:** Просмотр данных пользователя и сводки по корзине.
- **Панель администратора:** Статистика, управление товарами (удаление), просмотр списка пользователей.

## Технологический стек
**Frontend:** React 19, TypeScript, Vite, React Router DOM, SCSS Modules, Axios, React Hook Form, Yup.  
**Backend:** Node.js, Express, JWT, Bcrypt, JSON-файл как БД.  
**DevOps:** Docker, Docker Compose, Nginx

## Структура проекта
```text
├── server/             # Бэкенд (Express + JWT + Bcrypt)
│   ├── db.json         # База данных
│   ├── index.js        # Точка входа сервера
│   └── Dockerfile      # Образ бэкенда
├── src/
│   ├── api/            # Настройка Axios и интерсепторов
│   ├── components/     # Служебные компоненты (ProtectedRoute)
│   ├── context/        # Global state (AppContext)
│   ├── pages/          # Страницы-маршруты (Home, Catalog, Cart, etc.)
│   ├── schemas/        # Схемы валидации Yup
│   ├── UI/             # Базовые переиспользуемые компоненты (Button, Input, ProductCard, etc.)
│   ├── widgets/        # Составные блоки с бизнес-логикой (Header, ProductList, CartWidget, AdminStats, etc.)
│   └── styles/         # Глобальные CSS-переменные
├── docker-compose.yml  # Оркестрация контейнеров
├── Dockerfile          # Образ фронтенда (сборка + Nginx)
└── nginx.conf          # Конфигурация проксирования API
```

## Инструкция по запуску

### Способ 1: Локальный запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите фронтенд и бэкенд одновременно:
```bash
npm run dev:all
```

Фронтенд откроется на http://localhost:5173, бэкенд будет работать на http://localhost:3001

### Способ 2: Запуск через Docker

1. Убедитесь, что у вас установлены Docker и Docker Compose.

2. Выполните команду в корневой папке проекта:
```bash
docker-compose up --build
```

3. Приложение будет доступно по адресу: http://localhost

## Сборка проекта

Для проверки production-сборки выполните:
```bash
npm run build
```