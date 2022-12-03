/* menu */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/* abrir menu */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* fechar menu */

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* remover menu mobile */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/* header */
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* contato */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // checar se o campo tem algum valor
    if(contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        // adicionar e remover cor
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // mostrar mensagem
        contactMessage.textContent = 'Preencha todos os campos!';
    }else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_9pqh7o1', 'template_n3qwvkr', '#contact-form', 'GxGD_QQrZSRiLUou7')
        .then(() => {
            // mostrar mensagem e adicionar cor
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Mensagem enviada!';

            // remover mensagem depois de 5 segundos
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000) 
        }, (error) => {
            alert('OOPs! ALGO DEU ERRADO...', error)
        });

        // limpar campos
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

/* mudança de estilo */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () =>{
    styleSwitcher.classList.toggle('open');
});

/* esconder botão no scroll */
window.addEventListener('scroll', () => {
    if(styleSwitcher.classList.contains('open')) {
       styleSwitcher.classList.remove('open'); 
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}
