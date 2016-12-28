import React, {PropTypes, Component} from 'react';
import {NavigationExperimental, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import EventsContainer from './EventsContainer';
import DetailsContainer from './DetailsContainer';
import CreateEventContainer from './CreateEventContainer';

import { navigatePop } from '../actions/navigationActions';

const {
    CardStack: NavigationCardStack,
    Card: NavigationCard,
    Header: NavigationHeader
} = NavigationExperimental


class AppContainer extends Component {
    render() {
	let { navigationState, backAction } = this.props

	return (

		<NavigationCardStack
	    navigationState={navigationState}
	    onNavigateBack={backAction}
	    style={styles.container}
	    renderHeader={props => (
		    <NavigationHeader
		{...props}
		onNavigateBack={backAction}
		renderTitleComponent={props => {
		    const title = props.scene.route.title
		    return <NavigationHeader.Title>{title}</NavigationHeader.Title>
		}}
		    />
	    )}
	    renderScene={this._renderScene}
		/>
	)
    }

    _renderScene({scene}) {
	const { route } = scene

	switch(route.key) {
	case 'EventsContainer':
	    return <EventsContainer />;
	case 'DetailsContainer':
	    return <DetailsContainer />;
	case 'CreateEventContainer':
	    return <CreateEventContainer />;
	}
    }
}

AppContainer.propTypes = {
    navigationState: PropTypes.object,
    backAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
	flex: 1
    }
})

export default connect(
    state => ({
	navigationState: state.navigationState
    }),
    dispatch => ({
	backAction: () => {
	    dispatch(navigatePop())
	}
    })
)(AppContainer)
