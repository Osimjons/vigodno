/*"use strict";
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  calk();
  document.getElementById("myModal").classList.add("open");
});
document.getElementById("modalCloseBtn").addEventListener("click", function () {
  document.getElementById("myModal").classList.remove("open");
});

function calk() {
  // Получаем значения из полей ввода
  let price1Value = parseFloat(document.getElementById("price1").value);
  let count1Value = parseFloat(document.getElementById("count1").value);
  let price2Value = parseFloat(document.getElementById("price2").value);
  let count2Value = parseFloat(document.getElementById("count2").value);

  // Вызываем функцию calculate и передаем значения
  calculate(price1Value, count1Value, price2Value, count2Value);
}

function calculate(price1 = 0, count1 = 0, price2 = 0, count2 = 0) {
  // Рассчитываем цену за единицу для каждого товара
  const pricePerUnit1 = (cout1 / price1).toFixed(2);
  const pricePerUnit2 = (count2 / price2).toFixed(2);

  console.log(`Цена за единицу товара 1: ${pricePerUnit1} руб.`);
  console.log(`Цена за единицу товара 2: ${pricePerUnit2} руб.`);

  if (pricePerUnit1 < pricePerUnit2) {
    console.log(`Товар 1 выгоднее.`);
  } else if (pricePerUnit1 > pricePerUnit2) {
    console.log(`Товар 2 выгоднее.`);
  } else {
    console.log(`Цены одинаковые.`);
  }
}
function modal() {
  document.write(`  <div class="modal" id="myModal">
    <div class="modal__box">
      <img class="modal__close-btn" id="modalCloseBtn" src="img/close.svg" alt="Иконка-Закрыть">
      <h2 class="modal__title">Результаты расчета</h2>
      <div class="modal__content">
        <p class="modal__text">Цена за единицу товара 1: ${pricePerUnit1} руб.</p>
        <p class="modal__text">Цена за единицу товара 2: ${pricePerUnit2} руб.</p>
        <p class="modal__text">console.log(``);</p>
      </div>
    </div>
  </div>`);
}

*/
/*
"use strict";

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const { pricePerUnit1, pricePerUnit2, resultMessage } = calk();
  displayModal(pricePerUnit1, pricePerUnit2, resultMessage);
});

document.getElementById("modalCloseBtn").addEventListener("click", function () {
  document.getElementById("myModal").classList.remove("open");
});

function calk() {
  // Получаем значения из полей ввода
  let price1Value = parseFloat(document.getElementById("price1").value);
  let count1Value = parseFloat(document.getElementById("count1").value);
  let price2Value = parseFloat(document.getElementById("price2").value);
  let count2Value = parseFloat(document.getElementById("count2").value);

  // Вызываем функцию calculate и передаем значения
  return calculate(price1Value, count1Value, price2Value, count2Value);
}

function calculate(price1 = 0, count1 = 0, price2 = 0, count2 = 0) {
  // Рассчитываем цену за единицу для каждого товара
  const pricePerUnit1 = (price1 / count1).toFixed(2);
  const pricePerUnit2 = (price2 / count2).toFixed(2);
  let resultMessage;
  if (pricePerUnit1 < pricePerUnit2) {
    resultMessage = "Товар 1 выгоднее.";
  } else if (pricePerUnit1 > pricePerUnit2) {
    resultMessage = "Товар 2 выгоднее.";
  } else {
    resultMessage = "Цены одинаковые.";
  }
  return {
    pricePerUnit1,
    pricePerUnit2,
    resultMessage,
  };
}

function displayModal(pricePerUnit1 = 0, pricePerUnit2 = 0, resultMessage) {
  const modalElement = document.getElementById("myModal");
  modalElement.innerHTML = `
    <div class="modal__box">
      <img class="modal__close-btn" id="modalCloseBtn" src="img/close.svg" alt="Иконка-Закрыть">
      <h2 class="modal__title">Результаты расчета</h2>
      <div class="modal__content">
        <p class="modal__text">Цена за единицу товара 1: ${pricePerUnit1} руб.</p>
        <p class="modal__text">Цена за единицу товара 2: ${pricePerUnit2} руб.</p>
        <p class="modal__text">${resultMessage}</p>
      </div>
    </div>
  `;
  modalElement.classList.add("open");
  closeModal();
}
function closeModal() {
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", function () {
      document.getElementById("myModal").classList.remove("open");
    });
}
*/
/*
"use strict";

// Add event listener for the modal close button during initialization
document.getElementById("modalCloseBtn").addEventListener("click", function () {
  document.getElementById("myModal").classList.remove("open");
});

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const { pricePerUnit1, pricePerUnit2, resultMessage } = calk();
  displayModal(pricePerUnit1, pricePerUnit2, resultMessage);
});

function calk() {
  // Получаем значения из полей ввода
  let price1Value = parseFloat(document.getElementById("price1").value);
  let count1Value = parseFloat(document.getElementById("count1").value);
  let price2Value = parseFloat(document.getElementById("price2").value);
  let count2Value = parseFloat(document.getElementById("count2").value);

  // Вызываем функцию calculate и передаем значения
  return calculate(price1Value, count1Value, price2Value, count2Value);
}

function calculate(price1 = 0, count1 = 0, price2 = 0, count2 = 0) {
  // Рассчитываем цену за единицу для каждого товара
  const pricePerUnit1 = (price1 / count1).toFixed(2);
  const pricePerUnit2 = (price2 / count2).toFixed(2);
  let resultMessage;
  if (pricePerUnit1 < pricePerUnit2) {
    resultMessage = "Товар 1 выгоднее.";
  } else if (pricePerUnit1 > pricePerUnit2) {
    resultMessage = "Товар 2 выгоднее.";
  } else {
    resultMessage = "Цены одинаковые.";
  }
  return {
    pricePerUnit1,
    pricePerUnit2,
    resultMessage,
  };
}

function displayModal(pricePerUnit1 = 0, pricePerUnit2 = 0, resultMessage) {
  const modalElement = document.getElementById("myModal");
  modalElement.innerHTML = `
    <div class="modal__box">
      <img class="modal__close-btn" id="modalCloseBtn" src="img/close.svg" alt="Иконка-Закрыть">
      <h2 class="modal__title">Результаты расчета</h2>
      <div class="modal__content">
        <p class="modal__text">Цена за единицу товара 1: ${pricePerUnit1} руб.</p>
        <p class="modal__text">Цена за единицу товара 2: ${pricePerUnit2} руб.</p>
        <p class="modal__text">${resultMessage}</p>
      </div>
    </div>
  `;
  modalElement.classList.add("open");
}
*/
"use strict";

