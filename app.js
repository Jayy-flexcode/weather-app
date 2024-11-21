let input = document.getElementById ("search");
let searchButton = document.getElementById ("search-btn");
let city = document.getElementById ("city");
let degree = document.getElementById ("degree");
let humidity = document.getElementById ("humidity");
let wind = document.getElementById ("wind");
let feelsLike = document.getElementById ("feels-like");
let visibility = document.getElementById ("visibility");
let pressure = document.getElementById ("pressure");
let uvIndex = document.getElementById ("uv-index");

let myData = new XMLHttpRequest();

searchButton.addEventListener("click", ()=>{

    myData.open("GET", `https://api.weatherapi.com/v1/current.json?key=4408fbeb1b844f5196a75900241511&q=${input.value}`);   


    myData.onload = function () {

        let myWeather = JSON.parse(myData.responseText);

        console.log(myWeather);

        city.innerHTML = myWeather.location.name;
        degree.innerHTML = `${myWeather.current.temp_c}°C`;
        humidity.innerHTML = `${myWeather.current.humidity} %`;
        wind.innerHTML = `${myWeather.current.wind_kph} km/ph`;
        feelsLike.innerHTML = `${myWeather.current.feelslike_c} °`;
        visibility.innerHTML = `${myWeather.current.vis_km} km`;
        pressure.innerHTML = `${myWeather.current.pressure_mb} hPa`;
        uvIndex.innerHTML = `${myWeather.current.uv} mw`;
        

    };
    
    myData.send()
 
    
});