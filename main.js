$(document).ready(function () {
  $('#cpf').mask('000.000.000-00', {
    placeholder: '___.___.___-__',
  });

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(__) _____-_____',
  });

  $('#cep').mask('00000-000', {
    placeholder: '_____-__',
  });

  $('form').validate({
    rules: {
      nome: {
        required: true,
      },

      email: {
        required: true,
        email: true,
      },

      telefone: {
        required: true,
      },

      cpf: {
        required: true,
      },

      endereço: {
        required: true,
      },

      cep: {
        required: true,
      },
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
      email: 'Campo obrigatório',
      telefone: 'Campo obrigatório',
      cpf: 'Campo obrigatório',
      endereço: 'Campo obrigatório',
      cep: 'Campo obrigatório',
    },

    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
