import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { navigatePush } from '../actions/navigationActions';
import NavButton from './NavButton'

export default class Events extends Component{
    render() {
	return(
	    <View>
	    <View>
	    <NavButton destLabel='' buttonHandler={this.props.createEventButton} />
	    </View>
	    <ScrollView>
	    <TouchableHighlight onPress={this.props.onButtonPress}>
	    <Text> Example ROW </Text>
	    </TouchableHighlight>
	    </ScrollView>
	    </View>
	);
    }
}


