import React, {Component} from 'react';
import {TextInput} from 'react-native'
export default class CustomTextInput extends Component {
    render(){
        const { input: { value, onChange } } = this.props;
        return (
	        <TextInput
	    onChangeText={(value) => onChange(value)}
	    value={value} {...this.props}
	        />
	)
    }
}
