import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
	console.log("these are my props: ", props)

    }

    render() {
	const {increment, eventsState} = this.props; 
	
        return (
		<View>
	        <TextInput />
		<TouchableHighlight onPress={increment}>
		<Text> MEDELINA{eventsState.event}   </Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={() => console.log()}>
		<Text> SEC BUTTON </Text>
		</TouchableHighlight>
		</View>
	);
    }
}

