/*
Курс JavaScript/DOM/Интерфейсы" для новичков
Проект, компонента Carousel:

Что нужно сделать:
Создать класс компонеты Carousel, которая будет рисовать форму регистрации для новых пользователей внутрь заданного элемента.
Конструктор класса принимает элемент, в который он вставляет свою разметку.

1. Отрисовать компоненту карусель:

* Верстка основы компоненты:
<div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner">
        <!--Вот здесь будет активный слайд-->
    </div>
    
    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>
* Верстка одного слайда
<div class="carousel-item active">
    <img src="assets/images/default-slide-img.jpg" alt="Activelide">
    <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">BEST LAPTOP DEALS</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>
</div>

2. Реализовать переключение слайдов по нажатию на стрелки.
!!! Важно не забыть нарисовать первый слайд после создания компоненты

Слайды представляют собой массив объектов в свойстве класса ("slides"), смотрите на загатовку класса.
* по нажатию на стрелку нужно вставлять внутрь родительского элемента новый слайд
* "carousel-inner" - класс элемента, в который вставлять новый слайд
* "carousel-control-next" - класс кнопки для переключения на следующий слайд
* "carousel-control-prev" - класс кнопки для переключения на предыдущий слайд
* При попытке перейти на следующий слайд, когда текцщий слайд последний, нужно переключать на самый первый.
К примеру, текущий слайд - третий, я нажимаю стрелку переключения на следующий, после этого нужно отрисовать первый слайд.
Тоже самое нужно сделать с первым слайдом и переключением на предыдущий.

3*. ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ:
Реализовать переключение слайдов по нажатию на индикаторы слайдов (белые кружочки внизу)
Сделать это нужно с помощью приема - делегирование (http://learn.javascript.ru/event-delegation).
Т.е. обработчик будет всего один и будет висеть на элементе-обертке для индикаторов.
* класс элемента-обертки для индикаторов - "carousel-indicators"
* каждый индикатор имеет дата атрибут с индексом слайда, на который нужно переключать.
Вот эти атрибуты:
data-slide-to="0" - переключение на первый слайд
data-slide-to="1" - переключение на второй слайд
data-slide-to="2" - переключение на третий слайд

* "carousel-indicator" - класс одного индикатора
* "active" - класс, который нужно навешивать на активный индикатор
* Для того, чтобы найти элемент соответсвующего индикатора имея лишь номер активного слайда:
// где id - номер слайда (0, 1, 2);
const nextActiveIndicator = this.element.querySelector(`*[data-slide-to="${id}"]`);
*/

'use strict';

class Carousel {
    slides = [
        {
            id: 0,
            title: 'BEST LAPTOP DEALS'
        },
        {
            id: 1,
            title: 'BEST HEADPHONES DEALS'
        },
        {
            id: 2,
            title: 'BEST SPEAKERS DEALS'
        }
    ]

    constructor(element) {
      const layout = `
      <div id="mainCarousel" class="main-carousel carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
        </ol>
        <div class="carousel-inner">
            <!--Вот здесь будет активный слайд-->
        </div>
        
        <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
      </div>
      `;
      element.innerHTML = layout;
      const slideLayout = `
      <div class="carousel-item active">
        <img src="assets/images/default-slide-img.jpg" alt="Activelide">
        <div class="container">
            <div class="carousel-caption">
                <h3 class="h1">BEST LAPTOP DEALS</h3>
                <div>
                    <a class="btn" href="#" role="button">
                        View all DEALS
                        <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                    </a>
                </div>
            </div>
        </div>
      </div>
      `;
      const slide = element.querySelector('.carousel-inner');
      slide.innerHTML = slideLayout;

      const buttonNext = element.querySelector('.carousel-control-next');
      const buttonPrev = element.querySelector('.carousel-control-prev');

      const slides = [
        {
            id: 0,
            title: 'BEST LAPTOP DEALS'
        },
        {
            id: 1,
            title: 'BEST HEADPHONES DEALS'
        },
        {
            id: 2,
            title: 'BEST SPEAKERS DEALS'
        }
      ];

      function showNextSlide(event) {
        let activeSlideTitle = element.querySelector('h3').innerHTML;
        let nextSlide = '';
        let slideId = 0;
        slides.forEach((item) => {
          let id = item.id;
          let title = item.title;
          if (title === activeSlideTitle) {
            switch (id) {
              case 0:
                id += 1;
                slideId = id;
                break;
              case 1:
                id += 1;
                slideId = id;
                break;
              case 2:
                id = 0;
                slideId = id;
                break;
            }
          }
        });
        slides.forEach((item) => {
          let id = item.id;
          if (slideId === id) {
            nextSlide = item.title;
          }
        });
        element.querySelector('h3').innerHTML = nextSlide;
      }

      function showPrevSlide(event) {
        let activeSlideTitle = element.querySelector('h3').innerHTML;
        let nextSlide = '';
        let slideId = 0;
        slides.forEach((item) => {
          let id = item.id;
          let title = item.title;
          if (title === activeSlideTitle) {
            switch (id) {
              case 0:
                id = 2;
                slideId = id;
                break;
              case 1:
                id -= 1;
                slideId = id;
                break;
              case 2:
                id -= 1;
                slideId = id;
                break;
            }
          }
        });
        slides.forEach((item) => {
          let id = item.id;
          if (slideId === id) {
            nextSlide = item.title;
          }
        });
        element.querySelector('h3').innerHTML = nextSlide;
      }

      buttonNext.addEventListener('click', showNextSlide);
      buttonPrev.addEventListener('click', showPrevSlide);
    }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;