document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const contactTableBody = document.querySelector('#contact-table tbody');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const dateInput = document.getElementById('data');

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const rawDate = dateInput.value;

    const date = formatDate(rawDate); 

    const phonePattern = /^\d{8,}$/;

    if (name.trim().split(' ').length >= 2 && phone.match(phonePattern)) {
      const newRow = contactTableBody.insertRow();

      const nameCell = newRow.insertCell(0);
      const phoneCell = newRow.insertCell(1);
      const emailCell = newRow.insertCell(2);
      const dateCell = newRow.insertCell(3);

      nameCell.textContent = name;
      phoneCell.textContent = phone;
      emailCell.textContent = email;
      dateCell.textContent = date;

      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      dateInput.value = '';
    } else {
      alert(
        'Por favor, insira um nome completo (nome e sobrenome) e um telefone válido (pelo menos 8 dígitos).'
      );
    }
  });

  function formatDate(rawDate) {
    const parts = rawDate.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
});
