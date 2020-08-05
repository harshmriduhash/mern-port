import * as APIUTIL from '../util/adventures_util';

export const RECEIVE_GEO_JSON = 'RECEIVE_GEO_JSON';
export const RECEIVE_GEO_JSON_ERRORS = 'RECEIVE_GEO_JSON_ERRORS';

const receiveGeojson = data => {
    return {
        type: RECEIVE_GEO_JSON,
        data
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_GEO_JSON_ERRORS,
        errors
    };
};

export const fetchGeojson = (key) => dispatch => {
    return APIUTIL.fetchGeojson(key)
        .then(files => dispatch(receiveGeojson(files)))
        .catch(err => dispatch(receiveErrors(err)))
};