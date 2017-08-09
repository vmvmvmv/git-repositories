import axios from 'axios'

import { call, put, takeLatest, all } from 'redux-saga/effects'
import { 
    GET_REPOS_REQUEST,
    getReposRequest, 
    getReposSuccess,
    getReposFail
} from './actions'


function* getRepos(action) {
    try {
        let language = action.payload;
        const {data} = yield call(axios.get, 
            `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        data.language = language
        yield put(getReposSuccess(data))
    } catch (err) {
        yield put(getReposFail)
    }
}

export default function* main() {
    yield takeLatest(GET_REPOS_REQUEST, getRepos)
}