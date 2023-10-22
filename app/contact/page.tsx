
import styles from "@/styles/partners.module.css"
const page = () => {
  return (
    <div className={styles.pageHeight}>
        <div className={`${styles.contactHeader} bg-primayColor text-slate-200`}>
            <div className={styles.layer1}>
                {/* <img src="/static/media/backgrounds/partners.webp" alt="" /> */}
            </div>
            <div className={`${styles.contact} customwidth`}>
                <div className={` ${styles.contactParts}`}>
                    <h1>Contact us</h1>
                    <div className={styles.imageHolder}>
                        <img src="/static/media/images/contactus.webp" alt="partners" />
                    </div>
                </div>
                <div className={` ${styles.contactParts}`}>
                    <h2>Location</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Address:</span>
                         <div>
                        <p>Microcad Computer Corporation</p>
                        <p>4015 Dowell Drive</p>
                        <p>London, ON</p>
                        <p>N6L 1R1</p>
                        <p>Canada</p>
                            </div>
                            </li>
                        <li><span>Phone:</span> (519) 661-0355</li>
                        <li><span>Fax:</span> (519) 661-0362</li>
                    </ul>
                </div>
                <div className={` ${styles.contactParts}`}>
                    <h2>Hours of operation</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Monday:</span> 9am - 5pm</li>
                        <li><span>Tuesday:</span> 9am - 5pm</li>
                        <li><span>Wednesday:</span> 9am - 5pm</li>
                        <li><span>Thursday:</span> 9am - 5pm</li>
                        <li><span>Friday:</span> 9am - 5pm</li>
                        <li><span>Saturday & Sunday:</span> Closed</li>
                    </ul>
                </div>
            </div> 
            <div className={`${styles.contact} ${styles.secondContact} customwidth`}>
                <span></span>
                 <div className={` ${styles.contactParts}`}>
                    <h2>Location</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Address:</span>
                         <div>
                        <p>Microcad Computer Corp</p>
                        <p>45657 Port Street</p>
                        <p>Plymouth, MI</p>
                        <p>48170</p>
                        <p>USA</p>
                            </div>
                            </li>
                        <li><span>Phone(Toll free):</span> 1 (800) 948-3572</li>
                  
                    </ul>
                </div>
                <div className={` ${styles.contactParts}`}>
                    <h2>Hours of operation</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Monday:</span> 9am - 5pm</li>
                        <li><span>Tuesday:</span> 9am - 5pm</li>
                        <li><span>Wednesday:</span> 9am - 5pm</li>
                        <li><span>Thursday:</span> 9am - 5pm</li>
                        <li><span>Friday:</span> 9am - 5pm</li>
                        <li><span>Saturday & Sunday:</span> Closed</li>
                    </ul>
                </div>
            </div>
        </div>
   
    </div>
   
  )
}

export default page