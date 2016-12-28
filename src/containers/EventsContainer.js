import { connect } from 'react-redux';

import Events from '../components/Events';
import { navigatePush } from '../actions/navigationActions';


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onButtonPress: () => {
	    dispatch( navigatePush('DetailsContainer') )
	},
	createEventButton: () => {
	    dispatch ( navigatePush('CreateEventContainer') )
	}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)
