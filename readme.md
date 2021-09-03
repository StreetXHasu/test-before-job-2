# Тестовое задание 2. Symfony, react, docker, Formik, Yup

История действий:

1. Нужен сервер на базе docker, я выбираю laradock в качестве удобной сборки nginx + php-fpm и БД mysql по классике. (~30 мин)

```git clone https://github.com/laradock/laradock.git```

Делаю настройку `.env`

```cp .env.example .env```

в `.env` меняю следующие:

```
APP_CODE_PATH_HOST=../www/  
# ; - привет windows : - привет линукс
COMPOSE_PATH_SEPARATOR=; 
COMPOSE_PROJECT_NAME=Symfony
PHP_VERSION=7.4
PHP_FPM_INSTALL_APCU=true
# mysql 8 версия тут в коробке так себе работает, поэтому наш вариант 5.7
MYSQL_VERSION=5.7
# любим дебаг и ставим true
PHP_FPM_INSTALL_XDEBUG=true
WORKSPACE_INSTALL_XDEBUG=true
# У нас симфони, тут есть конфиг для nginx. Установит автоматически.
WORKSPACE_INSTALL_SYMFONY=true
```
Вы успешны. Запускайте. `docker-compose up -d workspace nginx mysql`


2.  Поехали за бэком - Symfony

Использую Symfony CLI. 
```
symfony check:requirements
# всё ок
symfony new ./
composer require symfony/webpack-encore-bundle
yarn install
yarn add @babel/preset-react@^7.0.0 --dev
```

3. Делаем фронт react

### Условия задачи:

Форма регистрации(емейл+пароль, без подтверждения емайл), в качестве логина может быть только емейл. (Можно использовать https://packagist.org/packages/friendsofsymfony/user-bundle)

Форма авторизации.

На страницу вывести форму с полями select:категория из http://www.icndb.com/api/ При заполнении формы, на емейл пользователя нужно отправить письмо с темой "Случайная шутка из %имя категории%"

В теле письма должна быть случайная шутка из этой категории. Эту же шутку нужно записать в бд

Шутки выводятся в л.к пользователя

Предусмотреть пагинацию по 5 шуток на страницу.

### **Требования:**

Соответствие кода принципам SOLID

Работу с API необходимо реализовать самому с использованием http://docs.guzzlephp.org/en/stable/

Приложение должно быть на базе Symfony (4 или 5)

ORM - Doctrine

Валидация форм должна быть и на бэке и на фронте

развернуть реакт

на главной странице разместить форму(для стилей можно использовать Material ui или Bootstrap).

Вывод ошибок для формы с помощью плагинов Formik и Yup

Валидация на бэке с помощью symfony form.

Развернуть приложение в docker

написать readme