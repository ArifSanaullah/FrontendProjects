//JavaScript

const selectElement = (element) => document.querySelector('header');
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});