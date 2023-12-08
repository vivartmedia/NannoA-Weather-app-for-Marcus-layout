
import { apiKey } from "./environment.js";

let main1 = document.getElementById("main1")
let main12 = document.getElementById('main12')
let main2 = document.getElementById("main2")
let main22 = document.getElementById('main22')

let city = document.getElementById("city")
let state = document.getElementById('state')




const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        geoLocatin(searchBtn.value);
        searchBtn.value = ""

    }

})

let searchLatFunc;
let searchLongFunc;
function geoLocatin(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {



            searchLatFunc = data[0].lat;
            searchLongFunc = data[0].lon;
            console.log(searchLatFunc)
            console.log(searchLongFunc)
            ApiCall(searchLatFunc, searchLongFunc)
            ApiCall5DaysForcast(searchLatFunc, searchLongFunc)
            ApiCallLocation(searchLatFunc, searchLongFunc)
            console.log(data)
        })

}





let dayName1 = document.getElementById("dayName1")
// let weatherIcon1 = document.getElementById('weatherIcon1')
let Day1Max = document.getElementById('Day1Max')
let Day1Min = document.getElementById('Day1Min')

let dayName2 = document.getElementById("dayName2")
// let weatherIcon2 = document.getElementById('weatherIcon2')
let Day2Max = document.getElementById('Day2Max')
let Day2Min = document.getElementById('Day2Min')

let dayName3 = document.getElementById("dayName3")
// let weatherIcon3 = document.getElementById('weatherIcon3')
let Day3Max = document.getElementById('Day3Max')
let Day3Min = document.getElementById('Day3Min')

let dayName4 = document.getElementById("dayName4")
// let weatherIcon4 = document.getElementById('weatherIcon4')
let Day4Max = document.getElementById('Day4Max')
let Day4Min = document.getElementById('Day4Min')

let dayName5 = document.getElementById("dayName5")
// let weatherIcon5 = document.getElementById('weatherIcon5')
let Day5Max = document.getElementById('Day5Max')
let Day5Min = document.getElementById('Day5Min')

navigator.geolocation.getCurrentPosition(succes, errorFunc)
let latFunc;
let longFunc;
function succes(position) {
    latFunc = position.coords.latitude;
    longFunc = position.coords.longitude;
    // console.log(latFunc)
    // console.log(longFunc)
    ApiCall(latFunc, longFunc)
    ApiCall5DaysForcast(latFunc, longFunc)
    ApiCallLocation(latFunc, longFunc)
}

function errorFunc(error) {
    return error.message
}



