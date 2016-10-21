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
				<td><Graph temps={temps} color="orange" /></td>
				<td><Graph temps={pressure} color="red" /></td>
				<td><Graph temps={humidity} color="green" /></td>
			</tr>
		)
	}
	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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