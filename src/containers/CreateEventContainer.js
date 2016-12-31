import React, { Component } from 'react';
// import {
//     View,
//     ScrollView,
// } from 'react-native';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import CreateEvent from '../components/CreateEvent';

// export default class CreateEventContainer extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
// 		<View>

// 	        <ScrollView horizontal={false}>
// 	        <CreateEvent />
// 	        </ScrollView>
// 		</View>
// 	);
//     }
// }

// function  mapStateToProps(state) {
//     return {
// 	text: state.text
//     };
// }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleTextChange: (text) => {
// 	    dispatch(chooseEventType(text));
// 	    console.log(text)
// 	}
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CreateEvent);



export default connect(
    (state) => ({
	category: state.category
    }),
    (dispatch) => ({
	handleAddButtonAction: (ctg) => {
	    dispatch(addEvent(ctg));
	}
    })
)(CreateEvent);
