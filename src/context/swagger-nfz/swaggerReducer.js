import {
  GET_CLINICS,
  SET_LOADING
} from '../types'

const swaggerReducer = (state, action) => {
  switch(action.type) {
    case GET_CLINICS:
      return {
        ...state,
        clinics: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default swaggerReducer