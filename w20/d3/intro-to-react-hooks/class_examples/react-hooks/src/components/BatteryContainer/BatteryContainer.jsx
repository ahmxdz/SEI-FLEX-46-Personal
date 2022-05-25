import React, {Component} from "react";
import Battery from "../Battery/Battery";
import {register, unregister} from '../../utils/battery';

class BatteryContainer extends Component {
	state = {
		level: 0,
		charging: false
	};

	updateBattery = ({level, charging}) => {
		this.setState({level, charging});
	}

	componentDidMount() {
    	register(this.updateBattery);
	}
  
	componentWillUnmount() {
    	unregister(this.updateBattery);
	}

	render() {
		return <>
			<Battery level={this.state.level} charging={this.state.charging} />
			<button onClick={() => this.setState({level: this.state.level + 0.01})}>Add to level</button>
		</>;
	}
}

export default BatteryContainer;
