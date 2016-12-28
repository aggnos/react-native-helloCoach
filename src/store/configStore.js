import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configStore(initialState) {
    const store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
    return store;
}




