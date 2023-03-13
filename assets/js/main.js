const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close');
                
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=====================Remove Menu Mobile =====================*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //When we click on each link nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header');
} 
window.addEventListener('scroll', scrollHeader)   



const scrollUP = () => {
    const scrollUp = document.getElementById('scroll-up')
    
    this.scrollY >= 550 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUP)


/*==================SCROLL SECTIONS ACTIVE LINK==============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => { 
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
        
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== DARK LIGHT THEME ================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
    
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*================== SCROLL REVEAL ANIMATION===================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // Animations repeat
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo,
            .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .recently__data`, { origin: 'left' })
sr.reveal(`.home__img, .recently__img`, { origin: 'right' })
sr.reveal(`.popular__card`, { interval: 100 })
