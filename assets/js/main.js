/* filtro mixitup */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
})

/* active work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('activework');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

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