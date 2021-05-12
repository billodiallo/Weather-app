import updateDOM, {
  searchForm, checkCity, errorMessage, selectImage,
} from './modules/dom';
import parseJSON from './modules/parsejson';

const apiKey = '06d4a40aeec62ece3ab14b5fc03c4ec0';
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const currentCity = checkCity.value;
  const fetchWeather = async (city, unit) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`,
    );
    return response.json();
  };


