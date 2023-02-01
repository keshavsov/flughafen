import React from 'react'
import logo from '../Assets/Images/logo.png'
import {Link} from 'react-router-dom'
import SvgImages from '../Assets/Images/svgImages';

const { LocationSvg, ContactSvg, AvatarSvg } = SvgImages;
export function Footer() {
  return (<>
    <footer className="bd-footer position-relative py-5 mt-5 " style={{backgroundColor:"#11191F"}} >
    <div className='container p-5 rounded position-absolute' style={{background:"#0E4672",
    left: '6rem', top:"-50px",}}>
        <div className='row text-white'>
          <div className='col-md-4' >
          <AvatarSvg  height='20' width='20'/>
         <b style={{fontSize:"16px"}}> Robeena Butt </b>
          </div>
          <div className='col-md-4' >
          <span>
            <ContactSvg height='20' width='20' />
            </span>Robeena Butt
          </div>
          <div className='col-md-4' >
          <span>
          <LocationSvg height='20' width='20' />
          Location
            </span>Robeena Butt
          </div>
           
        </div>
      </div>
      <div className="container ">
        <div className="row  mt-4 justify-content-evenly">
          <div className="col-3 col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
              <span className="fs-5"><img src={logo}/></span>
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 text-light "> Airport TransportTaxi is an independent taxi calculator for planning, ordering and billing of taxi and airport transfers. On the basis of current taxi prices, we calculate the distance and time-dependent taxi costs.</li>
             
            </ul>
          </div>
          <div className="col-3 col-lg-2 offset-lg-1 mb-3">
            <h5 className='text-light'>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/">Home</Link></li>
            </ul>
          </div>
          <div className="col-3 col-lg-2 mb-3">
            <h5 className='text-light'>Working Hours</h5>
            <ul className="list-unstyled">
              <li className="mb-2 "><Link to="/">We are there for you around the clock, 24/7, 365 days a year.</Link></li>
              </ul>
          </div>
          <div className="col-3 col-lg-2 mb-3">
            <h5 className='text-light'>Tax Number</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="">2186361508</Link></li>
             
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  </>)
}
