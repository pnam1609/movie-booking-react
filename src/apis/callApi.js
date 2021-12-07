import axios from 'axios';
import * as Config from '../Constants/config';

export default function callApi(endpoint, method = 'GET', body, token = null) {
    return axios({
        method,
        url: `${Config.API_URL}/${endpoint}?maNhom=GP02`,
        data: body,
        headers : {
            Authorization: token
        }
    }).catch(err => {
        console.log(err);
    });
}