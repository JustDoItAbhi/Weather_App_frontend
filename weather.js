function updateBackground(condition) {
    const screen = document.querySelector(".fullscreen");

    if (!screen) return;

    condition = condition.toLowerCase();

    if (condition.includes("sunny")) {
        screen.style.background = "linear-gradient(135deg, #fdfbfb, #ebedee)";
    } else if (condition.includes("rain")) {
        screen.style.background = "linear-gradient(135deg, #4e54c8, #8f94fb)";
    } else if (condition.includes("cloud")) {
        screen.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
    } else if (condition.includes("snow")) {
        screen.style.background = "linear-gradient(135deg, #e0eafc, #cfdef3)";
    } else if (condition.includes("mist") || condition.includes("fog")) {
        screen.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
    } else {
        screen.style.background = "linear-gradient(135deg, #a8c0ff, #3f2b96)";
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

 const conditionText = data.current.condition.text;
areaLocation.innerHTML=areaLocation.textContent=`Weather in ${data.location.name}`
temprature.textContent=`temprature in ${data.current.temp_c}°C`
locationCondition.textContent=`${conditionText}`
areaicon.src=data.current.condition.icon;
areaicon.alt="Weather icon";
getRegion.textContent=` ${data.location.region}`
updateBackground(conditionText);
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