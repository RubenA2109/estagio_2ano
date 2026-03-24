/* para abrir e se quiser instalar tem de
clicar com o botao do lado direito do rato em index e depois abrir com live server */

const btnHome = document.getElementById('btn-home');
const btnprodutos = document.getElementById('btn-produtos');
const btnsobre = document.getElementById('btn-sobre');
const btncontactos = document.getElementById('btn-contactos');

const sectionHome = document.getElementById('page-home');
const sectionprodutos = document.getElementById('page-produtos');
const sectionsobre = document.getElementById('page-sobre');
const sectioncontactos = document.getElementById('page-contactos');

const btnBack = document.getElementById('btn-back');
const logoPwa = document.querySelector('.logo');

//funcao para esconder todas as paginas
function esconderTudo() {
    //so tenta esconder se a variavel não for nula
    if(sectionHome) sectionHome.style.display = 'none';
    if(sectionprodutos) sectionprodutos.style.display = 'none';
    if(sectionsobre) sectionsobre.style.display = 'none';
    if(sectioncontactos) sectioncontactos.style.display = 'none';
    
    if(btnBack) btnBack.style.display = 'none';
    if(logoPwa) logoPwa.style.display = 'block';
}

function selecionarBotao(botao) {
    [btnHome, btnprodutos, btnsobre, btncontactos].forEach(b => {
        if(b) b.classList.remove('active');
    });
    if(botao) botao.classList.add('active');
}

//eventos de clique
if(btnHome) {
    btnHome.addEventListener('click', () => {
        location.hash = "page-home";
        selecionarBotao(btnHome);
        esconderTudo();
        sectionHome.style.display = 'block';
    });
}

if(btnprodutos) {
    btnprodutos.addEventListener('click', () => {
        location.hash = "page-produtos";
        selecionarBotao(btnprodutos);
        esconderTudo();
        sectionprodutos.style.display = 'block';
    });
}

if(btnsobre) {
    btnsobre.addEventListener('click', () => {
        location.hash = "page-sobre";
        selecionarBotao(btnsobre);
        esconderTudo();
        sectionsobre.style.display = 'block';
    });
}

if(btncontactos) {
    btncontactos.addEventListener('click', () => {
        location.hash = "page-contactos";
        selecionarBotao(btncontactos);
        esconderTudo();
        sectioncontactos.style.display = 'block';
    });
}

window.addEventListener("load", () => {
    const pagina = location.hash;
    if(pagina === "#page-produtos") btnprodutos.click();
    else if(pagina === "#page-sobre") btnsobre.click();
    else if(pagina === "#page-contactos") btncontactos.click();
    else if(btnHome) btnHome.click();

    addClassPageName(pagina.substring(1));
});


window.addEventListener("hashchange", () => {
    const pagina = location.hash;
    if(pagina === "#page-home") btnHome.click();
    else if(pagina === "#page-produtos") btnprodutos.click();
    else if(pagina === "#page-sobre") btnsobre.click();
    else if(pagina === "#page-contactos") btncontactos.click();

    addClassPageName(pagina.substring(1));
});

//notificacoes
Notification.requestPermission().then(permission => {
  if(permission === "granted" && !localStorage.getItem("welcomeNotificationSent")){
    new Notification("Ruben", { body: "Bem-vindo à minha PWA!" });
    localStorage.setItem("welcomeNotificationSent", "true");
  }
});

const formulario = document.querySelector('.formulario-contactos form');
if (formulario) {
    formulario.addEventListener('submit', function(e) {
        alert('Formulário submetido com sucesso! Obrigado');
        //limpa todos os campos do formulario
        formulario.reset();
    });
}


$(document).ready(function(){
    $('body').on('scroll', function(){
        if(!$('body').hasClass('page-home'))
            return;

        const transparent = ($('body').scrollTop() < 1) ? true : false;
        handleHeaderClass(transparent);
    });
});

function addClassPageName(pageName) {
    $('body').removeClass('page-home page-produtos page-sobre page-contactos');
    $('body').addClass(pageName);

    const transparent = (pageName == 'page-home') ? true : false;
    handleHeaderClass(transparent);
}

function handleHeaderClass(transparent) {
    if(transparent)
        $('#main-header').addClass('transparent');
    else
        $('#main-header').removeClass('transparent');
}



$('.bola').click(function(e) {
    e.preventDefault();//serve para que ao clicar a pagina fique onde estava
    let container = $('.carousel-lojas');
    let targetPos = $(this.hash).position().left + container.scrollLeft();
    //cria uma animacao
    container.animate({ 
        scrollLeft: targetPos 
    }, 500);
});