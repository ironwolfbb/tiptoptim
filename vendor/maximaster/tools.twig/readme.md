# maximaster/tools.twig

Данная библиотека позволяет использовать twig шаблоны в 1С Битрикс для компонентов 2.0. Обрабатываются файлы шаблонов, имеющие расширение `.twig`. Если создать в директории шаблона компонента файл `template.twig`, то именно он будет использоваться при генерации шаблона.

## Простой пример

Для наследования шаблона `new_year` компонента `bitrix:news.detail` в twig шаблоне нужно всего-лишь подключить этот шаблон с помощью особого синтаксиса:

```twig
{% extends "bitrix:news.detail:new_year" %}
```
После чего можно будет переопределить все блоки, которые есть в родительском шаблоне. Подробнее о [синтаксисе](docs/syntax.md) - в документации

## Документация 

* **[Синтаксис подключения шаблонов](docs/syntax.md)**
* **[Доступные переменные и функции внутри шаблонов](docs/twig_extension.md)**
* **[Конфигурирование](docs/configuration.md)**
* **[Работа с кешем](docs/working_with_cache.md)**
* **[Расширение возможностей](docs/extend.md)**
* **[Тонкости интеграции с битриксом](docs/bitrix_pitfalls.md)**