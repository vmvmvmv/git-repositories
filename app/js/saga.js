import { fork } from 'redux-saga/effects'
import mainSaga from './main/saga'

export default function* main() {
    yield fork(mainSaga)
}