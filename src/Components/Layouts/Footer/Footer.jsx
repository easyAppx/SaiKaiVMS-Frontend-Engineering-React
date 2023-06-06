import React from 'react'
import './footer.css';
import logo from 'Assets/Svg/logo.svg';
import twitter from 'Assets/Svg/twitter_icon.svg';
import facebook from 'Assets/Svg/facebook_icon.svg';
import instagram from 'Assets/Svg/instagram_icon.svg';

const Footer = () => {
  return (
   <section>
    <div className='footer-container'>
      <div className='footer_header flex'>
        <div className="logo_footer flex">
          <a href="/" className="">
            <img src={logo} className="footer_logo" alt="logo"/>
          </a>
        </div>

        <div className="social_icons_footer flex">
          <a href="/" className="">
            <img src={twitter} className="footer_icon" alt="icon"/>
          </a>
          <a href="/" className="">
            <img src={instagram} className="footer_icon" alt="icon"/>
          </a>
          <a href="/" className="">
            <img src={facebook} className="footer_icon" alt="icon"/>
          </a>
        </div>
      </div>

      <p className='line'></p>
      <div className='footer_body flex'>
        <div className='usa_contact_footer'>
          <h4 className='footer_h4 raise'>USAF</h4>
          <li>119,NewYorka</li>
          <li>+1234443</li>
          <li>usaf@GMAIL.COM</li>
        </div>

        <p className='line_vertical'></p>

        <div className='usa_others_footer flex'>
          <div className='Product'>
            <h4 className='footer_h4 raise'>Product</h4>
            <ul className="footer_product">
              <li className="product_item">
                  <a href="#" className="">VMS</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">HR Portal</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Zumaridi</a>
              </li>
            </ul>
          </div>

          <div className='company'>
            <h4 className='footer_h4'>Company</h4>
            <ul className="footer_product">
              <li className="product_item">
                  <a href="#" className="">About USAF</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Events</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Press</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Partners</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Careers</a>
              </li>
            </ul>
          </div>

          <div className='help'>
            <h4 className='footer_h4'>Help</h4>
            <ul className="footer_product">
              <li className="product_item">
                  <a href="#" className="">Contact Us</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Help Center</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Support</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">Privacy Policy</a>
              </li>
              <li className="product_item">
                  <a href="#" className="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='line_two'></p>
      <div className='copy_right'><h5>© Copyright 2023 USAF All rights reserved.</h5></div>
    </div>
   </section>
  )
}

export default Footer