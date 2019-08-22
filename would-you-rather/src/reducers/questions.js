import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION  } from '../actions/questions'


export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
        return {
            ...state,
            ...action.question_list
        }
    case ANSWER_QUESTION :
        return {
            ...state,
            ...action.question_answered
        }
    case ADD_QUESTION :
        return {
            ...state,
            [action.addedQuestion.id]: action.addedQuestion
        }
    default :
      return state
  }
}