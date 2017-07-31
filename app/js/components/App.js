import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'
import reducer from '../reducers/repos'

   


const Languages = (props) => {
    let languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];
    store.dispatch({
        type: 'TEST',
        payload: 'aaaa'
    }) 
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

    getRepos(language) {
        store.dispatch({
            type: "GET_REPOS",
            payload: language 
        })
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