const button = document.getElementById("btn");
button.addEventListener("click", function (event) {
  event.preventDefault();
  const { pricePerUnit1, pricePerUnit2, resultMessage } = calk();
  displayModal(pricePerUnit1, pricePerUnit2, resultMessage);
});

function calk() {
  // Получаем значения из полей ввода
  let price1Value = document.getElementById("price1").value.trim();
  let count1Value = document.getElementById("count1").value.trim();
  let price2Value = document.getElementById("price2").value.trim();
  let count2Value = document.getElementById("count2").value.trim();

  // Проверяем, является ли ввод числом
  price1Value = isValidNumber(price1Value) ? parseFloat(price1Value) : 0;
  count1Value = isValidNumber(count1Value) ? parseFloat(count1Value) : 0;
  price2Value = isValidNumber(price2Value) ? parseFloat(price2Value) : 0;
  count2Value = isValidNumber(count2Value) ? parseFloat(count2Value) : 0;

  // Вызываем функцию calculate и передаем значения
  return calculate(price1Value, count1Value, price2Value, count2Value);
}

function isValidNumber(value) {
  // Проверяем, является ли строка числом
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function calculate(price1 = 0, count1 = 0, price2 = 0, count2 = 0) {
  // Рассчитываем цену за единицу для каждого товара
  const pricePerUnit1 = (price1 / count1).toFixed(2);
  const pricePerUnit2 = (price2 / count2).toFixed(2);
  let resultMessage;
  if (pricePerUnit1 < pricePerUnit2) {
    resultMessage = "Товар 1 выгоднее";
  } else if (pricePerUnit1 > pricePerUnit2) {
    resultMessage = "Товар 2 выгоднее";
  } else {
    resultMessage = "Цены одинаковые";
  }
  return {
    pricePerUnit1,
    pricePerUnit2,
    resultMessage,
  };
}

function displayModal(pricePerUnit1 = 0, pricePerUnit2 = 0, resultMessage) {
  // Создаем элементы модального окна
  const modalElement = document.createElement("div");
  modalElement.className = "modal";
  modalElement.id = "myModal";

  const modalBox = document.createElement("div");
  modalBox.className = "modal__box";

  const closeButton = document.createElement("img");
  closeButton.className = "modal__close-btn";
  closeButton.id = "modalCloseBtn";
  closeButton.src = "img/close.svg";
  closeButton.alt = "Иконка-Закрыть";

  const modalTitle = document.createElement("h2");
  modalTitle.className = "modal__title";
  modalTitle.textContent = "Результаты расчета";

  const modalContent = document.createElement("div");
  modalContent.className = "modal__content";

  const pricePerUnit1Text = document.createElement("p");
  pricePerUnit1Text.className = "modal__text";
  pricePerUnit1Text.textContent = `Цена за единицу товара 1: ${pricePerUnit1} руб.`;

  const pricePerUnit2Text = document.createElement("p");
  pricePerUnit2Text.className = "modal__text";
  pricePerUnit2Text.textContent = `Цена за единицу товара 2: ${pricePerUnit2} руб.`;

  const resultMessageText = document.createElement("p");
  resultMessageText.className = "modal__text, restMsg";
  resultMessageText.textContent = resultMessage;

  // Добавляем элементы в модальное окно
  modalContent.appendChild(pricePerUnit1Text);
  modalContent.appendChild(pricePerUnit2Text);
  modalContent.appendChild(resultMessageText);

  modalBox.appendChild(closeButton);
  modalBox.appendChild(modalTitle);
  modalBox.appendChild(modalContent);

  modalElement.appendChild(modalBox);

  // Добавляем модальное окно в body
  document.body.appendChild(modalElement);

  // Добавляем слушатель событий для закрытия модального окна
  closeButton.addEventListener("click", function () {
    modalElement.classList.remove("open");
    document.body.removeChild(modalElement);
  });

  document
    .querySelector("#myModal .modal__box")
    .addEventListener("click", (event) => {
      event._isClickWithInModal = true;
    });
  document.getElementById("myModal").addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
  });

  // Добавляем класс "open", чтобы показать модальное окно
  modalElement.classList.add("open");
}
