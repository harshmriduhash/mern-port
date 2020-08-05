import { combineReducers } from 'redux';

import LocationErrorsReducer from './location_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import BlogErrorsReducer from './blog_errors_reducer';

export default combineReducers({
    location: LocationErrorsReducer,
    session: SessionErrorsReducer,
    blog: BlogErrorsReducer
});