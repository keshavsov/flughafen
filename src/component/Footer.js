import React from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import SvgImages from '../Assets/Images/svgImages';
import twitter from '../Assets/Images/img_twitter.png'
import instagram from '../Assets/Images/img_instagram.png'
import facebook from '../Assets/Images/img_facebook.png'
import image11 from '../Assets/Images/img_image11.png'
import { useTranslation} from 'react-i18next'
const { LocationSvg, ContactSvg, AvatarSvg } = SvgImages;

export function Footer() {

  const {t} =useTranslation();

  return (<>
  <div style={{marginTop:"10%"}}>
    <footer className="bd-footer position-relative py-3 mt-5 " style={{ backgroundColor: "#11191F" }} >
      <div className="position-absolute w-100" style={{ top: "-75px" }}>
        <div className='container p-4  rounded ' style={{ background: "#0E4672" }}>
          <div className='row text-white '>
            <div className='col-md-4 text-center p-1' >
              <AvatarSvg height='20' width='20' />
              <b className='footer-text'> {t('Foot-Roobeena')} </b>
            </div>
            <div className='col-md-4 text-center p-1' >
              <ContactSvg height='20' width='20' />
              <b className='footer-text'>+49 178 8404957</b>
            </div>

            <div className='col-md-4 text-center p-1' >
              <LocationSvg height='20' width='20' />
              <b className='footer-text'>{t('foot-location')}</b>

            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  mt-5 justify-content-evenly" >

          <div className="col-md-4 col-sm-3 col-xs-3 mt-3" style={{textAlign:"justify"}}>
            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
              <span><img src={logo}  height="100vh" width="100%" id="image-section" /></span>
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 text-light footer-blog-text "> {t('footerText')} </li>

            </ul>
          </div>
          <div className="col-md-2  col-sm-3 text-center ">
            <h5 className='text-light footer-text-header'>{t('foot-link')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link className="footer-link" to="/">Home</Link></li>
              <li className="mb-2"><Link className="footer-link"to="/">Home</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-3 text-center " >
            <h5 className='text-light footer-text-header'>{t('working-hour')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2 "><Link  className="footer-link" to="/">We are there for you around the clock, 24/7, 365 days a year.</Link></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 text-center">
            <h5 className='text-light footer-text-header'>{t('foot-texNumber')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link className="footer-link" to="">2186361508</Link></li>

            </ul>
          </div>

        </div>
      </div>

    </footer>
    <div className='row white-card p-1 px-3'>
      <div className='col-md-5 gx-3'>
      
        <img src={twitter} width="7%"/>
        <img src={instagram} width="7%" />
        <img src={facebook} width="7%" />
        
      </div>
      <div className='col-md-7'>
        <img src={image11} style={{ width: " -webkit-fill-available", }} />
      </div>
    </div>
    </div>



  </>)
}
