import React from 'react'
import logo from '../Assets/Images/logo.png'
import home1 from '../Assets/Images/home1.png'
import home2 from '../Assets/Images/home2.png'
import message1 from '../Assets/Images/message1.png'
import message2 from '../Assets/Images/message2.png'
import message3 from '../Assets/Images/message3.png'
import group1 from '../Assets/Images/Group62.png'
import group62 from '../Assets/Images/Group62(1).png'

export default function Home() {
  return (<>
    <div className='container-fluid bg-white'>
      <div className='row m-3'>
        <div className='col col-md-7 col-sm-12 rounded my-3  p-3'>
          <form >
            <div className='row'>
              <div className='col col-md-6 col-sm-12'>
                <label > date</label> <br />
                <input type="date" id="date" />
              </div>
              <div className='col col-md-6 col-sm-12' >
                <label > time</label> <br />
                <input type="time" id="time" />
              </div>
            </div>
            <label>From</label>
            <input type="email" class="form-control" />
            <label >TO</label>
            <input type="email" class="form-control" />

            <div className='row'>
              <div className='col col-md-6 col-sm-12 '>
                <label>JOURNEY TYPE</label>
                <select className='w-100 '>
                  <option>......</option>
                  <option>dfsf</option>
                  <option>dfsf</option>
                  <option>dfsf</option>
                  <option>dfsf</option>
                  <option>dfsf</option>
                </select>
              </div>

              <div className='col col-md-6 col-sm-12 '>
                <label>EXTRA TIME</label>
                <select className='w-100'>
                  <option>........</option>
                  <option>asgad</option>
                  <option>asgad</option>
                  <option>asgad</option>
                  <option>asgad</option>
                </select>
              </div>
            </div>
            <p></p>
            <button className='btn btn-primary w-100'>Book Now</button>
          </form>
        </div>
        <div className='col  col-md-5 my-4 white-card'>
          <img src={home1} alt="no img" height="430rem" style={{ width: "auto" }} />
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
              <h4> How it works?</h4>
              <p className="span text-dark">The easiest way to book and arrive to your  desired<br /> destination from/to the airport.</p>
            </div>
          </center>
          <div className='row'>
 <div><img src={group1} width="200" height="200" /> </div>
<div className='col-md-4 col-sm-12'><img src={group62}  width="200" height="200" style={{objectFit:"contain"}}/></div>
<div className='col-md-4  col-sm-12'><img src={group62}  width="200" height="200" style={{objectFit:"contain"}}/></div>
<div className='col-md-4  col-sm-12'><img src={group62}  width="200" height="200" style={{objectFit:"contain"}}/></div>
{/* ========================= =========================================*/}
{/* <div className="h-[213px] md:mt-[0] sm:mt-[0] mt-[10px] relative md:w-[100%] sm:w-[100%] w-[30%]">
                <div className="h-[213px] m-[auto] w-[100%]">
                  <img
                    src="images/img_1.svg"
                    className="absolute bottom-[0] h-[158px] left-[0] w-[auto]"
                    alt="One"
                  />
                  <span
                    className="absolute bottom-[2%] sm:mx-[0] right-[0] text-black_900 text-left sm:w-[100%] w-[86%]"
                    variant="body7"
                  >
                    Book online easily through our website
                  </span>
                  <img
                    src="images/img_group3.svg"
                    className="absolute h-[113px] left-[14%] top-[0] w-[auto]"
                    alt="GroupThree"
                  />
                </div>
                <button
                  className="absolute flex h-[50px] items-center justify-center left-[10%] rounded-radius50 top-[35%] w-[50px]"
                  size="smIcn"
                  variant="icbOutlineBlack9005e"
                >
                  <img
                    src="images/img_group66.png"
                    className="h-[37px] w-[37px]"
                    alt="GroupSixtySix"
                  />
                </button>
              </div> */}
{/* ====================================================================== */}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-xs-6 bg-white px-5'>
          <div>
            <h4><span style={{ color: "#1C2124" }}>Advantages of using Blu</span> <br /><span style={{ color: "#0E4672" }}> Airport Transfer</span></h4>
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
                <img src={message1} width="50" height="50" className='message-img'/>
                <p className='span-text'>Receive a booking confirmation by e-mail in a few minutes after placing your order.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message2} width="50" height="50" className='message-img'/>
                <p className='span-text'>You will definitely receive an invoice by e-mail<br/> or from the driver.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message3} width="50" height="50" className='message-img' />
                <p className='span-text'>Alternatively, you can use our simple chat service via WhatsApp +49 174 8790930</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </>)
}


