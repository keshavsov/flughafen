import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { TableVehicle } from '../component/TableVehicle';
import Stapper from '../component/Elements/Stapper'
// ------------images------------
import buttonIcon1 from '../Assets/Images/disability1.png'
import buttonIcon2 from '../Assets/Images/g105.png'
import buttonIcon3 from '../Assets/Images/apps1.png'
import buttonIcon4 from '../Assets/Images/package.png'
import minibus from '../Assets/Images/img_minibus.png'
import user from '../Assets/Images/user1.png'
import bag from '../Assets/Images/bag1.png'

export function VehicleOption() {

    return (
        <>
            <div className='container-fluid' >
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        <div className='text-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <button type="button" className="btn btn-primary rounded-pill px-4"> &#8592; Back</button>
                            <h3 class="ride">Ride Booking</h3>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <Stapper />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-white' style={{ background: "#1A1F23" }}>
                        <p className='vehicle-option-sider-text'>Zusammenfassung</p>
                        <Stack spacing={2} >
                            <TextField color='error' label="Servicetype" variant="standard" />
                            <TextField label="Ubertragungsart" variant="standard" />
                            <TextField label="Ubertragungsart" variant="standard" />
                            <TextField label="Abholadrsse-Zleladresse" variant="standard" />
                            <TextField label="Abholdatum-Zeit" variant="standard" />
                            <TextField label="Entfernung" variant="standard" />
                            <TextField label="Geschatzte Fahrzeit" variant="standard" />

                        </Stack>
                    </div>
                    <div className='col-md-6 white-card p-2'>
                        <div className='p-3'>
                            <h2 ><img src={buttonIcon3} />Extra Optionen</h2>
                        </div>

                        <div className=' d-flex justify-content-evenly '>
                            <button className="btn btn-primary "><img src={buttonIcon2} /> Child Seat</button>
                            <button className="btn btn-primary "> <img src={buttonIcon4} />Package</button>
                            <button className="btn btn-primary "> <img src={buttonIcon1} />Wheelchair (Foldable)</button>
                        </div>
                        <TableVehicle />

                        <h2>Vehicle List</h2>
                        <div className='row justify-content-center '>
                            <div className=' col-md-10 col-sm-6 white-card border my-3'>

                                <div className=" d-flex">
                                    <img className="card-img-top" src={minibus} alt="Card image cap" style={{ width: "236px", height: "120px" }} />
                                    <div className="card-body p-3 ">
                                        <label className='card-text'>Economy</label>                                        <div className='d-flex justify-content-evenly '>
                                            <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                            <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                        </div>
                                        <p className='Gesamt-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                    </div>
                                    <div className=' card-text p-3'>
                                        <p>€226.78</p>
                                        <butto className=" btn btn-primary">Wahlen</butto>
                                    </div>
                                </div>

                            </div>
                            <div className=' col-md-10 white-card border'>

                                <div className=" d-flex">
                                    <img className="card-img-top" src={minibus} alt="Card image cap" style={{ width: "236px", height: "120px" }} />
                                    <div className="card-body p-3">
                                        <label className='card-text'>Economy</label>
                                        <div className='d-flex justify-content-evenly '>
                                            <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                            <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                        </div>
                                        <p className='Gesamt-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                    </div>
                                    <div className='card-text p-3'>
                                        <p>€226.78</p>
                                        <butto className=" btn btn-primary">Wahlen</butto>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-md-3 '>
                        <h2>Payment List</h2>
                        <div className='d-flex justify-content-evenly'>
                            <div className='p'><b>Extra Optionen</b></div>
                            <div className='p'><b>$223.00</b></div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <div className='p'><b>Ausgewahltes Fahrzeug</b></div>
                            <div className='p'><b>$223.00</b></div>
                        </div>
                        <div className='text-center' ><hr></hr></div>
                        <div className='d-flex justify-content-evenly'>
                            <div className='Gesamt-text'>Gesamt</div>
                            <div className='Gesamt-text'><b>$223.00</b></div>
                        </div>
                        <div className='mt-4'>
                            <button className="btn btn-primary w-100"  >Continue</button>
                        </div>

                    </div>


                </div>


            </div>

        </>
    )






}
