import React from 'react'
import { connect } from 'react-redux'

import { getReposSuccess } from '../main/actions'
import store from '../store'

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        getRepos: (language) => dispatch(getReposSuccess(language))
    }
}

const Languages = (props) => {
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
        this.props.getRepos('all')
    }

    render() {
        return (
            <div>
                <Languages />
                {
                    // { this.props.state.repos ? <RepoGrid repos={this.props.state.repos} /> : <div>Loading...</div>} 
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)