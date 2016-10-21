import axios from 'axios';

const API_KEY = '6e4c80df2c0b82d8bc138d3daa28f2f5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log('request', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}