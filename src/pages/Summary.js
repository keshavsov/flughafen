import React from 'react'
import { Box, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import Stapper from '../component/Elements/Stapper'
import svgImages from '../Assets/Images/svgImages'
import { useTranslation } from 'react-i18next'
import { PaymentList } from '../component/PaymentList'
import map from '../Assets/Images/img_rectangle39832.png'
const { EditIcon, GernamySvg } = svgImages;

export function Summary() {
    const { t } = useTranslation()
    return (
        <>
            <div className='container-fluid'>
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-sm-3">
                        <div className='text-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <button type="button" className="btn btn-primary rounded-pill px-4"> &#8592; Back</button>
                            <h3 className="ride">Ride Booking</h3>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <Stapper activeStep={3} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-white p-4' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <div className='row mb-3'>
                            <div className='col-md-9 mt-3'>
                                <span className='vehicle-option-sider-text ' >
                                    Kontakt -
                                    undrechnungsinformationen
                                </span>
                                {/* <EditIcon /> */}
                            </div>
                            <div className='col-md-2 col-order-1'>
                                <span><button className='btn rounded-pill bg-white px-3 '> <b>Edit</b> </button></span>
                            </div>
                        </div>
                        <div className='pb-3'>
                            <label className='Gesamt-text'>Vorname</label>
                            <p className='vehicle-option-sider-text'>z</p>

                            <label className='Gesamt-text'>Familienname/Nachname</label>
                            <p className='vehicle-option-sider-text'>vanpariya</p>

                            <label className='Gesamt-text'>mail Adresse</label>
                            <p className='vehicle-option-sider-text'>demo123@gmail.com</p>

                            <label className='Gesamt-text'>Telefonummer</label>
                            <p className='vehicle-option-sider-text'> <GernamySvg />-91+11112344345</p>

                        </div>
                        <hr style={{ border: "5px solid slategrey", width: "100%" }}></hr>
                        <div className='mt-4 '>
                            <span className='vehicle-option-sider-text px-3'>Zahlungsmethode</span>
                            <span ><button className='btn rounded-pill bg-white px-4 '> <b>Edit</b> </button></span>

                            <label className='Gesamt-text mt-3'>Deine Wahl</label>
                            <p className='vehicle-option-sider-text'>Barzahlung</p>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className="card white-card">
                            <img src={map} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{t('barZ')}</h2>
                                <div style={{ textAlign: "end" }}><button className='btn rounded-pill px-4' style={{ backgroundColor: "#E9F5FF" }}> <b>Edit </b> </button></div>
                                <div className='row'>
                                    <div className='col-md-6 '>
                                        <label className='Gesamt-text'>Service</label>
                                        <p className="card-text">Entfernung</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <label className='Gesamt-text'>{t('ubert')}</label>
                                        <p className="card-text">Nur Hinfahrt</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 '>
                                        <label className='Gesamt-text'>{t('pickt')}</label>
                                        <p className="card-text">30-12-2022, 11:11</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <label className='Gesamt-text'>{t('dist')}</label>
                                        <p className="card-text">197.2 Km</p>
                                    </div>
                                </div>
                                <div >
                                    <div className='col'>
                                        <label className='Gesamt-text'> {t('estimTravtime')}</label>
                                        <p className="card-text">2h 11m</p> <br />
                                    </div>

                                </div>
                                <div className='col-md-12'>
                                    <label className='Gesamt-text'>{t('pickup_destinate_addres')}</label>
                                    <p className="card-text">Frankfurt Airport (FRA) (FRA),Frankfurt,
                                        Germany - Hauptbahnhof, Stuttgart, Germany</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                        <div style={{ backgroundColor: "#16191C", padding: "5%" }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className='vehicle-option-sider-text'>{t('vehiInfo')}</h2>
                                <div style={{ textAlign: "end" }}><button className='btn rounded-pill px-4' style={{ backgroundColor: "#E9F5FF" }}> <b>Edit </b> </button></div>
                            </div>
                            <label className='Gesamt-text'>{t('vehicl')}</label>
                            <p className='vehicle-option-sider-text'>SUV</p>
                            <label className='Gesamt-text'>Extra Optionen</label>
                            <p className='vehicle-option-sider-text'>1xGold - €10.00 <br />1xBabyschale - €2.00 <br />
                                (0 Monate - 9Monate) </p>
                        </div>
                        <div className='p-5 text-center white-card mt-5'>
                            <h5>{t('diskcount')}</h5>
                        </div>
                        <div className=' text-center  p-3  mt-4' style={{ backgroundColor: "#B2C4D2" }}>
                            <button className='btn Gesamt-text'>{t('applcode')}</button>
                        </div>
                        <div className='p-5 text-center white-card mt-4'>
                            <h5>{t('diskcount')}</h5>
                        </div>
                        <PaymentList path="/done" buttonName="Book Now" />
                    </div>

                </div>
            </div>
        </>
    )
}
