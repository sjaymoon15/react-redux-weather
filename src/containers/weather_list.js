import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from '../components/sparklines';

class WeatherList extends Component{
	renderWeather(cityData){
		// console.log(cityData);
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);		
		const humidity = cityData.list.map(weather => weather.main.humidity);
		
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Graph data={temps} color="orange" units="K"/></td>
				<td><Graph data={pressure} color="red" units="hPa"/></td>
				<td><Graph data={humidity} color="green" units="%"/></td>
			</tr>
		)
	}
	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa) </th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state){
	console.log('state.weather', state.weather);
	return {
		weather: state.weather
	}
}
// function mapStateToProps({ weather }){
// 	return { weather };
// }

export default connect(mapStateToProps)(WeatherList);