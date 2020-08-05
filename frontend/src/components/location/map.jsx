import React, { useState, useEffect, useReducer, useRef } from 'react';
import ReactGA from 'react-ga';
import mapboxgl from 'mapbox-gl';
import '../../styles/map.scss';

import { createPulsingDot } from './util/pulsing_dot';
import { mapBoxPublicKey, trailsAuth } from '../../config/keys_front.js';
import { parseLocation } from '../../util/location_util';
import details from '../../util/trail_descriptions'

const Map = (props) => {
    // Destructure props
    const { 
        fetchLocations, 
        fetchGeojson, 
        adventures,
        openModal
    } = props;
    // Define our reference for the map
    const mapContainer = useRef(null);
    // Define our reference for the console details
    const consoleDetailRef = useRef('');
    // Define a reference for the flyto my location button
    const consoleFlytoLocation = useRef();

    const [mapOptions, setMapOptions] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            lng: -122.44,
            lat: 37.76,
            zoom: 4,
        }
    );
    // Set the loader details to be printed on the map
    const [loaderDetails, setLoaderDetails] = useState('Rendering the map...')

    const [map, setMap] = useState('');
    const [loader, setLoader] = useState(true);
    const [errors, setErrors] = useState({});

    const handleMap = (res) => {
        mapboxgl.accessToken = mapBoxPublicKey;

        // Use default Map options if the res of the promise comes back undefined
        let data;
        if (res.data === undefined) {
            data = {
                data: {
                    location: mapOptions.lat.toString() + ',' + mapOptions.lng.toString()
                }
            }
        } else {
            data = res.data.data
        }

        // Parse the locations so that we have the right format for lng lat
        const coords = parseLocation(Object.values(data)[0], false);

        const initializeMap = ({ setMap, mapContainer }) => {
            
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: ['-100.7129', '37.0902'],
                zoom: mapOptions.zoom
            });


            // This conditional is here so that if the data is in state then
            // the map will render faster
            if(Object.keys(adventures).length !== 0) {
                setTimeout(() => {
                    setLoader(false)
                }, 2000)
            } else {
                // The logic behind this is that when the map initially loads it will 
                // continue to show false until it needs to render other features to which it will
                // start showing tru again. so we what for it to hit false then
                // set the value to 0 then wait for it to hit true again,
                // then we know it is fully rendered
                // This creates the loader for the map
                // const interval = () => {
                let counter = 2;
                const interval = setInterval(() => {
                    let bool = map.loaded();
    
                    if (bool) counter += 1;
                    // This below is an edge case to make sure if the first value is false to not let it 
                    // get rid of the loader
                    if(counter !== 2 && !bool) {
                        if (!bool) counter = 0;
                    }
                    // This is for setting state
                    if (counter === 4) setLoaderDetails('Rendering the trails...');
                    if (counter === 1 || counter === 8) setLoader(false);
    
                    if (counter === 1 || counter === 8) clearInterval(interval);
                }, 1500)
            }
            // }
            // interval();

            // Save the map to state;
            setMap(map);

            // We are writing the data into a function to handle any potential errors
            // and too keep our code DRY because we use this in multiple places in
            // order to configure the map in realtime. 
            let updatedLatLng = (coords) => {
                let long;
                let lat;
                if (coords === undefined) {
                    long = mapOptions.lng;
                    lat = mapOptions.lat;
                } else {
                    long = coords[1];
                    lat = coords[0];
                }
                return {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [long, lat]
                            }
                        }
                    ]
                }
            }

            // This is data to help me set up ids, and naming in the console,
            // I could also put this data in a different file, and import it
            const routes = ['CDTroute', 'PCTroute', 'CCTroute',];
            const trailNames = {
                'PCTroute': 'Pacific Crest Trail',
                'CDTroute': 'Continental Divide Trail',
                'CCTroute': 'California Coastal Trail'
            };
            // Function in order to take the geojson data and visualize it on
            // the map
            const setSourceOfRoutes = (data) => {
                
                if(routes.length !== data.length) return;

                for (let i = 0; i < routes.length; i++) {
                    map.addSource(routes[i], {
                        'type': 'geojson',
                        'data': data[i]
                    });

                    map.addLayer({
                        'id': routes[i],
                        'type': 'line',
                        'source': routes[i],
                        'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        'paint': {
                            'line-color': '#555',
                            'line-width': 5
                        }
                    });
                }
            }

            map.on('load', () => {
                map.addImage('pulsing-dot', createPulsingDot(map), { pixelRatio: 3 });

                map.addSource('points', {
                    'type': 'geojson',
                    'data': updatedLatLng(coords)
                });

                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'pulsing-dot'
                    }
                });

                // This is so that we dont make unnecessary calls to the backened
                // because the file size is 20MB if the geojson files are cached in
                // global state, then we dont have to make the API call.
                if(Object.keys(adventures).length === 0) {
                    fetchGeojson({trailsAuth})
                        .then(res => setSourceOfRoutes(res.data.data))
                        .catch(err => setErrors({ geojson: 'Could not retrieve trail data' }))
                } else {
                    setSourceOfRoutes(adventures.geojson);
                }
            });

            for(let i = 0; i < routes.length; i++) {
                map.on('mouseover', routes[i], (e) => {
                    const trail = map.queryRenderedFeatures(e.point);
                    const id = trail[0].layer.id;
                    const tName = trailNames[id];

                    if (trail.length > 0) {
                        consoleDetailRef.current.innerHTML = `This is the ${tName}. ${details[routes[i]]}`;
                    }
                    map.setPaintProperty(routes[i], 'line-color', '#41b6c4' )
                });
            }

            for (let i = 0; i < routes.length; i++) {
                map.on('mouseleave', routes[i], (e) => {
                    consoleDetailRef.current.innerHTML = 'Hover over any trail for a quick description, or click on one to find out more about it';
                    map.setPaintProperty(routes[i], 'line-color', '#555')
                });
            }

            for (let i = 0; i < routes.length; i++) {
                map.on('click', routes[i], (e) => {
                    openModal('map-modal', routes[i]);
                })
            }

            // WHen the Where Tarik? button is clicked fly to my location
            consoleFlytoLocation.current.addEventListener('click', () => {
                map.flyTo({
                    center: [
                        coords[1],
                        coords[0], 
                    ],
                    zoom: 9,
                    essenial: true,
                })
            })
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }

    useEffect(() => {

        fetchLocations()
            .then((res) => {
                handleMap(res);
            })
            .catch((err) => handleMap(err));

        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/location');
        }
    }, [map]);

    return (
        <div>
            <div ref={el => mapContainer.current = el} className='map-container' />
            {
                loader ?
                    (
                        <div className='loader-container'>
                            <div className='lds-dual-ring'></div>
                            <div className='loader-details'>
                                {loaderDetails}
                            </div>
                        </div>
                    ) : (
                        null
                    )
            }
            <button className='button-console' ref={consoleFlytoLocation}>
                Wheres Harsh?
            </button>
            <div className='console'>
                <h1>My Adventures</h1>
                <p>Over the past couple years, I have done a lot of adventures by foot. Use the interactive map to learn a little more about them.</p>
                <br/>
                {/* <h5>Hover over a trail, or click on it to find out more</h5> */}
                <p ref={consoleDetailRef}>Hover over an trail for a quick description, or click on one to find out more about it</p>
            </div>
        </div>
    )
}

export default Map;
