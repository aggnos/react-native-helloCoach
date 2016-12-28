import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
	    text: ''
	};
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(text) {
        this.setState({text});
    }

    render() {

        return (
		<View>
	        <TextInput
	    onChangeText={ this.handleTextChange }
	    value={ this.state.text || '' }
	        />
		</View>
	);
    }
}




