const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const quoteText = document.getElementById("quote");
  quoteText.innerText = quote.quote;
};

const loadAssync = async () => {
  const url = "https://api.kanye.rest/";
  const res = await fetch(url);
  const data = await res.json();
  displayQuote(data);
};
