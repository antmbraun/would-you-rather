import React, { Component } from 'react';
import { connect } from 'react-redux'


class Leaderboard extends Component {
    
    render() {
        const users = this.props.users
        const userIdsSorted = this.props.userIdsSorted

        return (
            <div className="leaderboardContainer">
                {userIdsSorted.map( (id) => (
                    <div key={id} className="userProfile">
                        <img src={users[id].avatarURL}  alt="" className="avatar"/>
                        <div className="userDetails">
                            <div className="userName">{users[id].name}</div>
                            <div className="">Asked {Object.keys(users[id].questions).length} questions</div>
                            <div className="">Answered {Object.keys(users[id].answers).length} questions</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users,
        userIdsSorted: Object.keys(users)
            .sort((a,b) => (
                (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length)
                 - (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)  
            ))
    }
}

export default connect(mapStateToProps)(Leaderboard)