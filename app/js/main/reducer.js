import { createReducer } from './utils'
import {
    GET_REPOS_REQUEST, 
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL 
} from './actions'

const DEFAULT_STATE = {
    choosenLang: 'all',
    repos: null,
    loading: false
}

const setRepos = (state, action) => {
    console.log(action)
    return {
        ...state,
        repos: action.payload.items,
        choosenLang: action.payload.language,
        loading: false
    }
}

const setLoading = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
        loading: false
    }
}

export default createReducer(DEFAULT_STATE, {
    [GET_REPOS_REQUEST]: setLoading,
    [GET_REPOS_SUCCESS]: setRepos,
    [GET_REPOS_FAIL]: setError
})