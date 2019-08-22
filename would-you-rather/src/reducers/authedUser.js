import { SET_AUTHED_USER } from '../actions/authedUser'
// import { GET_AUTHED_USER } from '../actions/authedUser'


export default function authedUser (state = null, action) {
  switch (action.type) {
    // case GET_AUTHED_USER :
    //   return action.id ? action.id : null
    case SET_AUTHED_USER :
      return action.id ? action.id : null
    default:
      return state
  }
}