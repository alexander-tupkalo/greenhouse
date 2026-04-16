const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
});


/* dropdown */
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.parentElement.classList.toggle('open');
        }
    });
});

document.querySelectorAll('.submenu > a').forEach(item => {
    item.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.parentElement.classList.toggle('open');
        }
    });
});