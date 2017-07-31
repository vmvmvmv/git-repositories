import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'
import reducer from '../reducers/repos'

import { getRepos } from '../actions/repos'
import { test } from '../actions/test'
 
   


const Languages = (props) => {
    let languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

    return (
        <Provider store={store}>
            <div className='nav'>
                {languages.map((item,index) => {
                    return (
                        <div className='item' key={index} onClick={props.getRepos.bind(null, item)}>{item}</div>
                    )
                })}
            </div>
        </Provider>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.getRepos = this.getRepos.bind(this);
    }

    componentDidMount() {
        store.dispatch(test('some data')) 
    }

    getRepos(language) {
        store.dispatch(getRepos(language))
    }

    render() {
        return (
            <div>
                <Languages getRepos={this.getRepos} />
                repos
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        test: (value) => {
            dispatch({
                type: 'TEST',
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)