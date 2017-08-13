import axios from 'axios'
import store from '../components/store'

const reducer = (state = {
    choosenLanguage: 'all',
    repos: null,
    test: ''
}, action) => {
    switch(action.type) {
        case 'GET_REPOS_SUCCESS':
            state = {
                ...state,
                repos: action.payload.reposes,
                choosenLanguage: action.payload.language
            }
            break;
    }
    return state;
}


export default reducer;