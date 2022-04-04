import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import List from '../components/list/List'
import ListSkeleton from '../components/skeletons/list/ListSkeleton'
import RouterAnimation from '../components/layout/RouterAnimation'

const Clinics = ({ clinics, loading }) => {
  return (
    <RouterAnimation>
      { loading ? <ListSkeleton /> : ( <Fragment> {clinics && <List clinics={clinics}/>} </Fragment> ) }
    </RouterAnimation>
  )
}
  
Clinics.propTypes = {
  clinics: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Clinics