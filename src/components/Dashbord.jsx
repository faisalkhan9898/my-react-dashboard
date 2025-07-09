import React from 'react'
import Left from './Left'
import Right from './Right'
import { Link } from 'react-router-dom'

function Dashbord() {

    // const profile=()=>{
    //     return (
    //             <>
        
    //                 <div className='main'>
    //                     <div className='mainpro'>
    //                         <h2 className='pt-3 ps-3 '>Student Profile </h2>
    //                         <Link to={'/Dashboard'}><div className='fs-5 pt-3 cross pe-5 bg text-dark text-decoration-none '><span> &times; </span></div></Link>
    //                     </div>
        
    //                     <hr></hr>
    //                     <p className='fs-5 ps-3'>Admission No: ADM/2025/2002<br></br>
        
    //                         Full Name: RAGHAV <br></br>
        
    //                         Email-Id: john@example.com <br></br>
        
    //                         Mobile-No: 9090909573 <br></br>
        
    //                         DOB: 01/01/2000<br></br>
        
    //                         Admission Date: 28/05/2024</p> <br></br>
    //                     <p></p>
    //                 </div>
    //             </>
    //         )
    // }
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
                            {/* dashboard */}

                            <div className='row '>
                                <h2>Dashboard</h2>
                                <div className='col-lg-12 d-flex gap-4 mb-4'>
                                 <div className='col-lg-3 bg-success das col-12 col-md-4'> <Link to={'/profile'} className='text-decoration-none text-dark'><h3>Profile</h3></Link></div>
                                    <div className='col-lg-3 bg-warning das col-12 col-md-4'><Link to={'/class-and-subject'}><h3>Class and Subject</h3></Link></div>
                                    <div className='col-lg-3 das bg-primary col-12 col-md-4'><h3>Fee Details</h3></div>
                                   
                                </div>
                            </div>
                             <div className='row '>
                                <h2></h2>
                                <div className='col-lg-12 d-flex gap-4'>
                                    <div className='col-lg-3 bg-success das col-12'><h3>Assignment</h3></div>
                                    <div className='col-lg-3 bg-warning das col-12'><h3>Study Material</h3></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord
