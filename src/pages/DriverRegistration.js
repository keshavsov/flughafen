import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField,Input } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
// import { Input } from 'reactstrap';

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
                <div classname="col-md-12 " style={{ backgroundColor: "#C7E7F1", padding: "80px" }}>
                    <h2 className='driver-heading'>THE LADDER TO MAKE YOUR <br /> BUSINESS CLIMB TO THE TOP</h2>
                    <p className="text-driver">With highly authentic deliveries and a solid customer base, we <br />are fast growing network.</p>
                    <h2 className='driver-heading'>- Enhance your business in just a tap!</h2>
                    <button className='btn btn-primary p-3'>Register Now</button>
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
                        <div className='row mt-4'>
                            <div className='col-md-6'>
                                <TextField spacing={4} label="Firstname *" variant='standard' fullWidth /> <br /><br />
                                <TextField spacing={4} label="Company Name *" variant='standard' fullWidth /> <br /><br />
                            </div>
                            <div className='col-md-6'>
                                <TextField spacing={4} label="Lastname *" variant='standard' fullWidth /> <br /><br />
                                <TextField spacing={4} label="E-mail Address*" variant='standard' fullWidth /> <br /><br />
                            </div>

                        </div>
                        <div className='label-text border' style={{ backgroundColor: "#E6E6E6" }}>Company Address</div>
                        <div className='row  mt-4'>
                            <div className='col-md-6'>
                                <TextField spacing={4} label="address Line 1*" variant='standard' fullWidth /><br /><br />
                            </div>
                            <div className='col-md-6'>
                                <TextField spacing={4} label="address Line 2" variant='standard' fullWidth /><br /><br />
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
                                <TextField spacing={4} label="Company City*" variant='standard' fullWidth /><br /><br />
                            </div>
                            <div className='col-md-4 border'>
                                <TextField spacing={4} label="Phone Number*" variant='standard' fullWidth /><br /><br />
                            </div>
                            <div className='col-md-4 border'>
                                <TextField spacing={4} label="Tax Number" variant='standard' fullWidth /><br /><br />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <TextField spacing={4} label="Website" variant='standard' fullWidth /><br /><br />
                            </div>
                            <div className='col-md-6 '>
                                <TextField spacing={4} label="Username*" variant='standard' fullWidth /><br /><br />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
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
                            </div>
                            <div className='col-md-6 '>
                                <TextField spacing={4} label="Re-enter your Password*" variant='standard' fullWidth /><br /><br />
                            </div>
                        </div>


                    </div>
                </div>
                <center><button className='btn btn-primary px-5 my-5'>Get Started now</button></center>

            </div>

        </div>
    </>)
}


