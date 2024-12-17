//DOM (Documento Object Model)

//Seleção do DOM

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

// console.log(btnMenu); console serve apenas para testar e ver se está funcionando
// console.log(menu);

//Funções em JavaScript: Rotina/conjunto de ações a serem executadas
function menuMob(){
    //console.log('Função acionada');
    //toggle -> adc ou remove uma classe
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

//Eventos em JS: Ações que ocorrem no navegador do usuário
btnMenu.addEventListener('click',menuMob);