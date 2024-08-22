import React from 'react'
import './footer.css'
import Insta from '../../assets/svg/Insta'
import LinkedIn from '../../assets/svg/LinkedIn'
import Gpay from '../../assets/svg/Gpay'
import DebitCard from '../../assets/svg/DebitCard'
import Paypal from '../../assets/svg/Paypal'
import Amex from '../../assets/svg/Amex'
import IPay from '../../assets/svg/IPay'
import PayIcon from '../../assets/svg/PayIcon'

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-top-left">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <input placeholder='Enter your e-mail...' className='email-input' />
            <button className='subscribe-btn'>SUBSCRIBE</button>
          </div>
          <div class="footer-top-right">
            <div>
              <h4>CONTACT US</h4>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div>
              <h4>CURRENCY</h4>
              <p>USD</p>
              <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>
        <hr class="divider" />
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <div class="footer-bottom-left-col">
              <h4>mettā muse</h4>
              <ul className='footer-quick-link'>
                <li>About Us</li> <br />
                <li>Stories</li> <br />
                <li>Artisans</li> <br />
                <li>Boutiques</li> <br />
                <li>Contact Us</li> <br />
                <li>EU Compliances Docs</li> <br />
              </ul>
            </div>
            <div class="footer-bottom-left-col">
              <h4>QUICK LINKS</h4>
              <ul className='footer-quick-link'>
                <li>Orders & Shipping</li> <br />
                <li>Join/Login as a Seller</li> <br />
                <li>Payment & Pricing</li> <br />
                <li>Return & Refunds</li> <br />
                <li>FAQs</li> <br />
                <li>Privacy Policy</li> <br />
                <li>Terms & Conditions</li> <br />
              </ul>
            </div>
          </div>
          <div class="footer-bottom-right">
            <div>
              <h4>FOLLOW US</h4>
              <span><Insta /> <LinkedIn /></span>
            </div>
            <br />
            <div>
              <h4>Accepts</h4>
              <Gpay /> <DebitCard /> <Paypal /> <Amex /> <IPay /> <PayIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer