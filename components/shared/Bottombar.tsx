"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from './bottombar.module.css'
import Script from 'next/script'

const Bottombar = () => {
  let date: Date = new Date();
  let year: number = date.getFullYear();
  return (
    <footer className={styles.bottomBar}>
      <div className={`${styles.bottomContent} customwidth mx-auto`}>
        <div className={styles.customer}>
          <h3 className="text-light-3">Customer Service</h3>
          <ul className="text-gray-400 text-sm">
            <li><a href="/company/careers">Careers</a></li>
  
            <li><a href="/contact">feedback</a></li>
            <li><a href="/policies/return-policy">Shipping & Returns</a></li>
            <li><a href="/company/privacy-policy">Privacy Policy</a></li>
            <li><a href="/company/testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div className={styles.customer}>
          <h3 className="text-light-3">My Account</h3>
          <ul className="text-gray-400 text-sm">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/cart">Shopping cart</a></li>
            <li><a href="/reset-password"></a>Forgot Password</li>
          </ul>
        </div> 
        <div className={styles.customer}>
          <h3 className="text-light-3">Contact Us</h3>
          <ul className="text-gray-400 text-sm">
            <li>Microcad Computer Corp.</li>
            <li>1-800-948-3572 <span>🇺🇸</span> <span>🇨🇦</span></li>
            <li> 
              </li>
            <li>Monday - Friday</li>
            <li>9:00am - 5:00pm</li>
          </ul>
        </div>
        <div className={styles.services}>
          <h3 className="text-light-3">Services</h3>
          <ul className="text-gray-400 text-sm">
            <li><a href="/services/managed-services-onsite">Managed onsite service</a></li>
            <li><a href="/services/reseller-program">Reseller program </a></li>
            <li><a href="/services/computer-repair">Computer repair</a></li>
            <li><a href="/services/digital-signage">Digital signange</a></li>
            <li><a href="/services/refurbrishing">Refurbrishing</a></li>
          </ul>
        </div>
      </div>
      <div className={`${styles.social} customwidth mx-auto`}>
        <div className={styles.socialMedia}>
          <div>
          <Icon icon="simple-icons:x" />
          </div>
          <div>
          <Icon icon="lucide:facebook" />
          </div>
          <div>
          <Icon icon="icon-park-outline:instagram" />
          </div>
        </div>
        <div className={styles.awards}>
          <div className={styles.award}>
            <img src="/static/media/images/awards/award1.jpg" alt="award" />
          </div>
          <div className={styles.award}>
            <img src="/static/media/images/awards/award2.png" alt="award" />
          </div>
          <div className={styles.award}>
            <img src="/static/media/images/awards/award3.gif" alt="award" />
          </div>
          <div className={styles.award}>
            <img src="/static/media/images/awards/award4.png" alt="award" />
          </div>
        </div>
      </div>
      <div className={`${styles.copyright} customwidth mx-auto px-4 pt-8`}>
        <p className="text-gray-400 text-sm ">© 1991 - {year}  Microcad Computer Corporation. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Bottombar


