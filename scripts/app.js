import { apiKey } from "./environment.js";

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
            let dgrFarenheit = ("The temp today is = " + (Math.round(((data.main.temp) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            // tempDgr.textContent = dgrFarenheit;
            console.log(dgrFarenheit)
            console.log("The MAX temp today is = " + (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            console.log("The MIN temp today is = " + (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
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
     
            let maxTempDay1= 0;           
            for (let i = 0; i < 11; i++) {
                if ((data.list[i].dt_txt[9]) == dd + 1) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay1) { 
                    maxTempDay1 = data.list[i].main.temp_max;
                    // console.log(i)
                }
                }
            }           
            console.log("Max temp for " + (daysDigit(dayOfWeek + 1)) + " is " + (Math.round((maxTempDay1 - 273.15) * (9 / 5) + 32)))

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



        })
}

// ApiCall5DaysForcast();
function ApiCallLocation(lat, lon) {

    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data[0].name)

            for (let i = 0; i < 7; i++) {

            }
        })
}
