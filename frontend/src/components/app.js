import React from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import MainContainer from './main/main_page_container';
import NavbarContainer from './navbar/navbar_container';
import MapContainer from './location/map_container';
import ContactContainer from './contact/contact_container';
import LoginFormContainer from './session/login_form_container';
import BlogContainer from './blog/blog_container';
import Modal from './modal/modal';

if (window.location.hostname !== 'localhost') {
    ReactGA.initialize('UA-162754702-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
    <div className='app-container'>
        <Modal />
        <Route path='/' component={NavbarContainer}/>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/location' component={MapContainer}/>
        <Route exact path='/blog' component={BlogContainer}/>
        <Route exact path='/contact' component={ContactContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
);

export default App;