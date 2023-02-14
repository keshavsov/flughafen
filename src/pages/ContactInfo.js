import React from 'react'
import { Button, Checkbox, Stack, TextField } from '@mui/material'
import Stapper from '../component/Elements/Stapper'
import { useTranslation } from 'react-i18next'
import svgImages from '../Assets/Images/svgImages'
import paypal from '../Assets/Images/PayPal 1.png'
import wallet from '../Assets/Images/Group (2).png'
import stripe from '../Assets/Images/Group (1).png'
import { Label } from '@mui/icons-material'
import { PaymentList } from '../component/PaymentList'
const { EditIcon } = svgImages;

export function ContactInfo({nextStapper,setNextStapper}) {
    const { t } = useTranslation();
    return (
        <>
            <div className='container-fluid'>
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        <div className='text-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <button type="button" className="btn btn-primary rounded-pill px-4"> &#8592; Back</button>
                            <h3 class="ride">Ride Booking</h3>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <Stapper nextStapper={nextStapper} setNextStapper={setNextStapper(nextStapper+1)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-white p-4' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <span className='vehicle-option-sider-text'>{t('Zfassung')}</span>
                        <span className='mx-5'>
                            {/* <EditIcon /> */}
                            <div style={{textAlign:"end"}}><button className='btn rounded-pill bg-white px-4 '> <b>Edit</b> </button></div>

                        </span>
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
                    <div className='col-md-6 white-card p-3 '>
                        <h2 style={{ backgroundColor: "#E6E6E6", paddingLeft: "10px" }}>{t('contactI')}</h2>
                        <form className='form-control white-card'>
                            <div className='d-flex flex-wrap'>
                                <div className='col-md-6 p-2'>
                                    <TextField fullWidth label={t('fn')} variant="standard" />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <TextField fullWidth label={t('surn')} variant="standard" />

                                </div>
                            </div>
                            <div className='d-flex flex-wrap'>
                                <div className='col-md-6 p-2'>
                                    <TextField fullWidth label="E-mail Adresse*" variant="standard" />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <TextField fullWidth label={t('tel')} variant="standard" />

                                </div>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control my-3" placeholder="Leave a comment here" />
                                <label for="floatingTextarea2">{t('remark')}</label>
                            </div>
                            <Checkbox {...Label} defaultChecked /><span>{t('bilADD')}</span>

                        </form>

                        <h2>Select Payment method</h2>
                        <div className='row py-5'>
                            <div className='d-flex flex-wrap gap-2'>
                                <div className='col-md-4'>
                                    <button className='btn btn-primary  btn-lg'><img src={wallet} width="40px" /> Cash</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn btn-outline-primary btn-lg'><img src={stripe} width="83px" /></button>
                                </div>
                                <div className='col-md-4'>
                                    <button className='btn btn-outline-primary btn-lg'><img src={paypal} width="83px" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                        <PaymentList />


                    </div>

                </div>

            </div>

        </>
    )
}
