import { RECEIVE_LOCATIONS } from '../actions/location_actions';

import { parseLocation } from '../util/location_util';

const locationReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            let data = action.data.data;
            nextState['current'] = parseLocation(Object.values(data)[0]); 
            return nextState;
        default: 
            return nextState;
    };
};

export default locationReducer;
