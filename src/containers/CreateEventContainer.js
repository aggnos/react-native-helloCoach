import React, {PropTypes, Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as eventActions from '../actions/eventActions';
import CreateEvent from '../components/CreateEvent';


class CreateEventContainer extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	let { eventsState, actions} = this.props
	return (
		<CreateEvent eventsState={eventsState}
	    {...actions} />
	);
    }
}

export default connect(
    state => ({
	eventsState: state.eventsState
    }),
    (dispatch) => ({
	actions: bindActionCreators(eventActions, dispatch)
    })
)(CreateEventContainer);



