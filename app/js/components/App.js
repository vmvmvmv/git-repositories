import React from 'react'
import { connect } from 'react-redux'
import store from './store'
import reducer from '../reducers/repos'

import { fetchReposData } from '../actions/getRepos' 

const Languages = (props) => {
    let languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

    return (
        <div className='nav'>
            {languages.map((item,index) => {
                return (
                    <div 
                        className={props.choosenLang == item ? 'active' : null}
                        key={index} 
                        onClick={props.getRepos.bind(null, item)}

                    >
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

const RepoGrid = (props) => {
    return (
        <ul className="repos-list">
            {props.repos.map((repo, index) => {
                return (
                    <li key={index} className="item">
                        <div className="rank">#{index + 1}</div>
                        <ul className="space-list">
                            <li>
                                <img
                                    className="avatar"
                                    src={repo.owner.avatar_url}
                                    alt="avatar"
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li className="login">@{repo.owner.login}</li>
                            <li className="stars">stars: {repo.stargazers_count}</li>
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
        this.props.fetchPosts(this.props.state.choosenLanguage);
    }

    render() {
        return (
            <div>
                <Languages getRepos={this.props.fetchPosts} choosenLang={this.props.state.choosenLanguage} />
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
        fetchPosts: (language) => {
            dispatch(fetchReposData(language))
        } 
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)