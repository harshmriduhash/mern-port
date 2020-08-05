import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import data from '../../util/map_trails_data';

const MapModal = (props) => {
    const { route } = props;
    const trail = data.routes[route];
    const images = trail.pictures

    return (
        <div className='map-modal-container'>
            <h1 className='map-modal-title'>
                {trail.name}
            </h1>
            <Carousel
                centered
                infinite
                arrows
                slidesPerPage={2}
            >
                {
                    images.map((link) => <img className='carousel-image' src={link} alt=""/>)
                    
                }
            </Carousel>
            <div className='facts-container-modal'>
                <div className='modal-miles'>
                    <span id='modal-span'>Total Miles:</span> { trail.miles }
                </div>
                <div className='modal-states'>
                    <span id='modal-span'>States:</span> { trail.states.join(', ') }
                </div>
            </div>
            <div className='details-modal'>
                <p>
                    {trail.details}
                </p>
            </div>
        </div>
    )
}

export default MapModal;