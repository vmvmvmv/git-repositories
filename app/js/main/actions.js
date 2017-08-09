export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST'
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'
export const GET_REPOS_FAIL = 'GET_REPOS_FAIL'

export const getReposRequest = (language) => {
    return {
        type: GET_REPOS_REQUEST,
        payload: language
    }
}

export const getReposSuccess = (reposes) => {
    return {
        type: GET_REPOS_SUCCESS,
        payload: reposes
    }
}

export const getReposFail = (error) => {
    return {
        type: GET_REPOS_FAIL,
        payload: error
    }
}