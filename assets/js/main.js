const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            const isOpen = nav.classList.toggle('show')
            toggle.setAttribute('aria-expanded', isOpen)
            toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    navMenu.classList.remove('show')
    navToggle.setAttribute('aria-expanded', false)
    navToggle.setAttribute('aria-label', 'Open menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const contactForm = document.getElementById('contact-form')

if(contactForm){
    contactForm.addEventListener('submit', (event)=>{
        event.preventDefault()

        const name = contactForm.name.value.trim()
        const email = contactForm.email.value.trim()
        const message = contactForm.message.value.trim()

        const subject = encodeURIComponent('Contact from your website - ' + name)
        const body = encodeURIComponent(message + '\n\n' + name + ' - ' + email)

        window.location.href = 'mailto:noahbarrosurban@gmail.com?subject=' + subject + '&body=' + body
    })
}

if(typeof ScrollReveal === 'undefined'){
    console.warn('ScrollReveal failed to load; scroll animations were skipped.')
}else{

    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 800,
        reset: true
    })

    sr.reveal('.home__title', {})
    sr.reveal('.home__scroll', {delay: 200})
    sr.reveal('.home__img', {origin:'right', delay: 400})

    sr.reveal('.about__img', {delay: 500})
    sr.reveal('.about__subtitle', {delay: 300})
    sr.reveal('.about__profession', {delay: 400})
    sr.reveal('.about__text', {delay: 500})
    sr.reveal('.about__social-icon', {delay: 600, interval: 200})

    sr.reveal('.skills__subtitle', {})
    sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
    sr.reveal('.skills__img', {delay: 400})

    sr.reveal('.portfolio__img', {interval: 200})

    sr.reveal('.contact__subtitle', {})
    sr.reveal('.contact__text', {interval: 200})
    sr.reveal('.contact__input', {delay: 400})
    sr.reveal('.contact__button', {delay: 600})

}
