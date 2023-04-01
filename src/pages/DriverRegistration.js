import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Input, styled, Grid, Button } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
// import { Input } from 'reactstrap';
const DriveRegisWrapper = styled('form')({
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
    '.Button': {
        backgroundColor: "#0E4672",
        color: 'white'
    },
    '.Button:hover': {
        backgroundColor: "#0E4672",
        color: 'white'
    }
});

export function DriverRegistration() {
    const [journey, setJourney] = React.useState();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleJourney = (e) => {
        setJourney(e.target.value)
    }
    return (<>
        <div className='container-fluid bg-white'>
            <div className='row' >
                <div classname="col-md-12 " style={{ backgroundColor: "#C7E7F1", padding: "65px" }}>
                    <h2 className='driver-heading'>THE LADDER TO MAKE YOUR <br /> BUSINESS CLIMB TO THE TOP</h2>
                    <p className="text-driver">With highly authentic deliveries and a solid customer base, we <br />are fast growing network.</p>
                    <h2 className='driver-heading'>- Enhance your business in just a tap!</h2>
                    <button className='btn-primary p-2'>Register Now</button>
                </div>
            </div>
            <div className='row my-5 mx-4  '>
                <div className='col-md-4 '>
                    <div className='drive-step'>Step 1</div>
                    <div className='drive-step-content my-4'>
                        Fill out the <br />registration form.
                    </div>
                    <p className="text-driver ">mit auberst authentischen liefernugen und einem soliden Kundenstamm sind wir ein Schnell wachsendes Netzwek.</p>
                </div>
                <div className='col-md-4 '>
                    <div className='drive-step'>Step 2</div>
                    <div className='drive-step-content my-4'>
                        Complete the onboarding process<br /> and accept our contract.
                    </div>
                    <p className="text-driver">mit auberst authentischen liefernugen und einem soliden Kundenstamm sind wir ein Schnell wachsendes Netzwek.</p>
                </div>
                <div className='col-md-4 '>
                    <div className='drive-step'>Step 3</div>
                    <div className='drive-step-content my-4'>
                        Begin accepting <br /> transfers.
                    </div>
                    <p className="text-driver">mit auberst authentischen liefernugen und einem soliden Kundenstamm sind wir ein Schnell wachsendes Netzwek.</p>
                </div>
                <div className='row mt-5 '>
                    <div className='col-md-12 '>
                        <div className='label-text border' style={{ backgroundColor: "#E6E6E6" }}>Become Partner</div>
                        <DriveRegisWrapper>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                    <TextField label="Firstname *" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                    <TextField label="Company Name *" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <TextField label="Lastname *" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>

                                    <TextField label="E-mail Address*" variant='outlined' fullWidth />
                                </Grid>

                            </Grid>
                            <div className='label-text border' style={{ backgroundColor: "#E6E6E6" }}>Company Address</div>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <TextField label="address Line 1*" variant='outlined' fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                    <TextField label="address Line 2" variant='outlined' fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                    <TextField label="City" variant='outlined' fullWidth />

                                </Grid>
                                <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                    <TextField label="State or Region" variant='outlined' fullWidth />

                                </Grid>

                                <Grid item xs={12} sm={6} md={3} className='content-fields' >
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

                                <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                    <TextField label="ZIP" variant='outlined' fullWidth />

                                </Grid>

                            </Grid>
                            <Grid container >
                                <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                    <TextField label="Company City*" variant='outlined' fullWidth /><br /><br />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                    <TextField label="Phone Number*" variant='outlined' fullWidth /><br /><br />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                    <TextField label="Tax Number" variant='outlined' fullWidth /><br /><br />
                                </Grid>

                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <TextField label="Website" variant='outlined' fullWidth /><br /><br />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <TextField label="Username*" variant='outlined' fullWidth /><br /><br />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <FormControl sx={{ width: '100%', }} variant="outlined" helperText="please valid password" >
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment >
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}

                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                    <TextField label="Re-enter your Password*" variant='outlined' fullWidth /><br /><br />
                                </Grid>
                            </Grid>

                        </DriveRegisWrapper>
                    </div>
                </div>
                <DriveRegisWrapper>
                    <Grid item textAlign={'center'}>

                        <Button className='px-5 my-5 Button'>Get Started now</Button>
                    </Grid>
                </DriveRegisWrapper>

            </div>

        </div>
    </>)
}


