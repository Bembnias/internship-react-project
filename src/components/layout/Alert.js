import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import { motion } from 'framer-motion'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  // Simple fade-in framer-motion animation
  const variants = {
    hidden: {
      top: "-10px",
      opacity: 0
    },
    visible: {
      top: "50px", 
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.5 }
    }
  }

  return (
    alert !== null && (
      <div className="sticky top-0">
        <motion.div className={`absolute right-0 sm:right-5 ${alert.type} p-3 text-center text-white`}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <i className={`bx ${alert.icon}`}></i> {alert.body}
        </motion.div>
      </div>

    )
  )
}

export default Alert