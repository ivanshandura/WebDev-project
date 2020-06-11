const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', event => {
        event.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


const humburger = document.querySelector('.top-bar__burger');
const menu = document.querySelector('.top-bar__menu');
const scrollLink = document.querySelector

humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

menu.addEventListener('click', event => {
    if (event.target.closest('.top-bar__link')) {
        menu.classList.remove('active')
        humburger.classList.remove('active')
    }
});



