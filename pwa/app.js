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


const mainWrapper = document.getElementById('main-wrapper');
btnInfoDubai.addEventListener('click', () => {
  if(infoDubai.style.display === 'none') {
    infoDubai.style.display = 'block';    // mostra o texto
    mainWrapper.style.display = 'none';   // esconde o resto da página
  } else {
    infoDubai.style.display = 'none';     // esconde o texto
    mainWrapper.style.display = 'block';  // mostra o resto da página
  }
});
