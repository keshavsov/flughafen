import React from 'react';
import LayoutI from '../component/LayoutI';

import boy from '../Assets/Images/Boy.png'
import { Link } from 'react-router-dom';
export function Login() {
  return (<>
    <div className='container-fluid' style={{ background: "#C7E7F1", }}>
      <div className='row px-3'>
        <div className="col col-md-7 white-card rounded p-5 my-4 h-50">
          <form>
            <h1>Kunden Login</h1>
            <p>Join us! and enjoy your ride in just simple steps.</p>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check d-flex justify-content-between">
              <div>
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Erinnere Mich</label>
              </div>
              <div>
                <p>passwort vergessen?</p>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
            <p></p>
            <center>
              <p>Noch Kein Mitglied? <Link to="">Jetzt registrieren.</Link></p>
            </center>
          </form>
        </div>
        <div className="col col-md-5 my-4 align-center">
          <img src={boy} height="430rem" width="380rem" />
        </div>

      </div>

    </div>


  </>)

}





