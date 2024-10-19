const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '093f0d47bbmshf51c587d4669e30p1f64d7jsne93d8410cc2b',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const getWeather= async()=>{
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getWeather()




// // Function to change background image based on weather condition
// function changeBackgroundImage(weather) {
//   const body = document.body;
//   const weatherText = document.getElementById('WCondition');
//   console.log(weatherText)

//   switch (weather) {
//       case 'Clear':
//           body.style.backgroundImage = "url('clear.jpg')";
//           weatherText.textContent = 'Weather Condition: Clear Sky';
//           break;
//       case 'Clouds':
//           body.style.backgroundImage = "url('clouds.jpg')";
//           weatherText.textContent = 'Weather Condition: Cloudy';
//           break;
//       case 'Rain':
//           body.style.backgroundImage = "url('rain.jpg')";
//           weatherText.textContent = 'Weather Condition: Rainy';
//           break;
//       case 'Snow':
//           body.style.backgroundImage = "url('snow.jpg')";
//           weatherText.textContent = 'Weather Condition: snow';
//           break;
//       case 'Thunderstorm':
//           body.style.backgroundImage = "url('thunderstorm.jpg')";
//           weatherText.textContent = 'Weather Condition: Thunderstorm';
//           break;
//       default:
//           body.style.backgroundImage = "url('clouds.jpg')";
//           weatherText.textContent = `Weather Condition: ${weather}`;
//           break;
//   }
// }

// // // Call the function when page loads
// // function fetchWeather() {

// //   const city = 'London';
// //   // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// //   fetch(url + city, options).then(response => response.json())
// //     .then(data => {
// //         const weatherCondition = data.weather[0].main; // Get main weather condition
// //         changeBackgroundImage(weatherCondition);
// //     })
// //     .catch(error => console.error('Error fetching weather:', error));
// // }
// // fetchWeather();

