import { FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField, Button } from '@mui/material'
import React from 'react'

const PersonalDetailWrapper = styled('form')({
    'fieldset': {
        borderWidth: 0
    },
    '.content-fields': {
        border: '.01px solid lightgray',
        padding: '10px'
    },
    '.MuiOutlinedInput-notchedOutline': {
        borderWidth: '0 !important'
    },
    '.Button':{
        backgroundColor:"#0E4672",
        color:'white'
    },
    '.Button:hover': {
        backgroundColor: "#0E4672",
        color: 'white'
    }
});

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
                        <PersonalDetailWrapper>
                            <Grid container >

                                <Grid item sm={12} md={6}>

                                    <Grid container>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="First Name*" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="Company Name" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="Address Line 1*" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                    </Grid>

                                </Grid>

                                <Grid item sm={12} md={6}>

                                    <Grid container>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="Last Name*" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="E-mail Address*" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} className="content-fields">
                                            <TextField label="address Line 2" variant='outlined' size='small' fullWidth />
                                        </Grid>

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid container>
                                <Grid item className='content-fields' xs={12} sm={6} md={3}  >
                                    <TextField label="City" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item className='content-fields' xs={12} sm={6} md={3}>
                                    <TextField label="State or Region" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item className='content-fields' xs={12} sm={6} md={3}>
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
                                </Grid>
                                <Grid item className='content-fields' xs={12} sm={6} md={3}>
                                    <TextField label="ZIP" variant='outlined' fullWidth />
                                </Grid>

                            </Grid>
                            <Grid container >

                                <Grid item className='content-fields' xs={12} sm={4} md={4}>
                                    <TextField label="Company City*" variant='outlined' fullWidth />

                                </Grid>

                                <Grid item className='content-fields' xs={12} sm={4} md={4} >
                                    <TextField label="Phone Number*" variant='outlined' fullWidth />
                                </Grid>

                                <Grid item className='content-fields' xs={12} sm={4} md={4}>
                                    <TextField label="Tax Number" variant='outlined' fullWidth />

                                </Grid>

                            </Grid>
                            <Grid item className='content-fields' xs={12} sm={12} md={12} >
                                <TextField spacing={4} label="Website" variant='outlined' fullWidth />

                            </Grid>
                            <Grid item  textAlign={'center'}>
                            <Button className='px-5 my-4 Button' >Update Profile</Button>
                                
                            </Grid>
                        </PersonalDetailWrapper>
                    </div>

                </div>

            </div>

        </div>
    </>)
}
