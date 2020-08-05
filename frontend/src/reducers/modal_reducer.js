import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case OPEN_MODAL:
            nextState.modal = action.modal;
            nextState.route = action.route;
            return nextState
        case CLOSE_MODAL:
            return null;
        default:
            return nextState;
    }
};

export default modalReducer;