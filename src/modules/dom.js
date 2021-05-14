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

  weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  desc.innerHTML = data.description;
  let currTempF = false;
  const toggleTempF = (el, cc, tempInfo) => {
    const cel = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
      tempInfo,
    )}°C`;
    const elTempF = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
      tempF,
    )}°F`;

    if (currTempF) {
      cc.innerHTML = cel;
      currTemp.innerHTML = cel;
      el.innerHTML = 'Switch to °F';
      currTempF = false;
    } else {
      cc.innerHTML = elTempF;
      currTemp.innerHTML = elTempF;
      el.innerHTML = 'Switch to °C';
      currTempF = true;
    }
  };

  
  d.style.display = 'block';
  d.addEventListener('click', () => {
    toggleTempF(d, c, data.temp);
  });
  displayCity.className = 'show';
};

export const selectImage = () => {
  const script = document.createElement('script');
  document.head.appendChild(script);
  window.abc = function abc(data) {
    const body = document.querySelector('body');
    body.style.background = `url('${data.items[2].media.m}') no-repeat`;
    body.style.backgroundSize = 'cover';
  };
};
