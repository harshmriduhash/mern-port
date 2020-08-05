import axios from 'axios';

export const fetchGeojson = (key) => {
    return axios.post('/api/adventures/index', key);
}