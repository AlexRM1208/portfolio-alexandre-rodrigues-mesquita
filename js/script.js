// Seleção dos elementos principais do menu
const botaoMenu = document.getElementById("botaoMenu");
const linksMenu = document.getElementById("linksMenu");
const links = document.querySelectorAll(".link-menu");

// Seleção do botão de tema
const botaoTema = document.getElementById("botaoTema");

// Seleção do formulário e dos campos
const formularioContato = document.getElementById("formularioContato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");

// Seleção das mensagens de erro
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroMensagem");

// Seleção do ano atual no rodapé
const anoAtual = document.getElementById("anoAtual");

// Mostra o ano atual automaticamente no rodapé
anoAtual.textContent = new Date().getFullYear();

// Abre ou fecha o menu em telas pequenas
botaoMenu.addEventListener("click", function () {
  linksMenu.classList.toggle("mostrar");

  if (linksMenu.classList.contains("mostrar")) {
    botaoMenu.textContent = "×";
  } else {
    botaoMenu.textContent = "☰";
  }
});

// Fecha o menu ao clicar em um link e marca o item clicado como ativo
links.forEach(function (link) {
  link.addEventListener("click", function () {
    linksMenu.classList.remove("mostrar");
    botaoMenu.textContent = "☰";

    links.forEach(function (item) {
      item.classList.remove("ativo");
    });

    link.classList.add("ativo");
  });
});

// Alterna entre tema claro e tema escuro
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    botaoTema.textContent = "Tema claro";
  } else {
    botaoTema.textContent = "Tema escuro";
  }
});

// Função para validar formato de e-mail
function emailValido(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padraoEmail.test(email);
}

// Função para exibir erro em um campo
function mostrarErro(campo, elementoErro, mensagem) {
  campo.classList.add("campo-invalido");
  elementoErro.textContent = mensagem;
}

// Função para limpar erro de um campo
function limparErro(campo, elementoErro) {
  campo.classList.remove("campo-invalido");
  elementoErro.textContent = "";
}

// Validação do formulário de contato
formularioContato.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const mensagem = campoMensagem.value.trim();

  let formularioValido = true;

  limparErro(campoNome, erroNome);
  limparErro(campoEmail, erroEmail);
  limparErro(campoMensagem, erroMensagem);

  if (nome === "") {
    mostrarErro(campoNome, erroNome, "Por favor, preencha o nome.");
    formularioValido = false;
  } else if (nome.length < 3) {
    mostrarErro(campoNome, erroNome, "O nome deve ter pelo menos 3 caracteres.");
    formularioValido = false;
  }

  if (email === "") {
    mostrarErro(campoEmail, erroEmail, "Por favor, preencha o e-mail.");
    formularioValido = false;
  } else if (!emailValido(email)) {
    mostrarErro(campoEmail, erroEmail, "Digite um e-mail válido. Exemplo: usuario@dominio.com");
    formularioValido = false;
  }

  if (mensagem === "") {
    mostrarErro(campoMensagem, erroMensagem, "Por favor, escreva uma mensagem.");
    formularioValido = false;
  } else if (mensagem.length < 10) {
    mostrarErro(campoMensagem, erroMensagem, "A mensagem deve ter pelo menos 10 caracteres.");
    formularioValido = false;
  }
// Se todos os campos estiverem válidos, simula o envio da mensagem
  if (formularioValido) {
    alert("Mensagem enviada com sucesso!");

    formularioContato.reset();
  }
});
