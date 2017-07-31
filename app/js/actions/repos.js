export function getRepos(language) {
    return {
        type: 'GET_REPOS',
        payload: language
    }
}