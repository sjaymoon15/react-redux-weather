import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class Graph extends Component {
	render(){
		return (
			<div>
				<Sparklines svgHeight={120} svgWidth={180} data={this.props.temps}>
					<SparklinesLine color={this.props.color} />
				</Sparklines>
			</div>
		);
	}
}