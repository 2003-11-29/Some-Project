const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "093f0d47bbmshf51c587d4669e30p1f64d7jsne93d8410cc2b",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};
console.log(url);

const getWeather = (city) => {
  cityName.innerText = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      WCondition.innerText = response.current.condition.text;
      temp.innerText = response.current.temp_c;
      temp2.innerText = response.current.temp_c;
      temp_max.innerText = response.location.country;
      temp_min.innerText = response.current.heatindex_c;
      feels_like.innerText = response.current.feelslike_c;
      pressure.innerText = response.current.pressure_mb;
      humidity.innerText = response.current.humidity;
      humidity2.innerText = response.current.humidity;
      sea_level.innerText = response.current.wind_dir;
      grnd_level.innerText = response.current.windchill_c;
      speed.innerText = response.current.wind_kph;
      speed2.innerText = response.current.wind_kph;
      const iconUrl = response.current.condition.icon; // for image
      document.getElementById("weather-icon").src = `https:${iconUrl}`;
    })
    .catch((error) => console.error(error));
};
const search = document.querySelector(".search");
search.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key == "Enter") {
    getWeather(search.value);
    search.value = "";
  }
});
getWeather("Mumbai");

const getDubai = (city) => {
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      Dcountry.innerText = response.location.country;
      Dcloud.innerText = response.current.cloud;
      Dweather.innerText = response.current.condition.text;
      Dtemp.innerText = response.current.temp_c;
      Dheatindex.innerText = response.current.heatindex_c;
      Dpressure.innerText = response.current.pressure_mb;
      Dhumidity.innerText = response.current.humidity;
      Dfeels_like.innerText = response.current.feelslike_c;
      Dwindspeed.innerText = response.current.wind_kph;
      Dwindtemp.innerText = response.current.windchill_c;
      Dwindder.innerText = response.current.wind_dir;
    })
    .catch((error) => console.error(error));
};
getDubai("Dubai");

const getLondon = (city) => {
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      Lcountry.innerText = response.location.country;
      Lcloud.innerText = response.current.cloud;
      Lweather.innerText = response.current.condition.text;
      Ltemp.innerText = response.current.temp_c;
      Lheatindex.innerText = response.current.heatindex_c;
      Lpressure.innerText = response.current.pressure_mb;
      Lhumidity.innerText = response.current.humidity;
      Lfeels_like.innerText = response.current.feelslike_c;
      Lwindspeed.innerText = response.current.wind_kph;
      Lwindtemp.innerText = response.current.windchill_c;
      Lwindder.innerText = response.current.wind_dir;
    })
    .catch((error) => console.error(error));
};
getLondon("London");

const getUs = (city) => {
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Ncountry.innerText = response.location.country;
      Ncloud.innerText = response.current.cloud;
      Nweather.innerText = response.current.condition.text;
      Ntemp.innerText = response.current.temp_c;
      Nheatindex.innerText = response.current.heatindex_c;
      Npressure.innerText = response.current.pressure_mb;
      Nhumidity.innerText = response.current.humidity;
      Nfeels_like.innerText = response.current.feelslike_c;
      Nwindspeed.innerText = response.current.wind_kph;
      Nwindtemp.innerText = response.current.windchill_c;
      Nwindder.innerText = response.current.wind_dir;
    })
    .catch((error) => console.error(error));
};
getUs("New York");

const getMaxico = (city) => {
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Mcountry.innerText = response.location.country;
      Mcloud.innerText = response.current.cloud;
      Mweather.innerText = response.current.condition.text;
      Mtemp.innerText = response.current.temp_c;
      Mheatindex.innerText = response.current.heatindex_c;
      Mpressure.innerText = response.current.pressure_mb;
      Mhumidity.innerText = response.current.humidity;
      Mfeels_like.innerText = response.current.feelslike_c;
      Mwindspeed.innerText = response.current.wind_kph;
      Mwindtemp.innerText = response.current.windchill_c;
      Mwindder.innerText = response.current.wind_dir;
    })
    .catch((error) => console.error(error));
};
getMaxico("Maxico");

const getParis = (city) => {
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Pcountry.innerText = response.location.country;
      Pcloud.innerText = response.current.cloud;
      Pweather.innerText = response.current.condition.text;
      Ptemp.innerText = response.current.temp_c;
      Pheatindex.innerText = response.current.heatindex_c;
      Ppressure.innerText = response.current.pressure_mb;
      Phumidity.innerText = response.current.humidity;
      Pfeels_like.innerText = response.current.feelslike_c;
      Pwindspeed.innerText = response.current.wind_kph;
      Pwindtemp.innerText = response.current.windchill_c;
      Pwindder.innerText = response.current.wind_dir;
    })
    .catch((error) => console.error(error));
};
getParis("paris");
