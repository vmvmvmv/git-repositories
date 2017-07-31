import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './components/store'
import '../styles/index.scss'

ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
);