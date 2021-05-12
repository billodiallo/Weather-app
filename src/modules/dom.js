export const searchForm = document.querySelector('.control');
export const checkCity = document.getElementById('cityInput');
export const errorMessage = document.getElementById('warn');

const weatherImg = document.querySelector('.icon');
const desc = document.querySelector('.weather-status');
const currTemp = document.querySelector('.main-temp');
const currCity = document.querySelectorAll('.location>span');
const moreAbt = document.querySelectorAll('.more-info > p');
const displayCity = document.getElementById('weather-forecast');
const currDate = document.querySelector('.date');
const c = document.getElementById('switchF');
const d = document.getElementById('degrees');


export default (data, tempF = null) => {
    const list = document.createElement('li');
    list.classList.add('city');
    currCity[0].innerHTML = data.name;
    currCity[1].innerHTML = data.country;
    currDate.innerHTML = new Date();
    currTemp.innerHTML = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
      data.temp,
    )}°C`;