function ApiCall(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            let tempDgr = document.getElementById('tempDgr');
            let tempMax = document.getElementById('tempMax');
            let tempMin = document.getElementById('tempMin');
            let dgrFarenheit = ((Math.round(data.main.temp)) + "°F");
            // tempDgr.textContent = dgrFarenheit;
            console.log(dgrFarenheit)
            main12.textContent = dgrFarenheit
            document.getElementById("weatherIconMain").src = (`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            main2.textContent = ("High: " + (Math.round(data.main.temp_max) + "°F"));
            main22.textContent = ("Low: " + (Math.round(data.main.temp_min) + "°F"));

            // console.log(" MAX  today = " + (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + "");
            // console.log(" MIN today  = " + (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " ");
            // ("The MAX temp in here is = " +  (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            // tempMax.textContent = ("The MAX temp in here is = " +  (Math.round(((data.main.temp_max) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
            // tempMin.textContent = ("The MIN temp in here is = " +  (Math.round(((data.main.temp_min) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!");
        })
}

// ApiCall();
const now = new Date();
// console.log(now);

const today = new Date();
// console.log(today.toLocaleDateString('en-US'));
let dayOfWeek1;
const dd = today.getDate();
const dayOfWeek = today.getDay();
// console.log(dayOfWeek)
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
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 6:
            return "Saturday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}






function ApiCall5DaysForcast(lat, lon) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            // console.log(data.list[0].main.temp_max)
            // console.log(data.list[0].dt_txt.substring(8, 10))
            // console.log(`${dd}`);
            main1.textContent = (daysDigit(dayOfWeek))

            let maxTempDay1 = 0;
            for (let i = 0; i < 8; i++) {
                // if ((data.list[i].dt_txt.substring(8, 10)) == dd + 1) {
                // console.log(data.list[i].main.temp_max)
                if (data.list[i].main.temp_max > maxTempDay1) {
                    maxTempDay1 = data.list[i].main.temp_max;
                    document.getElementById("weatherIcon1").src = (`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);
                    // console.log(i)
                }
                // }
            }
            // console.log("Max temp for " + (daysDigit(dayOfWeek + 1)) + " is " + maxTempDay1)
            Day1Max.textContent = "H: " + Math.round(maxTempDay1) + "°F";


            let minTempDay1 = 500;
            for (let i = 0; i < 8; i++) {
                // minTempDay1= data.list[i].main.temp_min ; 
                // if ((data.list[i].dt_txt.substring(8, 10)) == dd + 1) {
                // console.log(data.list[i].main.temp_max)
                if (data.list[i].main.temp_min < minTempDay1) {
                    minTempDay1 = data.list[i].main.temp_min;
                    // console.log(i)
                    // }
                }
            }
            // console.log("Min temp for " + (daysDigit(dayOfWeek + 1)) + " is " + (Math.round((minTempDay1 - 273.15) * (9 / 5) + 32)))
            Day1Min.textContent = "L: " + Math.round(minTempDay1) + "°F";



            let maxTempDay2 = 0;
            for (let i = 8; i < 16; i++) {
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 2) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay2) {
                        maxTempDay2 = data.list[i].main.temp_max;
                        // console.log(i)
                        document.getElementById("weatherIcon2").src = (`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);

                    }
                }
            }
            // console.log("Max temp for " + (daysDigit(dayOfWeek + 2)) + " is " + (Math.round((maxTempDay2 - 273.15) * (9 / 5) + 32)))
            Day2Max.textContent = "H: " + Math.round(maxTempDay2) + "°F"

            let minTempDay2 = 500;
            for (let i = 8; i < 16; i++) {
                // minTempDay2= data.list[i].main.temp_min ; 
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 2) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay2) {
                        minTempDay2 = data.list[i].main.temp_min;
                        // console.log(i)
                    }
                }
            }
            // console.log("Min temp for " + (daysDigit(dayOfWeek + 2)) + " is " + (Math.round((minTempDay2 - 273.15) * (9 / 5) + 32)))
            Day2Min.textContent = ("L: " + Math.round(minTempDay2) + "°F")



            let maxTempDay3 = 0;
            for (let i = 16; i < 24; i++) {
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 3) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay3) {
                        maxTempDay3 = data.list[i].main.temp_max;
                        document.getElementById("weatherIcon3").src = (`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);

                        // console.log(i)
                    }
                }
            }
            Day3Max.textContent = ("H: " + Math.round(maxTempDay3) + "°F")

            let minTempDay3 = 500;
            for (let i = 16; i < 24; i++) {
                // minTempDay3= data.list[i].main.temp_min ; 
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 3) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay3) {
                        minTempDay3 = data.list[i].main.temp_min;
                        // console.log(i)
                    }
                }
            }
            Day3Min.textContent = ("L: " + Math.round(minTempDay3) + "°F")



            let maxTempDay4 = 0;
            for (let i = 24; i < 32; i++) {
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 4) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay4) {
                        maxTempDay4 = data.list[i].main.temp_max;
                        document.getElementById("weatherIcon4").src = (`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);

                        // console.log(i)
                    }
                }
            }
            Day4Max.textContent = "H: " + Math.round(maxTempDay4) + "°F"

            let minTempDay4 = 500;
            for (let i = 24; i < 32; i++) {

                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 4) {
                    // minTempDay4= data.list[i].main.temp_min ; 
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay4) {
                        minTempDay4 = data.list[i].main.temp_min;
                        // console.log(i)
                    }
                }
            }
            Day4Min.textContent = ("L: " + Math.round(minTempDay4) + "°F")


            let maxTempDay5 = 0;
            for (let i = 32; i < 40; i++) {
                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 5) {
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_max > maxTempDay5) {
                        maxTempDay5 = data.list[i].main.temp_max;
                        document.getElementById("weatherIcon5").src = (`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);

                        // console.log(i)
                    }
                }
            }
            Day5Max.textContent = ("H: " + Math.round(maxTempDay5) + "°F")

            let minTempDay5 = 500;
            for (let i = 32; i < 40; i++) {

                if ((data.list[i].dt_txt.substring(8, 10)) == dd + 5) {
                    // minTempDay5= data.list[i].main.temp_min ; 
                    // console.log(data.list[i].main.temp_max)
                    if (data.list[i].main.temp_min < minTempDay5) {
                        minTempDay5 = data.list[i].main.temp_min;
                        // console.log(i)
                        // console.log(minTempDay5)
                    }

                }
            }
            // console.log("Min temp for " + (daysDigit(dayOfWeek + 5)) + " is " + minTempDay5)
            Day5Min.textContent = ("L: " + Math.round(minTempDay5) + "°F")
        })
}








// -------------------------------------------------------------------------------------------------------------


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const today = new Date();
const todayDayOfWeek = daysOfWeek[today.getDay()];

// console.log("Today's day of the week:", todayDayOfWeek);
const futureDate = new Date(today);
for (let i = 1; i <= 5; i++) {

    futureDate.setDate(today.getDate() + i);
    // console.log(futureDate.setDate(today.getDate() + i))

    const futureDayOfWeek = daysOfWeek[futureDate.getDay()];
    // console.log(`Day ${i} from today is:`, futureDayOfWeek);
    if (i === 1) {
        dayName1.textContent = futureDayOfWeek
    } else if (i === 2) {
        dayName2.textContent = futureDayOfWeek
    } else if (i === 3) {
        dayName3.textContent = futureDayOfWeek
    } else if (i === 4) {
        dayName4.textContent = futureDayOfWeek
    } else if (i === 5) {
        dayName5.textContent = futureDayOfWeek
    }
}



// const upcomingDate = new Date(today);
// upcomingDate.setDate(today.getDate() + 29);

// console.log("Today's date:", today.toISOString().slice(0, 10));
// console.log("Upcoming date in 29 days:", upcomingDate.toISOString().slice(0, 10));


// function ApiCall5DaysForcast2(lat, lon) {


//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)


//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             // console.log(data)
//             // // console.log(data.list[0].main.temp_max)
//             // console.log(data.list[0].dt_txt.substring(8, 10))
//             // console.log(`${dd}`);
//             // main1.textContent = (daysDigit(dayOfWeek))

//             // for (let i = 0; i < data.list.length; i++){
//             //     console.log(data.list.length + " this is how many list items we have")
//             // }




//         })
//     }
//     ApiCall5DaysForcast2();







// ------------------------------------------------------------------------------------------------------





main2.textContent = daysDigit(dayOfWeek)
main12.textContent = daysDigit(dayOfWeek)
main22.textContent = daysDigit(dayOfWeek)


// dayName3.textContent = daysDigit(dayOfWeek + 3)
// dayName4.textContent = daysDigit(dayOfWeek + 4)
// dayName5.textContent = daysDigit(dayOfWeek + 5)
// ApiCall5DaysForcast();
// Global variable for the current city
let currentCity = "";

function ApiCallLocation(lat, lon) {
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].name);
            console.log(data[0].state);
            city.textContent = data[0].name + " " + data[0].state;
            searchBtn.placeholder = data[0].name;
            currentCity = data[0].name;  // Update current city
        });
}

// Retrieve favorite cities from local storage or initialize an empty array
let favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

// Event listener for the 'saveFav' button
document.getElementById('saveFav').addEventListener('click', function () {
    if (!isCityInFavorites(currentCity)) {
        favoriteCities.push(currentCity);
        localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
        updateFavoritesList();
    }
});

// Function to check if the city is already in the favorites list
function isCityInFavorites(city) {
    return favoriteCities.includes(city);
}

// Function to update the favorites list
function updateFavoritesList() {
    let favoritesList = document.getElementById('favorites');
    favoritesList.innerHTML = "";
    favoriteCities.forEach(city => {
        let listCity = document.createElement('li');
        listCity.textContent = city;
        let deleteFav = document.createElement('button');
        deleteFav.textContent = 'Delete';
        deleteFav.addEventListener('click', function (event) {
            event.stopPropagation();
            favoriteCities = favoriteCities.filter(item => item !== city);
            localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
            updateFavoritesList();
        });
        listCity.appendChild(deleteFav);
        favoritesList.appendChild(listCity);
    });
}

// Call this at the beginning to populate the favorites list initially
updateFavoritesList();

