/*
 * Les Républicains du Nord
 * Script principal
 */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (!navToggle || !nav) {
        return;
    }

    navToggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');

        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
});
