import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


 function Profiledetail() {
     return (
         <>

             <div className='main'>
                 <div className='mainpro'>
                     <h2 className='pt-3 ps-3 '>Student Profile </h2>
                     <Link to={'/Dashboard'}><div className='fs-5 pt-3 cross pe-5 bg text-dark text-decoration-none '><span> &times; </span></div></Link>
                 </div>

                 <hr></hr>
                 <p className='fs-5 ps-3'>Admission No: ADM/2025/2002<br></br>

                     Full Name: RAGHAV <br></br>

                     Email-Id: john@example.com <br></br>

                     Mobile-No: 9090909573 <br></br>

                     DOB: 01/01/2000<br></br>

                     Admission Date: 28/05/2024</p> <br></br>
                 <p></p>
             </div>
        </>
     )
 }

 export default Profiledetail
