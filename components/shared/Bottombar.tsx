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
            <li><a href="/about">About Us</a></li>
  
            <li><a href="/feedback">feedback</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className={styles.customer}>
          <h3 className="text-light-3">My Account</h3>
          <ul className="text-gray-400 text-sm">
            <li><a href="/account">account profile</a></li>
            <li><a href="/account">Order History</a></li>
            <li><a href="/account">Shopping cart</a></li>
            <li><a href="/account">peel login</a></li>
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
            <li><a href="/services">managed print service</a></li>
            <li><a href="/services">reseller program </a></li>
            <li><a href="/services">web hosting</a></li>
            <li><a href="/services">digital signange</a></li>
            <li><a href="/services">onsite service contracts</a></li>
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


