## Создание controllera

- nest generate controller {name}
- shorthand: $ nest g co {name}
  по умолчанию в src создаётся папка (если её не было ранее) с названием controller {name} и внутри сам controller {name}.controller.ts

## Создание service

- nest generate service {name}
- shorthand: nest g s {name}
  по умолчанию в src создаётся папка (если её не было ранее) с названием service {name} и внутри сам service {name}.service.ts

## Создание module

- nest g module {name}
- shorthand: nest g mo {name}
  по умолчанию в src создаётся папка (если её не было ранее) с названием module {name} и внутри сам module {name}.module.ts

## Создание DTO для создания(POST) сущности coffees

nest g class coffees/dto/create-coffee.dto --no-spec

## Создание DTO для обновления(PATCH) сущности coffees

nest g class coffees/dto/update-coffee.dto --no-spec
