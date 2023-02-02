import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// import { Stapper } from '../component/Elements/Stapper'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { TableVehicle } from '../component/TableVehicle';
import HorizontalLabelPositionBelowStepper from '../component/Elements/Stapper'
export function VehicleOption() {

    return (
        <>
            <div className='container-fluid' >
                <div className="row align-items-center" style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        <div className='text-center' style={{flexDirection: 'column', alignItems: 'center'}}>
                        <button type="button" className="btn btn-primary rounded-pill px-4"> &#8592; Back</button>
                        <h3 class="ride">Ride Booking</h3>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <HorizontalLabelPositionBelowStepper />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-white' style={{ background: "#1A1F23" }}>
                        <h3>Zusa</h3>
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />

                    </div>
                    <div className='col-md-6 white-card p-2'>
                        <h2>Extra Optionen</h2>
                        <Stack spacing={6} ml={9} direction="row">
                            <Button variant="contained">Child Seat</Button>
                            <Button variant="contained">Package</Button>
                            <Button variant="contained">Wheelchair (Foldable)</Button>
                        </Stack>
                        <TableVehicle/>
                    </div>
                    <div className='col-md-3 '>
                        <h2>Payment List</h2>
                        hfgjhg<br />
                        hfgjhg<br />
                        hfgjhg<br />
                        hfgjhg<br />
                        hfgjhg<br />
                        hfgjhg<br />

                    </div>
                </div>
            </div>

        </>
    )




}
