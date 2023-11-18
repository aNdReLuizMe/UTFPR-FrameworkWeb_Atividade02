document.getElementById("enviar").addEventListener("click", function () {
  let valorSaque = document.getElementById("saque").value;
  let resto = Number(valorSaque);
  let cont100 = 0;
  let cont50 = 0;
  let cont20 = 0;
  let cont10 = 0;
  let cont5 = 0;
  let cont2 = 0;
  let cont1 = 0;
  let saidaDiv = document.getElementById("saida");

  saidaDiv.innerHTML = "";

  if (isNaN(resto)) {
    saidaDiv.innerHTML += "<p>Por favor, insira um número inteiro válido.</p>";
  } else if (resto < 10 || resto > 600) {
    saidaDiv.innerHTML += "<p>O valor deve estar entre R$ 10 e R$ 600.</p>";
  } else {
    while (resto >= 100) {
      cont100++;
      resto = resto - 100;
    }
    while (resto >= 50) {
      cont50++;
      resto = resto - 50;
    }
    while (resto >= 20) {
      cont20++;
      resto = resto - 20;
    }
    while (resto >= 10) {
      cont10++;
      resto = resto - 10;
    }
    while (resto >= 5) {
      cont5++;
      resto = resto - 5;
    }
    while (resto >= 2) {
      cont2++;
      resto = resto - 2;
    }
    while (resto >= 1) {
      cont1++;
      resto = resto - 1;
    }
    saidaDiv.innerHTML +=
      "<p>Quantidade de notas de R$ 100: " + cont100 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 50 R$: " + cont50 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 20 R$: " + cont20 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 10 R$: " + cont10 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 5 R$: " + cont5 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 2 R$: " + cont2 + "</p>";
    saidaDiv.innerHTML += "<p>Quantidade de notas de 1 R$: " + cont1 + "</p>";
  }
});
