import axios from 'axios'
import { call, put, takeLatest, all } from 'redux-saga/effects'
import { getReposSuccess, GET_REPOS_SUCCESS } from './actions'

// function getRepos(language) {
//     return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
//         .then((response) => {
//             console.log('res ', response)
//         })
//         .catch((err) => console.log(err))
// }

function* callGetRepos(action) {
    console.log(action)
    let language = action.payload

    try {
        const {data} = yield call(axios.get, 
            `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        console.log(data)
        yield put(getReposSuccess(data.items))
    } catch (err) {
        console.log('err ', err)
    }
}

export default function* root() {
    yield all ([
        takeLatest(GET_REPOS_SUCCESS, callGetRepos)
    ])
}