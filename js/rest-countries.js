const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const divCountry = document.createElement("div");
    divCountry.classList.add("country");
    divCountry.innerHTML = `
    <h3>Country Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
    <button onclick="loadCountyDetail('${country.cca2}')">details</button>
    `;
    countriesContainer.appendChild(divCountry);
  });
};

const loadCountyDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  console.log(country);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h3>Country Name: ${country.name.common}</h3>
  <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
  <img src="${country.flags.png}" alt="">
  `;
};

loadCountries();
