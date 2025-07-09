import React from 'react'
import Left from '../components/Left'
import Right from '../components/Right'

const Home = () => {
  return (
    <>
       <div className='row'>
        <div className='col-lg-12 app gap-3'>
          <div className='col-lg-2 bg-light min-vh-100 border'>
            <Left />
          </div>
          <div className='col-lg-9 bg-light border'>
            <Right />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
