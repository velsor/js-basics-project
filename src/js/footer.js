
/*
Курс JavaScript/DOM/Интерфейсы" для новичков
Проект, компонента Footer:

Что нужно сделать:
1. Создать класс компонеты Footer, которая будет рисовать footer проекта внутрь заданного элемента
2. Отрисовать разметку компоненты footer
3. Отобразить список ссылок из массива

У объекта представляющего ссылку есть два свойства:
* 'href' - адрес ссылки и его нужно вставлять в атрибут href тега <a>
* 'title' - название ссылки, его нужно вставлять в тело ссылки
<a>ВОТ СЮДА</a>

* Массив ссылок из которого их нужно рисовать:
const footerLinks = [
    {
        href: '#',
        title: 'Terms and Conditions'
    },
    {
        href: '#',
        title: 'Privacy'
    },
    {
        href: '#',
        title: 'Cookies'
    },
    {
        href: '#',
        title: 'Home shopping guarantee'
    }
];

* Пример вызова класса:
const footer = new Footer(<element>, footerLinks);

* Разметка для одной ссылки:
<a href="АДРЕС ССЫЛКИ" class="project-link text-muted">ТЕКСТ ССЫЛКИ</a>

* Разметка для Footer без ссылок:
<div class="container">
  <div class="footer-inner">
      <div class="footer-menu">
          <!--ЗДЕСЬ БУДУТ ССЫЛКИ-->
      </div>
      <div>
          © 1998-2019, AnyShop.com, Inc. or its affiliates
      </div>
  </div>
</div>

В итоге у вас должно получиться следующее:
<div class="container">
  <div class="footer-inner">
      <div class="footer-menu">
          <!--ЗДЕСЬ ССЫЛКИ-->
          <a href="#" class="project-link text-muted">ТЕКСТ ССЫЛКИ</a>
          <a href="#" class="project-link text-muted">ТЕКСТ ССЫЛКИ</a>
          <!--...-->
      </div>
      
      <div>
          © 1998-2019, AnyShop.com, Inc. or its affiliates
      </div>
  </div>
</div>
*/
'use strict';

class Footer {
  constructor(element, links) {
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Footer = Footer;
