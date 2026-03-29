// Cotação de moedas do dia.

const USD = 4.88;
const EUR = 5.58;
const GBP = 6.1;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.querySelector("#description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit (enviar) do formulário.

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};
// Função para converter a moeda.

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o valor convertido.
    let total = amount * price;

    // Formata o resultado para o formato de moeda brasileira.
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total.
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);

    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

function formatCurrencyBRL(value) { 
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}