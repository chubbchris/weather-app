var fetchButton= document.querySelector(".fetchButton");
var searchInput=document.querySelector(".searchBar");



function displayWeatherData (event){
    event.preventDefault();
var searchBarValue = searchInput.value

if(searchBarValue==="detroit" || searchBarValue==="Detroit"){ 
       return detroitWeatherApi()
    };
if(searchBarValue==="chicago"|| searchBarValue==="Chicago"){
    return chicagoWeatherApi()
    };
if(searchBarValue==="st'louis" || searchBarValue==="stlouis" || searchBarValue==="St'louis" || searchBarValue==="St'Louis"){
    return stlouisWeatherApi()
    };
if(searchBarValue==="cleveland"|| searchBarValue==="Cleveland"){
    return clevelandWeatherApi()
};
if(searchBarValue==="columbus"|| searchBarValue==="Columbus"){
    return columbusWeatherApi()
};
if (searchBarValue==="kansascity"||searchBarValue==="kansas city"|| searchBarValue==="Kansas City"){
    return kansascityWeatherApi()
};
if (searchBarValue==="cinncinati"||searchBarValue==="Cinncinati"){
    return cinncinatiWeatherApi()
};
if (searchBarValue==="indianapolis"||searchBarValue==="Indianapolis"){
    return indianapolisWeatherApi()
};
if (searchBarValue==="Greenbay"||searchBarValue==="Green bay"|| searchBarValue==="green bay"|| searchBarValue==="greenbay"|| searchBarValue==="Green Bay"){
    return greenbayWeatherApi()
};
if (searchBarValue==="stpaul"||searchBarValue==="St Paul"|| searchBarValue==="St paul" || searchBarValue==="st paul"|| searchBarValue==="Stpaul"||searchBarValue==="st'paul"||searchBarValue==="St'Paul"){
    return stpaulWeatherApi()
}
else 
   return alert("The city you have selected is not in our directory? please choose from current availible options")

};




var detroitWeatherApi = function (){
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=42.331429&lon=-83.045753&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
            var searchList = document.querySelector(".searchList");
            var searchListEl= document.createElement("li");
            searchListEl.textContent = searchInput.value;
            searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
            searchList.append(searchListEl);
           
            
            var weatherList = document.querySelector(".weatherList")
            var weatherListEl = document.createElement("li");
             weatherListEl= data.daily;
             weatherList.append(weatherListEl)
             console.log(searchListEl)
             console.log(weatherListEl);
             
        });
    };
var chicagoWeatherApi = function(){
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=41.878113&lon=-87.629799&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var stlouisWeatherApi = function(){
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=38.627003&lon=-90.199402&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var clevelandWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=41.499321&lon=-81.694359&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var columbusWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=39.96196&lon=-83.00305&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var kansascityWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=39.09976&lon=-94.57797&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var cinncinatiWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=39.10406&lon=-84.52035&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });  
};
var indianapolisWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=39.76793&lon=-86.15439&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var greenbayWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=44.51348&lon=-88.01313&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
var stpaulWeatherApi = function(){
    var requestUrl=""
    var requestUrl= "http://api.openweathermap.org/data/2.5/onecall?lat=44.94834&lon=-93.09355&appid=511d4f52c4115ade0901a61168fcffc4";
    
    fetch(requestUrl)
    .then(function(response){
        return response.json();   
    })
    .then(function(data) {
        var searchList = document.querySelector(".searchList");
        var searchListEl= document.createElement("li");
        searchListEl.setAttribute("class","border border-dark bg-secondary text-white text-center col-2")
        searchListEl.textContent = searchInput.value;
        searchList.append(searchListEl);
       
        
        var weatherList = document.querySelector(".weatherList")
        var weatherListEl = document.createElement("li");
         weatherListEl= data.daily;
         weatherList.append(weatherListEl)
         console.log(searchListEl)
         console.log(weatherListEl);
         
        });   
};
  fetchButton.addEventListener("click",displayWeatherData)
