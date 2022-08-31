## Дополнительные возможности, идущие в комплекте с библиотекой

Тех возможностей, которые предоставляет twig из коробки недостаточно для полноценного функционирования в битриксе, поэтому библиотека предоставляет ряд дополнительного функционала, который реализован с помощью расширений для twig.

### Переменные из Битрикс

* `APPLICATION` - экземпляр класса \CMain, который хранится в глобальной переменной `$APPLICATION`
* `USER` - экземпляр класса \CUser, который хранится в глобальной переменной `$USER`
* `app` - экземпляр класса \Bitrix\Main\Application, если библиотека работает в битриксе с d7
* `result` - массив $arResult, сформированный в компоненте. См. примечания по настройке `extract_result`
* `params` - массив arParams, содержащий параметры компонента
* `template` - экземпляр класса \CBitrixComponentTemplate для данного шаблона
* `component` - экземпляр класса \CBitrixComponent для текущего компонента. Следует учитывать, что это не тот класс, который определен в компоненте, а именно \CBitrixComponent
* `templateFolder` - путь до директории текущего шаблона относительно DOCUMENT_ROOT
* `parentTemplateFolder` - путь до директории шаблона родительского компонента, если используется комплексный компонент. Эта переменная не учитывает родство шаблонов при использовании, например, функции `extends` в twig
* `lang` - массив языкозависимых переменных текущего шаблона. Будет удалено в версии 1.1
 
### Функции из Битрикс

* `showComponent()` - аналог `\CMain::IncludeComponent()`. Данная функция только подключает компонент, но не возвращает результат работы компонента. Если вызывать подключение компонента с помощью объекта `APPLICATION`, то twig пытается вывести возвращаемое этим методом значение, что приводит часто к появлению артефактов в шаблонах.
* `getMessage()` - синоним для функции `GetMessage()` или метода `\Bitrix\Main\Loc::getMessage()`, если проект работает с d7
* `bitrix_sessid_post()` и `bitrix_sessid_get()` - переменные для генерации подписи с ID сессии в формах, синонимы одноименных функций в битриксе
* `showNote()`, `showError()` и `showMessage()` - синонимы функций `ShowNote()`, `ShowError()` и `ShowMessage()` 

### Переменные из PHP

К сожалению, в Битрикс иногда сложно обойтись без использования суперглобальных переменных напрямую в шаблонах, поэтому все суперглобальные переменные из php пробрасываются в каждый шаблон и доступны по именам _SERVER, _GET, _POST, _REQUEST, _SESSION, _COOKIE, _FILES, _ENV и _GLOBALS

### Дополнительные функции

С версии 0.5 в библиотеке появились дополнительные удобные функции для работы с шаблонами. На данный момент функция только одна, но их перечень постоянно будет пополняться.

`russianPluralForm(int $num, array $words)`

Функция помогает в выводе множественного числа для русских слов. К примеру, вам нужно вывести строку "21 билет". Для этого нужно воспользоваться функцией с такими параметрами в twig:

```twig
 {% set ticketsCount = 21 %}
 {{ russianPluralForm(ticketsCount, ['билетов', 'билет', 'билета']) }}
```

Порядок словоформ запомнить достаточно просто: 0 билетов, 1 билет, 2 билета. Для большинства слов такой порядок будет работать корректно.