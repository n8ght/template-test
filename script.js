const new_quote = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const auth = document.getElementById("auth");
const getQuote = async () => {
  const url =
    "https://datasets-server.huggingface.co/rows?dataset=HeshamHaroon%2Farabic-quotes&config=default&split=train&offset=0&length=100";

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

let arr_quote = [];

// IIFE async (تشتغل فوراً)
(async () => {
  arr_quote = await getQuote();
  console.log(arr_quote);
})();

new_quote.addEventListener("click", () => {
  if (!arr_quote.length) return;

  const random = arr_quote[Math.floor(Math.random() * arr_quote.length)];

  quote.innerText = random.row.quote;
  auth.innerText = random.row.author;
  console.log(random.row.quote); // أو حسب اسم المفتاح
});
