const btnDanger = document.querySelector(".btn-danger");
const btnWarning = document.querySelector(".btn-warning");
const amount = document.querySelector(".amount-participants");
const maxValue = document.querySelector(".max-amount");
const boxInfo = document.querySelector(".box-info");

if (localStorage.getItem("amount")) {
  //получаем данные из хранилища
  amount.innerHTML = localStorage.getItem("amount");
   if (amount.textContent === maxValue.textContent) {
    btnDanger.disabled = true; //сделали кнопку неактивной
     } else {
        btnDanger.disabled = false;
     }
};

btnDanger.addEventListener("click", () => {
    const res = parseInt(amount.textContent);
    amount.textContent = res + 1;
    btnDanger.disabled = true;
    btnWarning.disabled = false;
    localStorage.setItem('amount', amount.innerHTML);
    boxInfo.textContent = 'Вы записались на занятие'
    
});

btnWarning.addEventListener("click", () => {
    const res = parseInt(amount.textContent);
    amount.textContent = res - 1;    
    btnWarning.disabled = true;
    btnDanger.disabled = false;
    localStorage.setItem('amount', amount.innerHTML);
    boxInfo.textContent = 'Вы отменили занятие'
});


