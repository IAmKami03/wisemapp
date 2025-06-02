// API
// Grap them all
let text = document.querySelector(".txt");
let adviceID = document.querySelector(".adv");
let quoteText = document.querySelector(".quo");
let button = document.querySelector(".glow");
let loading = document.querySelector(".loading");

// async marks a function as asynchronous. It means the function will always return a promise.
// await can only be used inside an asynchronous function. It "pauses" that function execution until the promise you're waiting for is resolved

// function to fetch advice
let adviceData = async () => {
  let API = await fetch("https://api.adviceslip.com/advice");

  let convertData = await API.json();

  loading.classList.add("hidden");
  adviceID.textContent = `A D V I C E #${convertData.slip.id}`;
  quoteText.textContent = `"${convertData.slip.advice}"`;
};

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceData();
}, 3000);
