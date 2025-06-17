
alert("Вітаю!")

window.onresize = function() {
console.log("Нова ширина вікна: " + window.innerWidth + "px");
console.log("Нова висота вікна: " + window.innerHeight + "px");
};

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    const name = this.elements['name'].value.trim();
    const email = this.elements['email'].value.trim();
    const password = this.elements['password'].value.trim();

    let errors = [];

    if (name.length < 2) {
      errors.push("Ім’я повинно містити щонайменше 2 символи.");
    }

    if (email.length < 5) {
      errors.push("Email має містити щонайменше 5 символів.");
    }

    if (password.length < 10) {
      errors.push("Пароль повинен містити щонайменше 10 символів.");
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
    }
  });

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  } 

  