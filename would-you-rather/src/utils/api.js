import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))

}

export function saveQuestion(question) {
    return _saveQuestion(question)
        .catch(() => {
            alert('An error occurred. Try again.')
        })
}

export function answerQuestion(answeredQuestion) {
    return _saveQuestionAnswer(answeredQuestion)
        .catch(() => {
            alert('An error occurred. Try again.')
        })
}