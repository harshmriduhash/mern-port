import * as APIUTIL from '../util/location_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_ERRORS = 'RECEIVE_LOCATION_ERRORS';

const receiveLocations = data => {
    return {
        type: RECEIVE_LOCATIONS,
        data
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_LOCATION_ERRORS,
        errors
    };
};

export const fetchLocations = () => dispatch => {
    return APIUTIL.getLocations()
        .then(locations => dispatch(receiveLocations(locations)))
        .catch(err => dispatch(receiveErrors(err)));
};