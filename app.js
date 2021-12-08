const mobileMenu = document.querySelector('.mobile-menu');
const scrollBtn = document.querySelector('.scroll-top');

mobileMenu.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
});