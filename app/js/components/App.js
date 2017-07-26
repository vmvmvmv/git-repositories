import React from 'react'
import store from './store'
import reducer from './reducer'



const Languages = (props) => {
    let languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

    return (
        <div className='nav'>
            {languages.map((item,index) => {
                return (
                    <div className='item' key={index} onClick={props.getRepos.bind(null, item)}>{item}</div>
                )
            })}
        </div>
    )
}

export default class App extends React.Component {
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