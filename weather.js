


const getWeatherReport={
"location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.5171,
    "lon": -0.1062,
    "tz_id": "Europe/London",
    "localtime_epoch": 1753741948,
    "localtime": "2025-07-28 23:32"
  },
  "current": {
    "last_updated_epoch": 1753741800,
    "last_updated": "2025-07-28 23:30",
    "temp_c": 17.4,
    "temp_f": 63.3,
    "is_day": 0,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
      "code": 1003
    },
    "wind_mph": 5.1,
    "wind_kph": 8.3,
    "wind_degree": 329,
    "wind_dir": "NNW",
    "pressure_mb": 1020,
    "pressure_in": 30.12,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 68,
    "cloud": 75,
    "feelslike_c": 17.4,
    "feelslike_f": 63.3,
    "windchill_c": 18.1,
    "windchill_f": 64.5,
    "heatindex_c": 18.1,
    "heatindex_f": 64.5,
    "dewpoint_c": 9.8,
    "dewpoint_f": 49.6,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 0,
    "gust_mph": 8.5,
    "gust_kph": 13.7
  }
}
let areaLocation=document.getElementById("location")
let temprature=document.getElementById("temp")
let locationCondition=document.getElementById("condition")
let areaicon=document.getElementById("icon")
let searchBtn = document.getElementById("searchBtn");
let getRegion=document.getElementById("region");

async function getWeather(name){
let url=`http://api.weatherapi.com/v1/current.json?key=eec0ba4e49fb4e128b9222914252807&q=${name}&aqi=no`
try{
let response=await fetch(url);
let data=await response.json();
console.log(data);

areaLocation.innerHTML=areaLocation.textContent=`Weather in ${data.location.name}`
temprature.textContent=`temprature in ${data.current.temp_c}°C`
locationCondition.textContent=`Wind Speed ${data.current.wind_mph} mph`
areaicon.src=data.current.condition.icon;
areaicon.alt="Weather icon";
getRegion.textContent=` ${data.location.region}`

}catch(error){
    console.error("Error fetching data:", error);
        areaLocation.textContent = "Failed to load data!";
        temprature.textContent = "";
        locationCondition.textContent = "";
        icon.src = "";
}
}
searchBtn.addEventListener("click",function(){
    let inputCity=document.getElementById("cityInput").value.trim();
    if(inputCity){
        getWeather(inputCity);
    }else{
        alert("please enter anther city")
    }

})