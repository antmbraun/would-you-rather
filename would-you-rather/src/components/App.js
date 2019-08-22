import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import Homepage from './HomePage'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'
import AddNewQuestion from './AddNewQuestion'

import { handleInitialData } from '../actions/shared.js'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          {this.props.authedUser
            ? <div>
                <Nav />
                <Route path='/' exact component={Homepage} />
                <Route path='/questions/:id' exact component={QuestionDetails} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route path='/add' component={AddNewQuestion} />
              </div>
            : <Login />
          }
        </Fragment>
      </Router>
      )
    }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}
 

export default connect(mapStateToProps)(App);
