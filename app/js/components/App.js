import React from 'react'
import { createStore } from 'redux'

const initialState = {
    result: 1,
    lastVal
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_REPOS':
            state = state + action.payload;
            break;
        case 'SAERCH':
            break;
    }
    return state;
}
const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log('store update', store.getState())
})

store.dispatch({
    type: "GET_REPOS",
    payload: 10 
})

const Languages = () => {
    let languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

    return (
        <div className='nav'>
            {languages.map((item,index) => {
                return (
                    <div className='item' key={index}>{item}</div>
                )
            })}
        </div>
    )
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Languages />
                repos
            </div>
        )
    }
}