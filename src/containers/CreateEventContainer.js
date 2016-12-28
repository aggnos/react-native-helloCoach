import React, { Component } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { chooseEventType } from '../actions/eventActions';
import CreateEvent from '../components/CreateEvent';

export default class CreateEventContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
		<View>

	        <ScrollView horizontal={false}>
	        <CreateEvent />
	        </ScrollView>
		</View>
	);
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         saveTodo: (text) => {
// 	    dispatch(chooseEventType(text));
// 	}
//     };
// };

// const NewTodoContainer = connect(
//     () => ({}),
//     mapDispatchToProps
// )(NewTodo);



