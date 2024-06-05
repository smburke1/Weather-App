//https://api.openweathermap.org/data/2.5/weather?q=encino&units=imperial&appid=501128c7c0350bc73a53b3ad67a3a580

let weather = {
    "apiKey": "501128c7c0350bc73a53b3ad67a3a580",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
      + city 
      + "&units=imperial&appid=" 
      + this.apiKey
      )
  
      .then((response) => response.json())
     
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    let { name } = data;
    let { icon, description} = data.weather[0];
    let { temp, humidity } = data.main;
    let { speed } = data.wind;
    let roundedTemp = Math.floor(temp);

    document.getElementById("city").innerText = name;
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
    document.getElementById("description").innerText = description;
    document.getElementById("temp").innerText = roundedTemp + "°F";
    document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
    document.getElementById("wind").innerText = "Wind speed: " + speed + " mph";
  },
    
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
  }
  
  document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
  }
  );
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key =="Enter") {
      weather.search();
    }
  });
  
  weather.fetchWeather("Los Angeles"); 
