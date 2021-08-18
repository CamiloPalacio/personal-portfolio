//DARK THEME
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "uil-sun"

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtein the current theme that the interface has by validating the dark theme class

const getCurrtenTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previusly chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ Deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    //ADD or remove the dark/light icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrtenTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("theme settings is working")

// MENU SHOW & HIDDEN
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

//MENU SHOW
// Validate if the constant exist
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//MENU HIDE
// Validate if the constant exist
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
console.log("MENU & SETTING WORKING!")

//REMOVE MENU PROFILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("remove menu profile is working!")


// ========================================================TypeWriter Effect
// var animatedText = document.getElementById('Typewriter')
new Typewriter('#typewriter', {
  strings: ['Camilo Andrés Palacio Mier', 'Systems engineer student', 'Developer'], //
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working")

// ========================================================Portfolio Swiper
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio swiper is working")

// ======================================================== Scroll up
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height, then the scroll up icon should appear and on clicking should go top
    if(this.scrollY >= 560){
        scrollup.classList.add('show-scroll');
    }else{
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}

window.addEventListener('scroll', scrollUp)

// ======================================================== Scroll section active
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+ ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+ ']').classList.remove('active-link')
        }
    })
    console.log("Section highlight working!")
}

window.addEventListener('scroll', scrollActive)

