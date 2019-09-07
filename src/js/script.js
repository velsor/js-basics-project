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

    const productListWrapper = document.querySelector('.product-list');
    const productList = new ProductList(productListWrapper);

    const menuWrapper = document.querySelector('.main-menu');
    const menu = new Menu(menuWrapper);
}

run();