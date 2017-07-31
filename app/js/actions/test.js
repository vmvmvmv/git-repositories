export function test(value) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'TEST',
                payload: value
            })
        }, 2000)
    }
}