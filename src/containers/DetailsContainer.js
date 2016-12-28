import { connect } from 'react-redux';

import Details from '../components/Details';
import { navigatePush } from '../actions/navigationActions';


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onButtonPress: () => {
	    dispatch(navigatePush('EventsContainer'))
	}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)
