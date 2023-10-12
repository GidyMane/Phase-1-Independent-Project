let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

  icons.onclick = ()=>{
    section.classList.toggle("dark");
  }

  // creating a function and calling it in every seconds
  setInterval(()=>{

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
    hour = hour == 0 ? hour = 12 : hour; // if hour value is  0 than it value will be 12

    // adding 0 to the front of all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;

  }, 1000); // 1000 milliseconds = 1s

// Adding Javascript to the weather part

// Adding the API KEY

const apiKey= "629086e226d63aee40ec6832ea841fcb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// ADDING FUNCTIONALITY TO THE SEARCHBOX

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// fetching the weather Icons
const weatherIcon = document.querySelector(".weather-icon");

// adding asynchronous function

async function checkWeather(city){
  const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data =await response.json();

    // Fetching each individual element to be updated by the weather from the API
  document.querySelector(".city").innerHTML = data.name;// update the city name
  document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°C"; // updates the temperature and convert the degrees into whole numbers using the math function 
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";// update humidity
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";// update wind speed

// Updating each weather Icon to display according to the weather condition

if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="images/clouds.png";
}
else if(data.weather[0].main =="Clear"){
  weatherIcon.src ="images/clear.png";
}
else if(data.weather[0].main =="Rain"){
  weatherIcon.src ="images/rain.png";
}
else if(data.weather[0].main =="Drizzle"){
  weatherIcon.src ="images/drizzle.png";
}
else if(data.weather[0].main =="Mist"){
  weatherIcon.src ="images/mist.png";
}
// Allow weather to only be displayed after you search it
document.querySelector(".weather").style.display = "block";
}
// Adding EventListener to the search button
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})





  