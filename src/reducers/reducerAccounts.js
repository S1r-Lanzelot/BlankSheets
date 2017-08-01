import _ from 'lodash';
import { FETCH_ACCOUNTS, CREATE_ACCOUNT, DELETE_ACCOUNT } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ACCOUNTS:
            return _.mapKeys(action.payload.accounts, 'number');
        case CREATE_ACCOUNT:
            return { ...state, [action.payload.number]: action.payload };
        case DELETE_ACCOUNT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}