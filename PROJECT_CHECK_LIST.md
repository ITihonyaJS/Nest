### ✅ Ежедневный чек-лист работы с проектом
1️⃣ Открываем WSL2 если находимся например в PowerShell

*wsl*

или запускаем(открываем терминал) Ubuntu 22.04 напрямую.

## 2️⃣ Проверяем, что Docker работает
*sudo service docker status*
**active (running)** → всё ок
**inactive** → запускаем:

*sudo service docker start*

## 3️⃣ Переходим в папку проекта
*cd /mnt/c/prj/Nest*

## 4️⃣ Проверяем контейнеры и образы
*docker ps -a*      # все контейнеры
*docker images*       # все образы

## 5️⃣ Запуск необходимых сервисов через docker-compose
*docker compose up -d*
**-d** → запуск в фоне

Проверяем:
*docker ps*  # все запущенные контейнеры

Ожидаем увидеть:
**nest-db** → PostgreSQL
**pgadmin** → pgAdmin

## 6️⃣ Проверка логов (по желанию)
*docker compose logs -f*

## 7️⃣ Запуск NestJS сервера в dev-режиме
*npm run start:dev*

Сервер будет доступен:
**http://localhost:3000**

## 8️⃣ Проверка базы через pgAdmin
Открываем:
**http://localhost:8080**

Вход:
**email: admin@example.com**
**password: admin**
**Host: db, Port: 5432, User: postgres, Password: pass123**

## 9️⃣ Проверка работы приложения через Insomnia / Postman
*GET: http://localhost:3000/coffees*

POST: Создание нового кофе

PATCH/DELETE: Обновление или удаление

## 10️⃣ Завершение работы
Если нужно остановить сервисы и сохранить данные:

*docker compose down*

**Если нужно удалить контейнеры и volume (все данные пропадут!):**
*docker compose down -v*

## 11️⃣ Полезные команды «на лету»
Остановить контейнер:
*docker stop <container_name>*


Запустить контейнер:
*docker start <container_name>*


Удалить контейнер:
*docker rm <container_name>*


Очистка ненужных образов:
*docker image prune -a*

### 1️⃣ Что делает команда **sudo service docker status**
*sudo service docker status*

sudo — запускаем команду с правами администратора (требуется для управления сервисами)
service — инструмент для управления системными сервисами в Ubuntu
docker — имя сервиса (демон Docker)
status — проверка текущего состояния сервиса

## 2️⃣ Что она показывает
Пример вывода:

● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2025-12-06 12:27:29 MSK; 44s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 274 (dockerd)
      Tasks: 47
     Memory: 122.0M
        CPU: 648ms


Объяснение полей:

Поле	Значение
Loaded	Сервис загружен и включён в автозагрузку
Active	active (running) → Docker работает
inactive → Docker остановлен
failed → ошибка
Main PID	Процесс Docker daemon
Tasks/Memory/CPU	Использование ресурсов демона

## 3️⃣ Когда её выполнять
Основные сценарии:

**Перед запуском контейнеров**
*Чтобы убедиться, что Docker работает и демоны подняты.*

*sudo service docker status*


Если docker ps или docker compose up не работает
Например, ошибки *Cannot connect to the Docker daemon.*
В этом случае проверяем статус и при необходимости запускаем:

*sudo service docker start*


**После установки Docker**
*Чтобы убедиться, что сервис включён и работает автоматически.*

## 4️⃣ Как работать с этой командой
Просто выполняешь:

*sudo service docker status*
Если вывод **active (running)** — всё ок, можно запускать контейнеры.
Если вывод **inactive** → запускаем:

*sudo service docker start*


Если хотим остановить сервис:
*sudo service docker stop*

Перезапустить:
*sudo service docker restart*

**Выйти из вывода status, если он длинный → *q***

## 5️⃣ Простая последовательность для ежедневной работы
Открываешь Ubuntu / WSL
Проверяешь Docker:

*sudo service docker status*

Если не работает → запускаешь:
*sudo service docker start*

После этого уже можешь:

*docker ps*
*docker compose up -d*