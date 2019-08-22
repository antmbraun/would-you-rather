import { saveQuestion, answerQuestion } from "../utils/api"
import {handleInitialData} from "./shared";



export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (question_list) {
    return {
        type: RECEIVE_QUESTIONS,
        question_list,
    }
}

export function addQuestion(addedQuestion) {
    return {
        type: ADD_QUESTION,
        addedQuestion
    }
}

export function handleQuestionAnswer (answeredQuestion) {
    return (dispatch) => {
        return answerQuestion(answeredQuestion)
            .then(() => {
                dispatch(handleInitialData())
            })
    }
}

export function handleSaveQuestion (question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then(( addedQuestion ) => {
                dispatch(addQuestion(addedQuestion))
            })
    }
}



