import axios from 'axios'

export function getReposSuccess(result) {
    return {
        type: 'GET_REPOS_SUCCESS',
        payload: result
    }
}
export function fetchReposData(language) {
    let result = {};
    result.language = language;
    return (dispatch) => {
        var ecnodeURI = window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:" 
                        + language + "&sort=stars&order=desc&type=Repositories");

        return axios.get(ecnodeURI)
            .then((response) => {
                result.reposes = response.data.items;
                dispatch(getReposSuccess(result))
            })
    }
}