import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export function EditProfile() {
    const [journey, setJourney] = React.useState('');

    const handleJourney = (e) => {
        setJourney(e.target.value)
    }
    return (<>
        <div className='container-fluid bg-white'>
            <div className='container '>
                <div className='row'>
                    <h3 className='admin-booking my-5 '> Edit Profile Details</h3>
                    <div className='col-md-12 border p-1 white-card mb-5'>
                        <div className='text-admin p-1' style={{ backgroundColor: "#F0F0F0" }}>Personal Details </div>
                        <form className='form-control'>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12 border'>
                                    <TextField spacing={4} label="First Name*" variant='standard' fullWidth /> <br/><br/>
                                    <TextField spacing={4} label="Company Name" variant='standard' fullWidth /> <br/><br/>
                                    <TextField spacing={4} label="Address Line 1*" variant='standard' fullWidth /> <br/><br/>
                                </div>
                                <div className='col-md-6 col-sm-12 border'>
                                    <TextField spacing={4} label="Last Name*" variant='standard' fullWidth /> <br/><br/>
                                    <TextField spacing={4} label="E-mail Address*" variant='standard' fullWidth /><br/><br/>
                                    <TextField spacing={4} label="address Line 2" variant='standard' fullWidth /> <br/><br/>
                                </div>
                            </div>
                            <div className='row my-4 p-2 '>
                                <div className='col-md-3 border '>
                                    <TextField label="City" variant='standard' fullWidth />

                                </div>
                                <div className='col-md-3 border'>
                                    <TextField label="State or Region" variant='standard' fullWidth />

                                </div>
                                <div className='col-md-3 border'>
                                    <Box >
                                        <FormControl fullWidth>
                                            <InputLabel id="JOURNEY TYPE">Countary</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"

                                                value={journey}
                                                label="Countary"
                                                onChange={handleJourney}
                                            >
                                                <MenuItem value={10}>Germany</MenuItem>
                                                <MenuItem value={20}>India</MenuItem>
                                                <MenuItem value={30}>England</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className='col-md-3 border'>
                                    <TextField label="ZIP" variant='standard' fullWidth />

                                </div>

                            </div>
                            <div className='row  my-4 p-2'>
                                <div className='col-md-4 border'>
                                    <TextField spacing={4} label="Company City*" variant='standard' fullWidth />
                                </div>
                                <div className='col-md-4 border'>
                                    <TextField spacing={4} label="Phone Number*" variant='standard' fullWidth />
                                </div> <div className='col-md-4 border'>
                                    <TextField spacing={4} label="Tax Number" variant='standard' fullWidth />
                                </div>

                            </div>
                            <div className='col-md-12 my-5 p-2 border'>
                                <TextField spacing={4} label="Website" variant='standard' fullWidth />

                            </div>
                               <div className='mb-4'><center><button className='btn btn-primary px-5' >Update Profile</button></center></div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    </>)
}
