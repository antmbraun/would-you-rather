import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Nav extends Component {

    logOut = () => {
        this.props.dispatch(
            setAuthedUser(null)
        )
    }

    render() {
        return (
            <div className="header">
                <div>
                    <h1>Would you rather?</h1>
                    <nav className='nav'>
                    <ul>
                        <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/add' activeClassName='active'>
                            Add
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                        </li>
                    </ul>
                    </nav>
                </div>
                <div>
                    Welcome, {this.props.authedUserName} (<a onClick={this.logOut} href="/">log out</a>)
                </div>
            </div>
            )
    }
}

export default connect((state) => ({
    authedUserName: state.users[state.authedUser].name
  }))(Nav)