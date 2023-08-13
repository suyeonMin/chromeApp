const API_KEY = "39a740ea435d17c45a754e0320ffba3e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        //console.log(data.name, data.weather[0].main)

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        city.innerText = data.name;

    }));
}

function onGeoErr(){
    alert("Can't find you. No weather for you.")
}


//현재 위치 알려줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); 