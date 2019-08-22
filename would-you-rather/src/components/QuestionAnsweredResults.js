import React, { Component, Fragment } from 'react';

class QuestionAnsweredResults extends Component {

    render() {
        const question = this.props.question
        const countOptionOne = question.optionOne.votes.length
        const countOptionTwo = question.optionTwo.votes.length
        const total = countOptionOne + countOptionTwo
        const percentageOptionOne = countOptionOne / total * 100
        const percentageOptionTwo = countOptionTwo / total * 100

        console.log(this.props.answer)
        return (
            <Fragment>
                <div className={this.props.answer === "optionOne" ? "chosen choice" : "choice"}>
                    {question.optionOne.text} - {percentageOptionOne}% ({countOptionOne} vote)
                    {this.props.answer === "optionOne" ? <strong> &#x2190; You chose</strong> : ""}
                </div>
                <div className={this.props.answer === "optionTwo" ? "chosen choice" : "choice"}>
                    {question.optionTwo.text} - {percentageOptionTwo}% ({countOptionTwo} vote)
                    {this.props.answer === "optionTwo" ? <strong> &#x2190; You chose</strong> : ""}
                </div> 

            </Fragment>
        )
    }
}


export default QuestionAnsweredResults;