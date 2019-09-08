'use strict';

function run() {
    const headerWrapper = document.querySelector('.header');
    const header = new Header(headerWrapper);

    const footerWrapper = document.querySelector('.footer');
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
    const footer = new Footer(footerWrapper, footerLinks);

    const loginFormWrapper = document.querySelector('.login-form');
    const loginForm = new LoginForm(loginFormWrapper);
}

run();