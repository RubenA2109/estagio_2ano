/*para abrir e se quiser instalar tem de
clicar com o botao do lado direito do rato em index e depois abrir com live server*/


const btnHome = document.getElementById('btn-home');
const btnAudit = document.getElementById('btn-audit');
const btnEmail = document.getElementById('btn-email');
const btnBugs = document.getElementById('btn-bugs');
const btnReload = document.getElementById('btn-reload');

const sectionHome = document.getElementById('page-home');
const sectionAudit = document.getElementById('page-audit');
const sectionEmail = document.getElementById('page-email');
const sectionBugs = document.getElementById('page-bugs');
const sectionReload = document.getElementById('page-reload');

// FUNÇÃO PARA MUDAR A COR
function selecionarBotao(botao) {
    // Tira a classe 'active' de todos os botões do footer
    [btnHome, btnAudit, btnEmail, btnBugs].forEach(b => b.classList.remove('active'));
    // Mete a classe 'active' apenas no que clicaste
    botao.classList.add('active');
}
// Quando clico no botão Home
btnHome.addEventListener('click', () => {
    location.hash = "page-home";
    selecionarBotao(btnHome);
    sectionAudit.style.display = 'none'; //desaparece
    sectionEmail.style.display = 'none'; //desaparece
    sectionBugs.style.display = 'none';  //desaparece
    sectionHome.style.display = 'block'; //aparece
});

// Quando clico no botão Audit
btnAudit.addEventListener('click', () => {
    location.hash = "page-audit";
    selecionarBotao(btnAudit);
    sectionHome.style.display = 'none';
    sectionEmail.style.display = 'none';
    sectionBugs.style.display = 'none';
    sectionAudit.style.display = 'block';
});

// Quando clico no botão email list
btnEmail.addEventListener('click', () => {
    location.hash = "page-email";
    selecionarBotao(btnEmail);
    sectionAudit.style.display = 'none';
    sectionBugs.style.display = 'none';
    sectionHome.style.display = 'none';
    sectionEmail.style.display = 'block';
});

// Quando clico no botão bugs
btnBugs.addEventListener('click', () => {
    location.hash = "page-bugs";
    selecionarBotao(btnBugs);
    sectionAudit.style.display = 'none';
    sectionHome.style.display = 'none';
    sectionEmail.style.display = 'none';
    sectionBugs.style.display = 'block';
});

// Quando clico no botão reload
btnReload.addEventListener('click', () => {
    location.reload()
});

window.addEventListener("load", () => {
    const pagina = location.hash;

    if(pagina === "#page-audit") btnAudit.click();
    else if(pagina === "#page-email") btnEmail.click();
    else if(pagina === "#page-bugs") btnBugs.click();
    else btnHome.click();
});

const btnInfoDubai = document.getElementById('btn-info-dubai');
const infoDubai = document.getElementById('info-dubai');


const infoPwa = document.getElementById("info-pwa");
const parteEsquerda = document.querySelector(".parte-esquerda");
const parteDireita = document.querySelector(".parte-direita");

Notification.requestPermission().then(permission => {
  if(permission === "granted" && !localStorage.getItem("welcomeNotificationSent")){
    new Notification("PWA", {
      body: "Bem-vindo à minha PWA!"
    });
    localStorage.setItem("welcomeNotificationSent", "true");
  }
});

const btnTesteMeio = document.getElementById('btn-teste-meio');
const pageTesteInfo = document.getElementById('page-teste-info');
const btnBack = document.getElementById('btn-back');
const logoPwa = document.querySelector('.logo');


//ao clicar no botão do meio esconde a home, mostra a info e troca o topo
btnTesteMeio.addEventListener('click', () => {
    sectionHome.classList.add("animar-sair");
    setTimeout(() => {
        sectionHome.style.display = 'none';
        sectionHome.classList.remove("animar-sair");
        pageTesteInfo.style.display = 'block';
        pageTesteInfo.classList.add("animar-entrar");
        logoPwa.style.display = 'none';
        btnBack.style.display = 'block';
    },350);
});


//ao clicar na seta volta tudo ao normal
btnBack.addEventListener('click', () => {
    pageTesteInfo.classList.add("animar-sair");
    setTimeout(() => {
        pageTesteInfo.style.display = 'none';
        pageTesteInfo.classList.remove("animar-sair");
        sectionHome.style.display = 'block';
        sectionHome.classList.add("animar-entrar");
        btnBack.style.display = 'none';
        logoPwa.style.display = 'block';
    },350);
});