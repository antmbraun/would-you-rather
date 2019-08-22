import React, { Component } from 'react';
import { connect } from 'react-redux'

import QuestionList from './QuestionList'



class HomePage extends Component {

    render() {

        return (
            <div>
                <QuestionList />
            </div>
        )
    }
}


export default connect()(HomePage)