import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Stapper } from '../component/Elements/Stapper'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
export function VehicleOption() {

    return (
        <>
            <div className='container-fluid' >
                <div className="row" style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        {/* <button type="button" className="btn">Back</button> */}
                        <h3 class="ride">Ride Booking</h3>

                    </div>
                    <div className="col-sm-9"  >
                        <Stapper />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 text-white' style={{ background: "#1A1F23" }}>
                        <h3>Zusammenfassung</h3>
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />
                        gsjhgfhjs<br />

                    </div>
                    <div className='col-md-6 white-card m-3 p-2'>
                        <h2>Extra Optionen</h2>
                        <Stack spacing={6} ml={9} direction="row">
                            <Button variant="contained">Child Seat</Button>
                            <Button variant="contained">Package</Button>
                            <Button variant="contained">Wheelchair (Foldable)</Button>
                        </Stack>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            direction="column"
                        >
                            <TextField  label="Baby Seat (0 Months - 9 Months)" variant="standard" />
                            <TextField  label="Child Seat (9 Month - 4 Years)" variant="standard" />
                            <TextField  label="Booster Seat (4 Month - 12 Years)" variant="standard" />
                        </Box>
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
