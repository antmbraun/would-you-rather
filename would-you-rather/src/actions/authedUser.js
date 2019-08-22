export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// for user logout, send no argument?
export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

// export function handleSetAuthedUser (id) {
//     return (dispatch) => {
//         dispatch(setAuthedUser(id)
//     }
// }