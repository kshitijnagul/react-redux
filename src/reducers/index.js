import { SIGN_UP } from '../constants';
import { ADD_STRING } from '../constants';

const submitData = (state = {}, action) => {
    const result = { signUpData: {}, home: '' }
    switch (action.type) {
        case SIGN_UP:
            //const signUpData = Object.assign(result, { signUpData: action.payload });
            const signUpData = { ...result, signUpData: action.payload }
            console.log('reducer', signUpData);
            return signUpData;
        case ADD_STRING:
            //const addNewString = Object.assign({}, state, { home: action.payload });
            const addNewString = { ...state, home: action.payload }
            console.log('reducer', addNewString);
            return addNewString;
        default:
            return state;
    }
}

export default submitData;