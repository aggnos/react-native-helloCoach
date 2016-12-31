import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
	    category: ''
	};

    }

    render() {

        return (
		<View>
	        <TextInput/>
		<TouchableHighlight onPress={this.handleAddButton().bind(this)}>
		<Text> Add this event </Text>
		</TouchableHighlight>
		</View>
	);
    }
}




