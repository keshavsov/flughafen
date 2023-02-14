import React from 'react';
import { useTranslation } from 'react-i18next';
import boy from '../Assets/Images/Boy.png'
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Password } from '@mui/icons-material';
export function Login() {
  const { t } = useTranslation();
  const nav=useNavigate()

  const handleLogin=()=>{
    nav('/home')
  }
  return (<>
    <div className='container-fluid' style={{ background: "#C7E7F1",paddingBottom:"5%" }}>
      <div className='row px-3'>
        <div className="col col-md-7 white-card rounded p-5 my-4 h-50">
          <form>
            <h2>{t('CustomerLogin')}</h2>
            <p className='p'>Join us! and enjoy your ride in just simple steps.</p>
            <div class="mb-3">
              <TextField label="Email address" variant='standard' fullWidth autoComplete='off'/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <TextField type="password" label="Password" variant='standard' fullWidth autoComplete='off'/>
            </div>
            <div class="mb-3 form-check d-flex justify-content-between">
              <div>
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">{t('EMich')}</label>
              </div>
              <div>
                <p>passwort vergessen?</p>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100" onClick={handleLogin}>Submit</button>
            <p></p>
            <center>
              <p> {t('Notamemberyet?')} <Link to="">Jetzt registrieren.</Link></p>
            </center>
          </form>
        </div>
        <div className="col col-md-5 my-4 align-center" style={{placeContent:"center",display:"grid"}}>
          <img src={boy} height="430rem" width="380rem" />
        </div>

      </div>

    </div>


  </>)

}





