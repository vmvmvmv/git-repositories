import { createReducer } from './utils'
import { GET_REPOS_SUCCESS } from './actions'

const DEFAULT_STATE = {
    choosenLang: 'all',
    repos: null
}

const setRepos = (state, action) => {
    return {
        ...state,
        repos: action.payload
    }
}

export default createReducer(DEFAULT_STATE, {
    [GET_REPOS_SUCCESS]: setRepos
})