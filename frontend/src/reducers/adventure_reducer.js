import { RECEIVE_GEO_JSON } from '../actions/adventures_actions';

const AdventuresReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    let data;
    switch(action.type) {
        case RECEIVE_GEO_JSON:
            data = action.data.data;
            nextState.geojson = data;
            return nextState;
        default:
            return nextState;
    };
}

export default AdventuresReducer;