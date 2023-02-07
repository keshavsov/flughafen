import React from 'react'
import logo from '../Assets/Images/logo.png'
import home1 from '../Assets/Images/home1.png'
import home2 from '../Assets/Images/home2.png'
import message1 from '../Assets/Images/message1.png'
import message2 from '../Assets/Images/message2.png'
import message3 from '../Assets/Images/message3.png'
import group1 from '../Assets/Images/Group62.png'
import group2 from '../Assets/Images/Group63.png'
import group3 from '../Assets/Images/Group64.png'
import group4 from '../Assets/Images/Group64(1).png'
import group5 from '../Assets/Images/Group64(2).png'
import couple from '../Assets/Images/couple.png'
import SvgImages from '../Assets/Images/svgImages';
import { BasicTimePicker } from '../component/Elements/Timer'
import { ResponsiveDatePickers } from '../component/Elements/Date'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useTranslation } from "react-i18next";
const { Location } = SvgImages;

export default function Home() {
  const [journey, setJourney] = React.useState('');
  const [extraTime, setExtraTime] = React.useState('');
  const { t } = useTranslation();
  const handleJourney = (event) => {
    setJourney(event.target.value);
  };
  const handleExtraTime = (event) => {
    setExtraTime(event.target.value);
  };
  return (<>
    <div className='container-fluid bg-white'>
      <div className='row m-3'>
        <div className='col col-md-7 col-sm-12 rounded my-3  p-3'>
          <form >
            <div className='row my-5'>
              <div className='col-md-6 col-sm-12'>

                <ResponsiveDatePickers />
              </div>
              <div className='col-md-6 col-sm-12' >
                <BasicTimePicker />
              </div>
            </div>
            <div className='row my-5'>
              <div className='col-md-6 col-sm-12'>
                <TextField spacing={4} label="From" variant='filled' fullWidth />
              </div>

              <div className='col-md-6 col-sm-12'>
                <TextField spacing={4} label="To" variant='filled' fullWidth />
              </div>
            </div>
            <div className='row my-5'>
              <div className='col col-md-6 col-sm-12 '>

                <Box spacing={4}>
                  <FormControl fullWidth>
                    <InputLabel id="JOURNEY TYPE">JOURNEY TYPE</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"

                      value={journey}
                      label="JOURNEY TYPE"
                      onChange={handleJourney}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className='col col-md-6 col-sm-12 '>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="JOURNEY TYPE">EXTRA TIME</InputLabel>
                    <Select
                      value={extraTime}
                      label="EXTRA TIME"
                      onChange={handleExtraTime}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <p></p>

            <button className='btn btn-primary w-100'>Book Now</button>


          </form>
        </div>
        <div className='col  col-md-5 my-4 white-card' style={{ placeContent: "center", display: "grid" }}>
          <img src={home1} alt="no img" height="430rem" />
        </div>
      </div>
      <duv className="container ">
        <div className='row'>
          <div className='col py-3 px-6' style={{ backgroundColor: "#EEF9FF" }}>
            <center> <img src={logo} />
              <h3 style={{ color: "#0E4672" }}>Blu Airport Transfer</h3>
            </center>
            <center><p className='span-text'>
              Blu Airport Transfer is an online transfer service for planning, arranging and booking airport transfers. Based on current transfer prices, we calculate the route and time dependent transfer costs. Furthermore, we search for you in real time for an available, reliable and cheap transfer service for your airport transfer. Simply enter your starting point and destination in the form above and you will receive an overview of the available offers. A few more clicks and you can easily order your transfer online.</p></center>
          </div>
        </div>
      </duv>

      <div className='container'>
        <div className='row my-5'>
          <div className='col text-white d-flex mx-5 styleShadow rounded' style={{ backgroundColor: "#0E4672" }}>
            <div className='col col-md-6 col-sm-6 p-3'>
              <div>
                <h2>General information</h2>
                <p className='span-text'>You can book your transfers directly online through our online forms, we are also available for you by phone and WhatsApp.</p>
              </div>
              <div>
                <h2>Payment options</h2>
                <p className='span-text'>You can pay via Paypal, credit card, cash or prepayment via invoice.</p>
              </div>
            </div>
            <div className='vertical-line'></div>
            <div className='col  col-md-6 col-sm-6 p-3'>
              <div>
                <h2>Call now</h2>
                <h4 className='my-4'>+49 178 8404957</h4>
              </div>
              <div >
                <button class='btn btn-primary'>Book now</button>
              </div>

            </div>
          </div>
        </div>



      </div>
      {/* ---------------pending---------- */}
      <div className='container'>
        <div className='row py-4'>
          <center>
            <div>
              <h2> How it works?</h2>
              <p className="span text-dark">The easiest way to book and arrive to your  desired<br /> destination from/to the airport.</p>
            </div>
          </center>
          <div className='row ml-2 mt-2 '>
            <div className='col-md-4 position-relative my-2'><img src={group1} width="200" height="200" />
              <label className='position-absolute text-position'>Book online easily<br /> through our website</label>
            </div>
            <div className='col-md-4 position-relative my-2'><img src={group2} width="200" height="200" />
              <label className='position-absolute text-position'>Book online easily<br /> through our website</label>
            </div>
            <div className='col-md-4 position-relative my-2'><img src={group3} width="200" height="200" />
              <label className='position-absolute text-position'>Book online easily<br /> through our website</label>
            </div>

            <div className='col-md-4 position-relative my-2'><img src={group4} width="200" height="200" />
              <label className='position-absolute text-position'>Book online easily<br /> through our website</label>
            </div>
            <div className='col-md-4 position-relative'><img src={group5} width="200" height="200" />
              <label className='position-absolute text-position'>Book online easily<br /> through our website</label>
            </div>

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-xs-6 bg-white px-5'>
          <div>
            <h2>Advantages of using Blu <br /><span className='span' style={{ fontSize: "inherit" }} > Airport Transfer</span></h2>
          </div>
          <div>
            <p className='p'>You are the <span className='span'>only passenger booked in the cab</span>, so we will find the <span>fastest way to your destination</span>.</p>
            <p className='p'>Pay either in advance or on the spot to<span className='span'> the driver with no unexpected costs or surprises</span>.</p>
            <p className='p'>You will <span className='span'>receive an invoice afterwards by email or from the driver</span>.</p>
            <p className='p'>Alternatively, you can use our <span className='span'>simple chat service via WhatsApp +49(0)174 8790930</span>.</p>
            <p className='p'>We are <span className='span'>up to 40% cheaper than other local cab services</span>.</p>
          </div>
        </div>
        <div className='col-md-5 col-sm-12'>
          <img src={home2} height="400px" width="430px" />

        </div>
      </div>

      <div className='container'>
        <div className='row my-5'>
          <div className='col text-white rounded shadow2' style={{ backgroundColor: "#0E4672" }}>
            <div className='col col-md-12 p-3'>
              <div>
                <center><h2>Confirmation of booking in a few minutes</h2></center>
              </div>
            </div>
            <div className='row'>

              <div className='col-md-4 col-xs-12'>
                <img src={message1} width="50" height="50" className='message-img' />
                <p className='span-text'>Receive a booking confirmation by e-mail in a few minutes after placing your order.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message2} width="50" height="50" className='message-img' />
                <p className='span-text'>You will definitely receive an invoice by e-mail<br /> or from the driver.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message3} width="50" height="50" className='message-img' />
                <p className='span-text'>Alternatively, you can use our simple chat service via WhatsApp +49 174 8790930</p>
              </div>



            </div>
          </div>
        </div>
      </div>
      <div className='row py-3 mx-3'>
        <div className='col-md-6'>
          <img src={couple} width='500px' />
        </div>
        <div className='col-md-6'>
          <h2> Advantage of using airport <br /> transfer </h2> <br />
          <p className=' p'>You are the only booked passenger in the Shuttle, so that we can find the fastest way to your destination.</p>
          <p className=' p'>Pay either in advance or on the spot to the driver with no unexpected costs or surprises.</p>
          <p className=' p'>Transfer services 24/7 customer service</p>
          <p className=' p'>We are up to 40% cheaper than other local taxi services.</p>
        </div>
      </div>
    </div>
  </>)
}


