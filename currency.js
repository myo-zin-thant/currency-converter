// // convert string to number
// Number("1000"); // 1000
// // cut decimal place
// const rate = 1859.668;
// rate.toFixed(2); //1859.66

let currencyRates = {
  mmk: 2950,
  baht: 80,
  yen: 15.36,
};

const userInputEl = document.querySelector(".userInput");

const mmkEl = document.querySelector(".mmk");
const thaiEl = document.querySelector(".thai");
const jpnEl = document.querySelector(".jpn");

function convertCurrency() {
  if (userInputEl.value !== "") {
    const myanmarKyat = Number(userInputEl.value) * currencyRates.mmk;
    const myanmarKyatRoundedValue = myanmarKyat.toFixed(1);
    const thaiBaht = Number(userInputEl.value) * currencyRates.baht;
    const thaiBahtRoundedValue = thaiBaht.toFixed(2);
    const japaneseYen = Number(userInputEl.value) * currencyRates.yen;
    const japaneseYenRoundedValue = japaneseYen.toFixed(2);
    mmkEl.textContent = myanmarKyatRoundedValue;
    thaiEl.textContent = thaiBahtRoundedValue;
    jpnEl.textContent = japaneseYenRoundedValue;
  } else {
    alert("Please enter the desired value!");
  }
}
