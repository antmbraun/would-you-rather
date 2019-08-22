import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {

    signIn = (e) => {
            this.props.dispatch(
                setAuthedUser(e.target.value)
            )
    }

    render() {

        const users = this.props.users
        return (
                <div>
                {users ?  
                   ( <div className="login">
                       <h1>Would you rather?</h1>
                       <form>
                           <legend>Please sign in</legend>
                           <select onChange={this.signIn}>
                               <option hidden value="default">Select an option</option>
                               {Object.keys(users).map( (key) => {
                                 return (
                                     <option key={users[key].id} value={users[key].id}>{users[key].name}</option>
                                 )   
                               })}
                           </select>
                       </form>
                       </div>)
                    
                    : "loading..."}
                </div>

            
        )
    }
}

             


function mapStateToProps ({ users }) {
    return {
      users
    }
  }

  export default connect(mapStateToProps)(Login);
