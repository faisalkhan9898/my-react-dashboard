import React from 'react'
import Home from '../common_componenet/Home'
import Table from 'react-bootstrap/Table';
import Left from './Left';
import Right from './Right';

const Timetable = () => {
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
                            <h2><center>Time Table</center></h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Time</th>
                                        <th>Monday</th>
                                        <th>Tuesday </th>
                                        <th>wednesday</th>
                                        <th>thursday</th>
                                        <th>friday</th>
                                        <th>saturday</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>Start time</td>
                                        <td>End time</td>
                                        <td>Period</td>

                                    </tr>
                                    <tr>
                                        <td>09:00 AM</td>
                                        <td>09:44 AM</td>
                                        <td>Period 1</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>09:00 AM</td>
                                        <td>09:44 AM</td>
                                        <td>Period 2</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>09:00 AM</td>
                                        <td>09:44 AM</td>
                                        <td>Period 3</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>09:00 AM</td>
                                        <td>09:44 AM</td>
                                        <td>Period 4</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>09:00 AM</td>
                                        <td>09:44 AM</td>
                                        <td>Period 5</td>
                                        <td>Hindi <br/> &nbsp; &nbsp; &nbsp; Roshni <br/> Room2</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Timetable
