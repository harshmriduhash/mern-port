import { RECEIVE_BLOGS, RECEIVE_NEW_BLOG } from '../actions/blog_actions';

const BlogsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let data;
    switch(action.type) {
        case RECEIVE_NEW_BLOG:
            data = action.data.data
            nextState[state.length] = data;
            return nextState;
        case RECEIVE_BLOGS:
            data = action.data.data
            for(let i = 0; i < data.length; i++) {
                nextState[i] = data[i]
            }
            return nextState;
        default:
            return nextState;
    };
};

export default BlogsReducer;