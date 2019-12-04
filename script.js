var weatherData;
var request = new XMLHttpRequest();
var date = new Date();
let url = 'http://api.openweathermap.org/data/2.5/forecast/daily/?q=Salt+Lake+City,us&units=imperial&cnt=5&appid=846d3b48355b6e95813bed8fb29f0fb3';

function loadData() {
    
    request.open('GET', url, true);
    request.onload = loadComplete;
    request.send();
}

loadData();

function loadComplete(evt) {
    weatherData = JSON.parse(evt.currentTarget.responseText);
    var forecastedDaysArray = weatherData.list;
    for(index in forecastedDaysArray){
        var individualDayForecast = forecastedDaysArray[index];
        individualDayForecast.date = new Date(individualDayForecast.dt*1000);
        delete individualDayForecast.dt;
        console.log("individualDayForecast.date: "+individualDayForecast.date);
        console.log(individualDayForecast);
    }
    console.log(weatherData);

    var iconCode = weatherData.list[0].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    let link= document.getElementById("place");
    link.href= "https://www.visitsaltlake.com/";
    document.getElementById("place").innerHTML = weatherData.city.name;
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp").innerHTML = weatherData.list[0].temp.day+"&deg;";
    document.getElementById("conditions").src = iconPath;
    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;
    
    var iconCode = weatherData.list[1].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('day2').innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById('conditions2').src = iconPath;
    document.getElementById('conditionsDesc2').innerHTML = weatherData.list[1].weather[0].description;
    document.getElementById("maxTemp2").innerHTML = weatherData.list[1].temp.max+"&deg;";
    document.getElementById("minTemp2").innerHTML = weatherData.list[1].temp.min+"&deg;";

    var iconCode = weatherData.list[2].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('day3').innerHTML = (date.getMonth()+1) + "/" +date.getDate();
    document.getElementById('conditions3').src = iconPath;
    document.getElementById('conditionsDesc3').innerHTML = weatherData.list[2].weather[0].description;
    document.getElementById("maxTemp3").innerHTML = weatherData.list[2].temp.max+"&deg;";
    document.getElementById("minTemp3").innerHTML = weatherData.list[2].temp.min+"&deg;";

    var iconCode = weatherData.list[3].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('day4').innerHTML = (date.getMonth()+1) + "/" +date.getDate();
    document.getElementById('conditions4').src = iconPath;
    document.getElementById('conditionsDesc4').innerHTML = weatherData.list[3].weather[0].description;
    document.getElementById("maxTemp4").innerHTML = weatherData.list[3].temp.max+"&deg;";
    document.getElementById("minTemp4").innerHTML = weatherData.list[3].temp.min+"&deg;";

    var iconCode = weatherData.list[4].weather[0].icon;
    var iconPath = "http://openweathermap.org/img/w/"+iconCode+".png";
    document.getElementById('day5').innerHTML = (date.getMonth()+1) + "/" +date.getDate();
    document.getElementById('conditions5').src = iconPath;
    document.getElementById('conditionsDesc5').innerHTML = weatherData.list[4].weather[0].description;
    document.getElementById("maxTemp5").innerHTML = weatherData.list[4].temp.max+"&deg;";
    document.getElementById("minTemp5").innerHTML = weatherData.list[4].temp.min+"&deg;";
}

function searchCity() {
    document.getElementById('returnTextArea').innerHTML = "";
    console.log("Search Test");
    let cityName = document.getElementById("input").value;

    url = 'http://api.openweathermap.org/data/2.5/forecast/daily/?q='+cityName+'&units=imperial&cnt=5&appid=846d3b48355b6e95813bed8fb29f0fb3';
    loadData();

    if (cityName == "" || weatherData.status == 404){
        console.log ("Invalid city name, please enter a valid city.");
        document.getElementById('returnTextArea').innerHTML = "The name of the city you entered can't be found, please try again.";
        throw{ name:"Invalid City", message:"The name of the city you entered can't be found, please try again."};
    }
    
   
}
