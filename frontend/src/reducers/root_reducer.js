import { combineReducers } from 'redux';

import adventures from './adventure_reducer';
import location from './location_reducer';
import contacts from './contact_reducer'
import session from './session_reducer';
import errors from './errors_reducer';
import blogs from './blog_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    blogs,
    contacts,
    location,
    adventures,
    ui
});

export default RootReducer;