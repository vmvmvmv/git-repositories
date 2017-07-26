import axios from 'axios'

const reducer = (state = {
    choosenLanguage: 'all',
    repos: {}
}, action) => {
    switch(action.type) {
        case 'GET_REPOS':
            axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${action.payload}&sort=stars&order=desc&type=Repositories`)
                .then((response) => {
                    console.log(response)
                    return response;
                })
            state = {
                ...state,
                repos: response,
            };
           
            break;
    }
    return state;
}

export default reducer;