import React from 'react'
import Headers from '../component/Header';
import { Footer } from './Footer';

export default function LayoutI({children}) {
  return (
    <div className='container-fluid p-0'>
        <Headers />
        {children}
        <Footer/>
    </div>
  )
}
