const searchWeatherInfo = () => {
  const searchInput = document.querySelector("#search-field");
  const searchText = searchInput.value;
  console.log(searchText);
  searchInput.value = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=3a07e5ba31099b27d2900d1e01f04e2d`
  )
    .then((res) => res.json())
    .then((data) => displayWeatherInfo(data));
};

const displayWeatherInfo = (data) => {
  console.log(data);
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  const searchDiv = document.createElement("div");
  searchDiv.innerHTML = `
         <div class="weather-status text-white text-center">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
             <h1 class="fs-1">${data.name}</h1>
             <h3><span>${data.main.temp}</span>&deg;C</h3>
             <h3 class="text-dark">Feels Like <span>${data.main.feels_like}&deg;C</span></h3>
             <h4 class="fw-bold">${data.weather[0].main}</h4>
             <h5 class="fw-normal text-dark">${data.weather[0].description}</h5>
         </div>
    `;
  searchResult.appendChild(searchDiv);
};
