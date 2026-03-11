/* para abrir e se quiser instalar tem de
clicar com o botao do lado direito do rato em index e depois abrir com live server */

const btnHome = document.getElementById('btn-home');
const btnAudit = document.getElementById('btn-audit');
const btnEmail = document.getElementById('btn-email');
const btnBugs = document.getElementById('btn-bugs');
const btnReload = document.getElementById('btn-reload');

const sectionHome = document.getElementById('page-home');
const sectionAudit = document.getElementById('page-audit');
const sectionEmail = document.getElementById('page-email');
const sectionBugs = document.getElementById('page-bugs');

// --- ESTAS SÃO AS VARIÁVEIS QUE JÁ TINHAS NO FUNDO, SUBI PARA SER MAIS FÁCIL ---
const pageTesteInfo = document.getElementById('page-teste-info');
const btnBack = document.getElementById('btn-back');
const logoPwa = document.querySelector('.logo');

// --- 1. ESTA É A FUNÇÃO NOVA QUE DEVES ADICIONAR ---
// Ela serve para esconder TODAS as páginas e resetar o topo antes de abrir uma nova
function esconderTudo() {
    sectionHome.style.display = 'none';
    sectionAudit.style.display = 'none';
    sectionEmail.style.display = 'none';
    sectionBugs.style.display = 'none';
    pageTesteInfo.style.display = 'none'; // <--- ISTO RESOLVE O TEU ERRO
    
    // Reseta o cabeçalho (volta o logo e tira a seta)
    btnBack.style.display = 'none';
    logoPwa.style.display = 'block';
}

// FUNÇÃO PARA MUDAR A COR
function selecionarBotao(botao) {
    [btnHome, btnAudit, btnEmail, btnBugs].forEach(b => b.classList.remove('active'));
    botao.classList.add('active');
}

// --- 2. MUDA OS CLIQUES DOS BOTÕES PARA USAR A FUNÇÃO 'esconderTudo' ---

btnHome.addEventListener('click', () => {
    location.hash = "page-home";
    selecionarBotao(btnHome);
    esconderTudo(); // Limpa tudo antes
    sectionHome.style.display = 'block'; // Aparece só a home
});

btnAudit.addEventListener('click', () => {
    location.hash = "page-audit";
    selecionarBotao(btnAudit);
    esconderTudo(); // Limpa tudo antes
    sectionAudit.style.display = 'block';
});

btnEmail.addEventListener('click', () => {
    location.hash = "page-email";
    selecionarBotao(btnEmail);
    esconderTudo(); // Limpa tudo antes
    sectionEmail.style.display = 'block';
});

btnBugs.addEventListener('click', () => {
    location.hash = "page-bugs";
    selecionarBotao(btnBugs);
    esconderTudo(); // Limpa tudo antes
    sectionBugs.style.display = 'block';
});

// O resto do teu código (Reload, Load, Notificações, etc.) continua igual em baixo...
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

const btnTesteMeio = document.getElementById('btn-teste-meio');

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

// Notificações...
Notification.requestPermission().then(permission => {
  if(permission === "granted" && !localStorage.getItem("welcomeNotificationSent")){
    new Notification("PWA", { body: "Bem-vindo à minha PWA!" });
    localStorage.setItem("welcomeNotificationSent", "true");
  }
});
