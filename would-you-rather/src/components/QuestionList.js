import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class QuestionList extends Component {

    state = {
        questionsListToggle: false
    }

    toggleQuestions = (e, answered) => {
        e.preventDefault()

        for (let element of document.getElementsByClassName("questionlistToggle")) {
            element.classList.remove("active")
        }
  
        e.target.classList.add("active")
        this.setState( () => ({
            questionsListToggle: answered
        }))
    }

    render() {
        return (
            <section className="questionListContainer">
                <nav>
                    <ul>
                        <li>
                            <a className="questionlistToggle active" href="/" onClick={(e) => {this.toggleQuestions(e, false)}}>
                                Unanswered
                            </a>
                        </li>
                        <li>
                            <a className="questionlistToggle" href="/" onClick={(e) => {this.toggleQuestions(e, true)}}>
                                Answered
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="questionList">
                    <ul>
                    { this.props.questions 
                        ? (
                            this.props.questionIDsSorted.map( (id) => {
                                if ( (id in this.props.authedUser.answers) === this.state.questionsListToggle) {
                                    return (
                                        <li key={id}>
                                            <Link to={`/questions/${id}`}>
                                                {this.props.questions[id].optionOne.text} or {this.props.questions[id].optionTwo.text} 
                                            </Link>
                                        </li>
                                    ) 
                                }
                        }))
                        : "loading..."
                    }
                    </ul>
                </div>
            </section>
        )
    }
}


function mapStateToProps ({ questions, authedUser, users }) {
    return {
        authedUser: users[authedUser],
        questions: Object.keys(questions).length > 0 ? questions: null,
        questionIDsSorted: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }

  export default connect(mapStateToProps)(QuestionList);
