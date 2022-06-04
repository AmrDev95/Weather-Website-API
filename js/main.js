var searchBar = document.getElementById("searchBar");
var Today = document.getElementById('Today');
var Today1 = document.getElementById('Today1');
var NextDay = document.getElementById('nextDay');
var Month = document.getElementById('Month');
var currentLocation = document.getElementById("currentLocation")
var currentTemp = document.getElementById("currentTemp");
var condition = document.getElementById('condition');
var wind = document.getElementById('wind');
var direction = document.getElementById('direction');
var rain = document.getElementById('rain');
var maxTemp = document.getElementById('maxTemp');
var averageTemp = document.getElementById('averageTemp');
var conditionMorning = document.getElementById('conditionMorning');
var morningIcon = document.getElementById('morningIcon');
var morningIcon1 = document.getElementById('morningIcon1');
var maxTemp1 = document.getElementById('maxTemp1');
var averageTemp1 = document.getElementById('averageTemp1');
var conditionMorning1 = document.getElementById('conditionMorning1');
var currenIcon = document.getElementById('currenIcon');

const Days =['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thurday' , 'Friday' , 'Saturday'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


var date = new Date().toLocaleDateString();
var dateArray = date.split('/');
var monthIndex = months[Number(dateArray[0])-1];
Month.innerHTML = `${dateArray[1]} ${monthIndex}`;

var dayName = new Date();

Today.innerHTML = Days[dayName.getDay()];
Today1.innerHTML = Days[dayName.getDay()];
NextDay.innerHTML = nextDay(dayName.getDay());




searchBar.addEventListener('keyup' , function(){
    getCurrentWeather(searchBar.value);

})

function nextDay(i){
    if(i==6){
        return Days[0];
    }
    else{
        return Days[i+1];
    }
}


getCurrentWeather('auto:ip');



async function getCurrentWeather(location){
    var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=039b00a006df4d9c8b3123023223005&q=${location}&days=2`);
    var currentWeather = await res.json();
    currentLocation.innerHTML = currentWeather.location.name;
    currentTemp.innerHTML = `${currentWeather.current.temp_c}<span>&#176;</span>C`;
    condition.innerHTML = currentWeather.current.condition.text;
    rain.innerHTML = `${currentWeather.forecast.forecastday[0].day.daily_will_it_rain} %`;
    wind.innerHTML = `${currentWeather.current.wind_kph} Km/h`;
    direction.innerHTML = currentWeather.current.wind_dir;
    maxTemp.innerHTML = `${currentWeather.forecast.forecastday[0].day.maxtemp_c}<span>&#176;</span>C`;
    averageTemp.innerHTML = `${currentWeather.forecast.forecastday[0].day.avgtemp_c}<span>&#176;</span>C`;
    conditionMorning.innerHTML = currentWeather.forecast.forecastday[0].day.condition.text;
    morningIcon.src = `https:${currentWeather.forecast.forecastday[0].day.condition.icon}`;
    morningIcon1.src = `https:${currentWeather.forecast.forecastday[1].day.condition.icon}`;
    maxTemp1.innerHTML = `${currentWeather.forecast.forecastday[1].day.maxtemp_c}<span>&#176;</span>C`;
    averageTemp1.innerHTML = `${currentWeather.forecast.forecastday[1].day.avgtemp_c}<span>&#176;</span>C`;
    conditionMorning1.innerHTML = currentWeather.forecast.forecastday[0].day.condition.text;
    currenIcon.src = `https:${currentWeather.current.condition.icon}`;


}







