const burger = document.querySelector('.burger_menu');
const navLinks = document.querySelector('.nav_link');
const links = document.querySelectorAll('.list_items');
const linksLi = document.querySelectorAll('.nav_link_li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    linksLi.forEach(link => {
        link.classList.toggle('fade');
    })
    burger.classList.toggle('toggle');
})

