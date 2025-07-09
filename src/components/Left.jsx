import { faBookOpen, faBookOpenReader, faGauge, faGear, faListCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons/faCalendarDay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Links } from 'react-router-dom'

function Left() {
  return (
    <div className='leftdiv'>
        <h2 className='ps-4 pt-5 mb-3'>JEEVAN ADARSH VIDYALAYA</h2>
      <ul className='list-unstyled ps-3 fs-5 cursor-pointer leftli me-2 '>
        <Link to={'/Dashboard'} className='text-decoration-none text-dark lh-sm'><li className='li'> <FontAwesomeIcon icon={faGauge}/>Dashboard</li></Link>
        <Link to={'/Assignment'} className='text-decoration-none text-dark '><li className='li'> <FontAwesomeIcon icon={faListCheck}/>Assignment</li> </Link>
       <Link to={'/Study-material'} className='text-decoration-none text-dark'> <li className='li'> <FontAwesomeIcon icon={faBookOpenReader}/>Study Material</li></Link>
       <Link to={'/timetable'}className='text-decoration-none text-dark'> <li className='li'> <FontAwesomeIcon icon={faCalendarDay}/>Time Table</li></Link>
        <Link to={'f'} className='text-decoration-none text-dark'><li className='li'><FontAwesomeIcon icon={faGear}/>Setting</li></Link>
        <Link to={'f'} className='text-decoration-none text-dark' ><li className='li'> <FontAwesomeIcon icon={faRightFromBracket}/>LogOut</li></Link>
      </ul>
    </div>
  )
}

export default Left
