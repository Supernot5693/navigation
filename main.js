const toggleBtn = document.querySelector('.navbar__toggleBtn');
const main = document.querySelector('.navbar');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    main.classList.toggle('active');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

