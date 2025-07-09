import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import tiger from '../images/tiger.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarDays, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


function Rightheader() {
    
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className='d-flex gap-3 pt-4'>
                    <h2 className='header ps-3'>Welcome FAISAL!</h2>
                    <img src={tiger} alt="" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className='d-flex justify-content-around gap-3 pt-4 fs-5' style={{ color: 'black' }}>
                    <a href="" className='text-dark'><FontAwesomeIcon icon={faCalendarDays} /></a>
                    <a href="" className='text-dark'><FontAwesomeIcon icon={faPhoneVolume} /></a>
                    <a href="" className='text-dark'><FontAwesomeIcon icon={faBell} /></a>
                    <a href="" className='text-dark'>03/07/2025</a>
                    
                </div>

                
                    
                   
                
                






                {/* <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Welcome RAGHAV!</Navbar.Brand>
                        <img src={tiger} alt="" style={{height:'40px', width:'40px'}}/>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                             <a><FontAwesomeIcon icon={faBell}/></a>
                            </Navbar.Text>
                            <Navbar.Text>
                             <a href="#login"><FontAwesomeIcon icon={ faPhoneVolume} /></a>
                            </Navbar.Text>
                            <Navbar.Text>
                             <a href="#login">03/07/2025</a>
                            </Navbar.Text>
                            <Navbar.Text>
                             <a></a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
            </div>
        </>
    )
}

export default Rightheader
