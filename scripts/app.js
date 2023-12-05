import { apiKey } from "./environment.js";

let main1 = document.getElementById("main1")
let main12 = document.getElementById('main12')
let main2 = document.getElementById("main2")
let main22 = document.getElementById('main22')

let city = document.getElementById("city")
let state = document.getElementById('state')


let dayName1 = document.getElementById("dayName1")
let weatherIcon1 = document.getElementById('weatherIcon1')
let Day1Max = document.getElementById('Day1Max')
let Day1Min = document.getElementById('Day1Min')

let dayName2 = document.getElementById("dayName2")
let weatherIcon2 = document.getElementById('weatherIcon2')
let Day2Max = document.getElementById('Day2Max')
let Day2Min = document.getElementById('Day2Min')

let dayName3 = document.getElementById("dayName3")
let weatherIcon3 = document.getElementById('weatherIcon3')
let Day3Max = document.getElementById('Day3Max')
let Day3Min = document.getElementById('Day3Min')

let dayName4 = document.getElementById("dayName4")
let weatherIcon4 = document.getElementById('weatherIcon4')
let Day4Max = document.getElementById('Day4Max')
let Day4Min = document.getElementById('Day4Min')

let dayName5 = document.getElementById("dayName5")
let weatherIcon5 = document.getElementById('weatherIcon5')
let Day5Max = document.getElementById('Day5Max')
let Day5Min = document.getElementById('Day5Min')

navigator.geolocation.getCurrentPosition(succes, errorFunc)
let latFunc;
let longFunc;
function succes(position) {
    latFunc = position.coords.latitude;
    longFunc = position.coords.longitude;
    console.log(latFunc)
    console.log(longFunc)
    ApiCall(latFunc, longFunc)
    ApiCall5DaysForcast(latFunc, longFunc)
    ApiCallLocation(latFunc, longFunc)
}

function errorFunc(error) {
    return error.message
}


