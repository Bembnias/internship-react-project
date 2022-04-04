import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ clinics }) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 py-2`}>
      {clinics.map(clinic => {
        return <ListItem key={clinic.id} clinic={clinic.attributes} attributes={clinic.attributes} />
      })}
    </section>
  )
}

List.propTypes = {
  clinics: PropTypes.array.isRequired
}

export default List