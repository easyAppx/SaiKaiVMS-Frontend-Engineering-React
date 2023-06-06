import React from 'react';
import './testimonials.css';
import card_img_1 from 'Assets/Images/card_img_1.png';
import card_img_2 from 'Assets/Images/card_img_2.png';
import card_img_3 from 'Assets/Images/card_img_3.png';
//import vector from 'Assets/Svg/vector.svg';
import card_vector_front from 'Assets/Svg/card_vector_front.svg';
import card_vector_back from 'Assets/Svg/card_vector_back.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (

    <section className='container-fluid-7'>
      <div className='card_main'>
        <div className='heading flex'>
          <h4>Testimonials</h4>
          {/*<div className="see_more flex">
            <a href='#'>See more</a>
            <img className='vector' src={vector} alt="vector"/>
  </div>*/}
        </div>

        <input type="radio" name="slider" class="d-none" id="s1" checked/>
        <input type="radio" name="slider" class="d-none" id="s2"/>
        <input type="radio" name="slider" class="d-none" id="s3"/>
        <input type="radio" name="slider" class="d-none" id="s4"/>
        <input type="radio" name="slider" class="d-none" id="s5"/>

        <div className="cards">
          <label for="s1" id="slide1">
            <div className="carrier">
              <div className="card flex">
                <div className="infos">
                  <img className="vec_front" src={card_vector_front} alt="card_vector_front"/>
                  <p>
                    <span className='spann' style={{'marginLeft':'3rem'}}>
                      As someone who has volunteered for numerous organizations over the years, <br/>
                    </span> 
                    I can confidently say that the volunteer management system provided by USAF is truly a game-changer. 
                    Gone are the days of sifting through endless spreadsheets and trying to coordinate schedules through a flurry of emails. 
                    This system streamlines the entire process, making it easy to manage volunteer applications, schedules, 
                    and communications all in one place. What I love most about this system is its user-friendly interface. 
                    It's incredibly intuitive and easy to navigate, making it accessible to even the least tech-savvy individuals. 
                    I also appreciate the flexibility it provides, 
                    allowing volunteers to easily sign up for shifts that work with their schedules.
                  </p>  
                  <img className="vec_back" src={card_vector_back} alt="card_vector_back"/>    
                </div>

                <div className="card_image" style={{'marginTop':'-2.5rem'}}>
                  <img src={card_img_1} alt=""/>  
                </div>
              </div>
              <div className='card_name'>
                <h6>RoseMary Kwame</h6>
                <p>USAF</p>
                <p className='p_second'>Volunteer</p>
              </div>
            </div>
          </label>

          <label for="s2" id="slide2">
            <div className="carrier">
              <div className="card flex">
                <div className="infos">
                  <img className="vec_front" src={card_vector_front} alt="card_vector_front"/>
                  <p>
                    <span className='spann' style={{'marginLeft':'3rem'}}>
                      As someone who has volunteered for numerous organizations over the years, <br/>
                    </span> 
                    I can confidently say that the volunteer management system provided by USAF is truly a game-changer. 
                    Gone are the days of sifting through endless spreadsheets and trying to coordinate schedules through a flurry of emails. 
                    This system streamlines the entire process, making it easy to manage volunteer applications, schedules, 
                    and communications all in one place. What I love most about this system is its user-friendly interface. 
                    It's incredibly intuitive and easy to navigate, making it accessible to even the least tech-savvy individuals. 
                    I also appreciate the flexibility it provides, 
                    allowing volunteers to easily sign up for shifts that work with their schedules.
                  </p>
                  <img className="vec_back" src={card_vector_back} alt="card_vector_back"/>
                </div>

                <div className="card_image" style={{'marginTop':'-2rem'}}>
                  <img src={card_img_2} alt=""/>  
                </div>
              </div>
              <div className='card_name'>
                <h6>Jane Tshabalala</h6>
                <p>Churchill Consulting</p>
                <p className='p_second'>Volunteer</p>
              </div>
            </div>
          </label>

          <label for="s3" id="slide3">
            <div className="carrier">
              <div className="card flex">
                <div className="infos">
                  <img className="vec_front" src={card_vector_front} alt="card_vector_front"/>
                  <p>
                      <span className='spann' style={{'marginLeft':'3rem'}}>
                        As someone who has volunteered for numerous organizations over the years, <br/>
                      </span> 
                    I can confidently say that the volunteer management system provided by USAF is truly a game-changer. 
                    Gone are the days of sifting through endless spreadsheets and trying to coordinate schedules through a flurry of emails. 
                    This system streamlines the entire process, making it easy to manage volunteer applications, schedules, 
                    and communications all in one place. What I love most about this system is its user-friendly interface. 
                    It's incredibly intuitive and easy to navigate, making it accessible to even the least tech-savvy individuals. 
                    I also appreciate the flexibility it provides, 
                    allowing volunteers to easily sign up for shifts that work with their schedules.
                  </p>
                  <img className="vec_back" src={card_vector_back} alt="card_vector_back"/>
                </div>

                <div className="card_image">
                  <img src={card_img_3} alt=""/>  
                </div>
              </div>
              <div className='card_name'>
                <h6>Ayinke Hassan</h6>
                <p>Hill-Top Volunteer</p>
                <p className='p_second'>Volunteer</p>
              </div>
            </div>
          </label>

          <label for="s4" id="slide4">
            <div className="carrier">
              <div className="card flex">
                <div className="infos">
                  <img className="vec_front" src={card_vector_front} alt="card_vector_front"/>
                  <p>
                    <span className='spann' style={{'marginLeft':'3rem'}}>
                      As someone who has volunteered for numerous organizations over the years, <br/>
                    </span> 
                    I can confidently say that the volunteer management system provided by USAF is truly a game-changer. 
                    Gone are the days of sifting through endless spreadsheets and trying to coordinate schedules through a flurry of emails. 
                    This system streamlines the entire process, making it easy to manage volunteer applications, schedules, 
                    and communications all in one place. What I love most about this system is its user-friendly interface. 
                    It's incredibly intuitive and easy to navigate, making it accessible to even the least tech-savvy individuals. 
                    I also appreciate the flexibility it provides, 
                    allowing volunteers to easily sign up for shifts that work with their schedules.
                  </p>
                  <img className="vec_back" src={card_vector_back} alt="card_vector_back"/>
                </div>

                <div className="card_image">
                  <img src={card_img_3} alt=""/>  
                </div>
              </div>
              <div className='card_name'>
                <h6>Obiee Hassan</h6>
                <p>Hill-Top Volunteer</p>
                <p className='p_second'>Volunteer</p>
              </div>
            </div>
          </label>

          <label for="s5" id="slide5">
            <div className="carrier">
              <div className="card flex">
                <div className="infos">
                  <img className="vec_front" src={card_vector_front} alt="card_vector_front"/>
                  <p>
                    <span className='spann' style={{'marginLeft':'3rem'}}>
                      As someone who has volunteered for numerous organizations over the years, <br/>
                    </span> 
                      I can confidently say that the volunteer management system provided by USAF is truly a game-changer. 
                    Gone are the days of sifting through endless spreadsheets and trying to coordinate schedules through a flurry of emails. 
                    This system streamlines the entire process, making it easy to manage volunteer applications, schedules, 
                    and communications all in one place. What I love most about this system is its user-friendly interface. 
                    It's incredibly intuitive and easy to navigate, making it accessible to even the least tech-savvy individuals. 
                    I also appreciate the flexibility it provides, 
                    allowing volunteers to easily sign up for shifts that work with their schedules.
                  </p>
                  <img className="vec_back" src={card_vector_back} alt="card_vector_back"/>
                </div>

                <div className="card_image">
                  <img src={card_img_3} alt=""/>  
                </div>
              </div>
              <div className='card_name'>
                <h6>Betty Hassan3</h6>
                <p>Hill-Top Volunteer</p>
                <p className='p_second'>Volunteer</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;