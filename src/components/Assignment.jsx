import React from 'react'
import Left from './Left'
import Right from './Right'

function Assignment() {
  return (
    <>
    <div>
        <div className='row'>
        <div className='col-lg-12 app gap-3'>
          <div className='col-lg-2 bg-light min-vh-100 border'>
            <Left />
          </div>
          <div className='col-lg-9 bg-light border'>
            <Right />
            {/* Assignment part */}
            <h1 className='ps-3'>Dashbord</h1>
            <div className='row'>
                <div className='col-lg-12 d-flex gap-3 assign'>
                    <div className='col-lg-4 bg-primary ps-3 pt-3'><h3>Class-Eng</h3></div>
                    <div className='col-lg-4 bg-primary ps-3 pt-3'><h3>Class-Environment</h3></div>
                    <div className='col-lg-4 bg-primary ps-3 pt-3'><h3>Class-Hindi</h3></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 d-flex pt-3 gap-3 assign1'>
                    <div className='col-lg-4 bg-primary ps-3 pt3'><h3>Class-Maths</h3></div>
                    <div className='col-lg-4 bg-primary ps-3 pt-3'><h3>Class-Test</h3></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Assignment
