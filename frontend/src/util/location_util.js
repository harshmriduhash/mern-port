import axios from 'axios';

// The bool is to determine whether or not yo want to utilize the parse decimal places
// function, the n is to determins how may decimal places you want to preserve
export const parseLocation = (str, bool) => {
    const coords = str.location.split(',');
    let lat;
    let long;
    if (bool) {
        lat = parseFloat(parseDecimalPlaces(coords[0]));
        long = parseFloat(parseDecimalPlaces(coords[1]));
    } else {
        lat = parseFloat(coords[0]);
        long = parseFloat(coords[1]);
    }

    return [lat, long];
};

const parseDecimalPlaces = (str) => {
    const coord = str.split('.');

    let res;
    if(coord[1].length > 5) {
        res = coord[1].slice(0, 5);
    }
    return coord[0] + '.' + res;
}

export const getLocations = () => {
    return axios.get('/api/locations')
};