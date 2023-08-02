document.getElementById('meuFormulario').onsubmit = function (event) {
  event.preventDefault();
  validarFormulario();
};

function validarFormulario() {
  var campoA = parseFloat(document.getElementById('campoA').value);
  var campoB = parseFloat(document.getElementById('campoB').value);

  if (campoB > campoA) {
    exibirMensagem('Formulário válido!', 'green');
  } else {
    exibirMensagem(
      'Formulário inválido! O número B deve ser maior que o número A.',
      'red'
    );
  }
}

function exibirMensagem(mensagem, cor) {
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.innerHTML = mensagem;
  mensagemDiv.style.color = cor;
}
