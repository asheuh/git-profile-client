import axios from 'axios';
import * as t from '../constants';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetch_success = (data) => ({
    type: t.FETCH_SUCCESS,
    data
});

export const fetch_failure = (error) => ({
    type: t.FETCH_FAILURE,
    error
});

export const fetch_request = () => ({
    type: t.FETCH_REQUEST,
});


const fetch_actions = (orgs) => dispatch => {
    dispatch(fetch_request());
    const url = `${baseUrl}/repos/${orgs}`

    return axios(url)
        .then(response => dispatch(fetch_success(response.data)))
        .catch(error => dispatch(fetch_failure(error)))
}

export default fetch_actions;
