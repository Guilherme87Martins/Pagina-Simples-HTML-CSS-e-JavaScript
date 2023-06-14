'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
        console.log('current class name:' + className);
    }
    else {
        this.textContent = "Light";
    }

});

/*Aqui na parte do JavaScript, você encontra a estrutura para a funcionalidade, do botão "Dark / Light", quando quiser mudar o tema da pagina de claro para escuro.*/