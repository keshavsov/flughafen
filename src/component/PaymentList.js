import React from 'react'
import { useTranslation} from 'react-i18next'
export function PaymentList() {
  const {t} =useTranslation();
  return (
    <>

      <h2>Payment List</h2>
      <div className='d-flex justify-content-evenly'>
        <div className='p'><b> {t('extopt')}</b></div>
        <div className='p'><b>$223.00</b></div>
      </div>
      <div className='d-flex justify-content-evenly'>
        <div className='p'><b>{t('AusgetF')}</b></div>
        <div className='p'><b>$223.00</b></div>
      </div>
      <div className='text-center' ><hr></hr></div>
      <div className='d-flex justify-content-evenly'>
        <div className='Gesamt-text'>{t('gesamt')}</div>
        <div className='Gesamt-text'><b>$223.00</b></div>
      </div>
      <div className='mt-4'>
        <button className="btn btn-primary w-100"  >Continue</button>
      </div>
    </>
  )
}