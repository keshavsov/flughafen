import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid, TextField } from '@mui/material';
import { TableVehicle } from '../component/TableVehicle';
import Stapper from '../component/Elements/Stapper'
// ------------images------------
import buttonIcon1 from '../Assets/Images/disability1.png'
import buttonIcon2 from '../Assets/Images/g105.png'
import buttonIcon3 from '../Assets/Images/apps1.png'
import buttonIcon4 from '../Assets/Images/package.png'
import minibus from '../Assets/Images/img_minibus.png'
import minibus2 from '../Assets/Images/img_minivan4pax1460x184.png'
import minibus3 from '../Assets/Images/img_minibus8seater1460x184.png'
import user from '../Assets/Images/user1.png'
import bag from '../Assets/Images/bag1.png'
import svgImages from '../Assets/Images/svgImages'
import { useTranslation } from 'react-i18next'
import { PaymentList } from '../component/PaymentList'

export function VehicleOption({ }) {
    const { t } = useTranslation();
    const { EditIcon } = svgImages;
    return (
        <>
            <div className='container-fluid' >
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        <div className='text-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <button type="button" className=" btn-primary rounded-pill px-4"> &#8592; Back</button>
                            <h3 class="ride">Ride Booking</h3>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <Stapper activeStep={1} />
                    </div>
                </div>
                <div className='row '>
                    <div className='col-md-3 text-white p-4' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <span className='vehicle-option-sider-text'>{t('Zfassung')}</span>
                        <span className='mx-5'>
                            {/* <EditIcon /> */}
                            <div style={{ textAlign: "end" }}><button className='btn rounded-pill bg-white px-4 color-dark '> <b>Edit</b> </button></div>

                        </span>
                        <Stack spacing={2} >
                            <TextField className='custom-textfield'
                                label="Servicetype" variant="standard" />
                            <TextField label="Ubertragungsart" className='custom-textfield'
                                variant="standard" />
                            <TextField label="Ubertragungsart" className='custom-textfield' variant="standard" />
                            <TextField label="Abholadrsse-Zleladresse" className='custom-textfield' variant="standard" />
                            <TextField label="Abholdatum-Zeit" className='custom-textfield' variant="standard" />
                            <TextField label="Entfernung" className='custom-textfield' variant="standard" />
                            <TextField label="Geschatzte Fahrzeit" className='custom-textfield' variant="standard" />

                        </Stack>
                    </div>
                    <div className='col-md-6 white-card p-2'>
                        <div className='p-3'>
                            <h2 ><img src={buttonIcon3} />Extra Optionen</h2>
                        </div>

                        <div className=' d-flex flex-wrap justify-content-evenly gap-2  '>
                            <button className=" btn-primary btn-sm"><img src={buttonIcon2} /> Child Seat</button>
                            <button className=" btn-primary btn-sm"> <img src={buttonIcon4} /> Package </button>
                            <button className=" btn-primary btn-sm"> <img src={buttonIcon1} />Wheelchair (Foldable)</button>
                        </div>
                        <TableVehicle />

                        <h2>Vehicle List</h2>
                        <div className='row justify-content-center '>
                            <div className=' col-md-11 col-sm-6 white-card border my-3'>

                                <Grid container>
                                    <Grid item md={5} xm={4} textAlign="center">
                                        <img className="card-img-top" src={minibus} alt="Card image cap" style={{ width: "177px", height: "115px" }} />
                                    </Grid>
                                    <Grid item md={5} xm={4}>
                                        <div className="card-body ">
                                            <label className='card-text mt-2'>Economy</label>
                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                                <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                            </div>

                                            <p className='vehicle-card-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} textAlign="center">
                                        <div className=' card-text mt-2'>
                                            <p>€226.78</p>
                                            <button className="btn-primary ">{t('wah')}</button>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                            <div className=' col-md-11 col-sm-6 white-card border my-3'>

                                <Grid container>
                                    <Grid item md={5} xm={4} textAlign="center">
                                        <img className="card-img-top" src={minibus2} alt="Card image cap" style={{ width: "177px", height: "115px" }} />
                                    </Grid>
                                    <Grid item md={5} xm={4}>
                                        <div className="card-body ">
                                            <label className='card-text mt-2'>Economy</label>
                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                                <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                            </div>

                                            <p className='vehicle-card-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} textAlign="center">
                                        <div className=' card-text mt-2'>
                                            <p>€226.78</p>
                                            <button className="btn-primary ">{t('wah')}</button>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>



                            <div className=' col-md-11 col-sm-6 white-card border my-3'>

                                <Grid container>
                                    <Grid item md={5} xm={4} textAlign="center">
                                        <img className="card-img-top" src={minibus3} alt="Card image cap" style={{ width: "177px", height: "115px" }} />
                                    </Grid>
                                    <Grid item md={5} xm={4}>
                                        <div className="card-body ">
                                            <label className='card-text mt-2'>Economy</label>
                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                                <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                            </div>

                                            <p className='vehicle-card-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} textAlign="center">
                                        <div className=' card-text mt-2'>
                                            <p>€226.78</p>
                                            <button className="btn-primary ">{t('wah')}</button>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>

                    </div>

                    <div className='col-md-3 mb-5 '>

                        <PaymentList path='/contact' buttonName="Continue" />
                    </div>




                </div>


            </div>

        </>
    )






}
