import React from 'react'
import { connect } from 'react-redux'
import store from './store'
import reducer from '../reducers/repos'

import { fetchReposData } from '../actions/getRepos'
import { test } from '../actions/test'
 

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

const RepoGrid = (props) => {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
                return (
                    <li key={index} className="popular-item">
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                    className="avatar"
                                    src={repo.owner.avatar_url}
                                    alt="avatar"
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count}</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.test('datatata')
        // console.log(this.props.state)
        this.props.fetchPosts(this.props.state.choosenLanguage);
    }

    render() {
        return (
            <div>
                <Languages getRepos={this.props.fetchPosts} />
                { this.props.state.repos ? <RepoGrid repos={this.props.state.repos} /> : <div>Loading...</div>}
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
        },
        fetchPosts: (language) => {
            dispatch(fetchReposData(language))
        } 
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)