import React from 'react'
import Left from './Left'
import Right from './Right'

const Studymaterial = () => {
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
            {/* Study Material */}
            
            <div className='row'>
                <div><center className='subj'>Subject</center></div>
                <div className='col-lg-12 d-flex study'>
                    <div className='col-lg-4 bg-primary'><h3>Hindi</h3></div>
                    <div className='col-lg-4 bg-primary'><h3>ENGLISH</h3></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Studymaterial
