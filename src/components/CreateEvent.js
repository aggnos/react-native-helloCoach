import React, { Component } from 'react';
import {
    Picker,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
	const {increment, eventsState, eventPickerAction, selectedValue} = this.props; 
	//     <Picker
	// selectedValue={this.state.language}
	// onValueChange={(lang) => this.setState({language: lang})}>
	//     <Picker.Item label="Java" value="java" />
	//     <Picker.Item label="JavaScript" value="js" />
	//     </Picker>
        return (
		<View>
	        <Picker
	    selectedValue={eventsState.category}
	    onValueChange={(selectedValue) => eventPickerAction(selectedValue)}
		>
		<Picker.Item label="Game" value="game" />
		<Picker.Item label="Training" value="training" />
		<Picker.Item label="Meeting" value="meeting" />
		</Picker>

		<TouchableHighlight onPress={increment}>
		<Text> MEDELINA{eventsState.category}   </Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={() => console.log(eventsState.category)}>
		<Text> SEC BUTTON </Text>
		</TouchableHighlight>
		</View>
	);
    }
}

