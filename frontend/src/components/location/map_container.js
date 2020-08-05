import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchLocations } from '../../actions/location_actions';
import { fetchGeojson } from '../../actions/adventures_actions';
import Map from './map';

const msp = state => {
    const { errors, location, adventures } = state;
    return {
        errors,
        location,
        adventures
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, route) => dispatch(openModal(modal, route)),
        fetchGeojson: (key) => dispatch(fetchGeojson(key)),
        fetchLocations: () => dispatch(fetchLocations())
    };
};

export default connect(
    msp,
    mdtp
)(Map);