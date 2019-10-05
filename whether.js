var raw_input = require('readline-sync').question
var citInput = raw_input("enter city name")
function whetherAPI(data){
    var response = require("axios");
    var getData = response.get(api);
    return getData;
}
var api = "https://api.openweathermap.org/data/2.5/weather?q= "+citInput+"&appid=3a20d3800e1540e8a3f6fb331e91f796";
var responseData = whetherAPI(api)

// var getData = responseData.get(api);
function  whetherInformation(info){
    responseData.then((info) => {
        var Data = info["data"]
        var coordData = Data["coord"]
        var longiTude = coordData["lon"]
        var lattiTude = coordData["lat"]
        var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lattiTude+"&lon="+longiTude+"&appid=3a20d3800e1540e8a3f6fb331e91f796";
        var urlRes = whetherAPI(url)
        return(urlRes)
    }).then((urlRes)=>{

        var detailes = urlRes["data"]
        var cityname = detailes["name"]
        var cityId = detailes["id"]
    })
        
    
    .catch((wrong)=>{
        console.log("error")
    })
}
whetherInformation(responseData)