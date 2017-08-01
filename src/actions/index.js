import _ from 'lodash';
import axios from 'axios';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

const ROOT_URL = '';

const AccountsStatic = {
    accounts: [
        {
            "type": "Assets",
            "number": 101,
            "name": "Cash"
        },
        {
            "type": "Liabilities",
            "number": 201,
            "name": "Credit Cards"
        }
    ]     //axios.get
};


/*ACCOUNTS*/
export function fetchAccounts() {
    const request = AccountsStatic;

    return {
        type: FETCH_ACCOUNTS,
        payload: request
    };
}

export function createAccount(values) {
    const request = values;

    return {
        type: CREATE_ACCOUNT,
        payload: request
    };

}

export function removeAccount(number) {
    const accountNumber = number;

    return {
        type: DELETE_ACCOUNT,
        payload: accountNumber
    }
}

/*JOURNAL*/