function ApiCall(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log(data)
            let tempDgr = document.getElementById('tempDgr');
            let tempMax = document.getElementById('tempMax');
            let tempMin = document.getElementById('tempMin');
            let dgrFarenheit = ("Current temp " + (Math.round(((data.main.temp) - 273.15) * 9 / 5 + 32)) + "");
            // tempDgr.textContent = dgrFarenheit;
            console.log(dgrFarenheit)
            main12.textContent = dgrFarenheit
               main2.textContent = ("MAX today " + (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + "");
            main22.textContent =  (" MIN today" + (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + "");
            
            console.log(" MAX  today = " + (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + "");
            console.log(" MIN today  = " + (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " ");
            // ("The MAX temp in here is = " +  (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            // tempMax.textContent = ("The MAX temp in here is = " +  (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            // tempMin.textContent = ("The MIN temp in here is = " +  (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
        })
}

// ApiCall();
const now = new Date();
console.log(now);

const today = new Date();
console.log(today.toLocaleDateString('en-US'));
let dayOfWeek1;
const dd = today.getDate();
const dayOfWeek = today.getDay();

function daysDigit(dayOfWeek) {
    switch (dayOfWeek) {
    case 0:
        return "Sunday";
        break;
    case 1:
        return "Monday";
        // console.log(dayOfWeek1);
        break;
    case 2:
       return "Teusday";
        // console.log('Monday');
        break;
    case 3:
        return "Wednesday";
        break;
    case 4:
        return"Thursday";
        break;
    case 5:
        return "Friday";
        break;
    case 6:
        return "Saturday";
        break;
}
}

function ApiCall5DaysForcast(lat, lon) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            // console.log(data.list[0].main.temp_max)
            console.log(data.list[0].dt_txt[9])
            console.log(`${dd}`);
            main1.textContent = (daysDigit(dayOfWeek))
     
            let maxTempDay1= 0;           
            for (let i = 0; i < 11; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 1) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay1) { 
                        maxTempDay1 = data.list[i].main.temp_max;
                }
                }
            }           
            console.log("Max temp for " + (daysDigit(dayOfWeek + 1)) + " is " + (Math.round((maxTempDay1 - 273.15) * (9 / 5) + 32)))
            Day1Max.textContent = (Math.round((maxTempDay1 - 273.15) * (9 / 5) + 32));
            let minTempDay1 = 500;    
            for (let i = 0; i < 11; i++) {
            // minTempDay1= data.list[i].main.temp_min ; 
                if ((data.list[i].dt_txt[9]) == dd + 1) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay1) { 
                    minTempDay1 = data.list[i].main.temp_min;
                    // console.log(i)
                }
                }
            }           
            console.log("Min temp for " + (daysDigit(dayOfWeek + 1)) + " is " + (Math.round((minTempDay1 - 273.15) * (9 / 5) + 32)))
            Day1Min.textContent = (Math.round((minTempDay1 - 273.15) * (9 / 5) + 32));



            
            let maxTempDay2= 0;
            for (let i = 0; i < 39; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 2) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay2) { 
                    maxTempDay2 = data.list[i].main.temp_max;
                    // console.log(i)
                }
                }
            }
            console.log("Max temp for " + (daysDigit(dayOfWeek + 2)) + " is " + (Math.round((maxTempDay2 - 273.15) * (9 / 5) + 32)))
             Day2Max.textContent = (Math.round((maxTempDay2 - 273.15) * (9 / 5) + 32))

            let minTempDay2 = 500;    
            for (let i = 0; i < 39; i++) {
            // minTempDay2= data.list[i].main.temp_min ; 
                if ((data.list[i].dt_txt[9]) == dd + 2) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay2) { 
                    minTempDay2 = data.list[i].main.temp_min;
                    // console.log(i)
                }
                }
            }           
            console.log("Min temp for " + (daysDigit(dayOfWeek + 2)) + " is " + (Math.round((minTempDay2 - 273.15) * (9 / 5) + 32)))
             Day2Min.textContent =  (Math.round((minTempDay2 - 273.15) * (9 / 5) + 32))



            let maxTempDay3 = 0;
            for (let i = 0; i < 39; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 3) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay3) { 
                    maxTempDay3 = data.list[i].main.temp_max;
                    // console.log(i)
                }
                }
            }
            console.log("Max temp for " + (daysDigit(dayOfWeek + 3)) + " is " + (Math.round((maxTempDay3 - 273.15) * (9 / 5) + 32)))
            Day3Max.textContent = (Math.round((maxTempDay3 - 273.15) * (9 / 5) + 32))
                 
            let minTempDay3 = 500;    
            for (let i = 0; i < 39; i++) {
            // minTempDay3= data.list[i].main.temp_min ; 
                if ((data.list[i].dt_txt[9]) == dd + 3) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay3) { 
                    minTempDay3 = data.list[i].main.temp_min;
                    // console.log(i)
                }
                }
            }           
            console.log("Min temp for " + (daysDigit(dayOfWeek + 3)) + " is " + (Math.round((minTempDay3 - 273.15) * (9 / 5) + 32)))
            Day3Min.textContent = (Math.round((minTempDay3 - 273.15) * (9 / 5) + 32))
                 

            
            let maxTempDay4 = 0;
            for (let i = 0; i < 39; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 4) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay4) { 
                    maxTempDay4 = data.list[i].main.temp_max;
                    // console.log(i)
                }
                }
            }
            console.log("Max temp for " + (daysDigit(dayOfWeek + 4)) + " is " + (Math.round((maxTempDay4 - 273.15) * (9 / 5) + 32)))
            Day4Max.textContent = (Math.round((maxTempDay4 - 273.15) * (9 / 5) + 32))
                
            let minTempDay4 = 500;    
            for (let i = 0; i < 39; i++) {
            
                if ((data.list[i].dt_txt[9]) == dd + 4) {
                    // minTempDay4= data.list[i].main.temp_min ; 
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay4) { 
                    minTempDay4 = data.list[i].main.temp_min;
                    // console.log(i)
                }
                }
            }           
            console.log("Min temp for " + (daysDigit(dayOfWeek + 4)) + " is " + (Math.round((minTempDay4 - 273.15) * (9 / 5) + 32)))
            Day4Min.textContent = (Math.round((minTempDay4 - 273.15) * (9 / 5) + 32))
                 

            let maxTempDay5 = 0;
            for (let i = 0; i < 39; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 5) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay5) { 
                    maxTempDay5 = data.list[i].main.temp_max;
                    // console.log(i)
                }
                }
            }
            console.log("Max temp for " + (daysDigit(dayOfWeek + 5)) + " is " + (Math.round((maxTempDay5 - 273.15) * (9 / 5) + 32)))
            Day5Max.textContent = (Math.round((maxTempDay5 - 273.15) * (9 / 5) + 32))
                 
            let minTempDay5 = 500;    
            for (let i = 0; i < 39; i++) {
            
                if ((data.list[i].dt_txt[9]) == dd + 5) {
                    // minTempDay5= data.list[i].main.temp_min ; 
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay5) { 
                    minTempDay5 = data.list[i].main.temp_min;
                        // console.log(i)
                        // console.log(minTempDay5)
                    }
                    
                }
            }           
            console.log("Min temp for " + (daysDigit(dayOfWeek + 5)) + " is " + (Math.round((minTempDay5 - 273.15) * (9 / 5) + 32)))
            // console.log("Min temp for " + (daysDigit(dayOfWeek + 5)) + " is " + minTempDay5)
            Day5Min.textContent = (Math.round((minTempDay5 - 273.15) * (9 / 5) + 32))



        })
}


main2.textContent = daysDigit(dayOfWeek)
main12.textContent = daysDigit(dayOfWeek )
main22.textContent = daysDigit(dayOfWeek )

dayName1.textContent = daysDigit(dayOfWeek + 1)
dayName2.textContent = daysDigit(dayOfWeek + 2)
dayName3.textContent = daysDigit(dayOfWeek + 3)
dayName4.textContent = daysDigit(dayOfWeek + 4)
dayName5.textContent = daysDigit(dayOfWeek + 5)
// ApiCall5DaysForcast();
function ApiCallLocation(lat, lon) {

    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data[0].name)
            console.log(data[0].state)
            city.textContent = data[0].name + " " + data[0].state

            for (let i = 0; i < 7; i++) {
            }
        })
}
