import axios from 'axios';
import constants from '../utils/constants';

export default {

    get(url, params, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        });
    },
    post(url, data, success, failure) {
        return this.request({
            method: 'post',
            url,
            data,
            success,
            failure,
        });
    },
    put(url, data, success, failure) {
        return this.request({
            method: 'put',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        return this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },
};