import { RECEIVE_LOCATION_ERRORS } from '../actions/location_actions';

const LocationErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LOCATION_ERRORS:
            return action.errors;
        default:
            return state;
    };
};

export default LocationErrorsReducer;