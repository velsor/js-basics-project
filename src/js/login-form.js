/*
Курс JavaScript/DOM/Интерфейсы" для новичков
Проект, компонента LoginForm:

Что нужно сделать:
Создать класс компонеты LoginForm, которая будет рисовать форму регистрации для новых пользователей внутрь заданного элемента.
Конструктор класса принимает элемент, в который он вставляет свою разметку.

1. Отрисовать компоненту формы

* Верстка компоненты:
<div class="row justify-content-center">
    <div class="col-md-6">
        <form name="loginForm">
            <div class="alert alert-danger" role="alert" style="display: none;">
                Passwords should be the same!
            </div>
            <div class="jumbotron jumbotron-light jumbotron-form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password Check</label>
                    <input type="password" name="passwordCheck" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                </div>

                <div class="form-check mb-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" class="btn btn-primary btn-lg by-now-button">Buy now</button>
            </div>
        </form>
        <div class="h4 text-center font-weight-normal text-uppercase my-5 d-none d-lg-block">or</div>
        <div class="socials mb-5">
            <a href="#" class="btn btn-primary btn-social -fb">
                <img src="assets/icons/icon-facebook.svg" alt="">
                Facebook
            </a>
            <a href="#" class="btn btn-primary btn-social -vk">
                <img src="assets/icons/icon-vk.svg" alt="">
                Vkontakte
            </a>
            <a href="#" class="btn btn-primary btn-social -twitter">
                <img src="assets/icons/icon-twitter.svg" alt="">
                Twitter
            </a>
        </div>
    </div>
</div>

2. Реализовать проверку идентичности паролей в двух полях ввода: в основном и проверочном

* Для основного input с паролем: name="password"
* Для проверочного input с паролем: name="passwordCheck"
* Проверку идентичности паролей нужно сделать после того, как пользователь ввел оба пароля и ушел из этих полей
(событие "blur").
* Также нужно показывать ошибку, которая есть на странице
Класс блока с ошибкой: "alert-danger". Чтобы его показать нужно поменять его стили и сделать ему display: block,
через свойство style элемента (подробнее как это делать, вот тут - http://learn.javascript.ru/styles-and-classes#element-style)
* Каждый раз, когда пользователь возвращается в любое из полей с паролем, нужно прятать ошибку (событие "focus").

3. Сделать отправку формы без перезагрузки страницы по событию "submit" на форме с помощью fetch на адрес "https://httpbin.org/post"
Как это делать можно посмореть вот здесь https://codepen.io/Dolgach/pen/gOYmQoY?editors=1011

*/

'use strict';

class LoginForm {
    constructor(element) {
        // Ваш код
    }
}


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.LoginForm = LoginForm;