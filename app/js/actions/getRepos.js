import axios from 'axios'

export function getReposSuccess(reposes) {
    return {
        type: 'GET_REPOS_SUCCESS',
        payload: reposes
    }
}
export function fetchReposData(language) {
    return (dispatch) => {
        var ecnodeURI = window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:" 
       +language+"&sort=stars&order=desc&type=Repositories");

        return axios.get(ecnodeURI)
            .then((response) => {
                console.log(response)
                dispatch(getReposSuccess(response.data.items))
            })
    }
}