import { SIGN_UP } from '../constants';
import { ADD_STRING } from '../constants';

export const signUpSubmit = (data) => {
    console.log('action', data);
    return {
        type: SIGN_UP,
        payload: data
    }
}

export const addNewString = (data) => {
    return {
        type: ADD_STRING,
        payload: data
    }
}