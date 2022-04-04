import React , { useReducer } from 'react'
import axios from 'axios'
import SwaggerContext from './swaggerContext'
import SwaggerReducer from './swaggerReducer'
import {
  GET_CLINICS,
  SET_LOADING
} from '../types'

const SwaggerState = props => {
  const initialState = {
    clinics: [],
    loading: false
  }

  const [state, dispatch] = useReducer(SwaggerReducer, initialState)
 
  // @DESC Get all clinics from "Gliwice" city that provide healthcare for childrens
  const getClinics = async () => {
    setLoading()
    const res = await axios.get('https://api.nfz.gov.pl/app-itl-api/queues?page=1&limit=20&format=json&case=1&province=12&benefitForChildren=true&locality=Gliwice&api-version=1.3')

    dispatch({
      type: GET_CLINICS,
      payload: res.data.data
    })
  }

  // @DESC Set loading if true
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <SwaggerContext.Provider
    value={{
      clinics: state.clinics,
      loading: state.loading,
      getClinics,
    }}
  >
    {props.children}
  </SwaggerContext.Provider>
}

export default SwaggerState