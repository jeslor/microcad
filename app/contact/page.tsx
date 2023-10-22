"use client"
import styles from "@/styles/partners.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"
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
                    <h2 className="border-t-2 pt-3 border-slate-300 mt-7 border-opacity-50">Hours of operation</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Monday to Friday:</span> 9am - 5pm</li>
                        <li><span>Saturday & Sunday:</span> Closed</li>
                    </ul>
                </div>
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
                    <h2 className="border-t-2 pt-3 border-slate-300 mt-7 border-opacity-50">Hours of operation</h2>
                    <ul className={`${styles.firstlevel} text-slate-400`}>
                        <li><span>Monday to Friday:</span> 9am - 5pm</li>
                        <li><span>Saturday & Sunday:</span> Closed</li>
                    </ul>
                </div>
            </div> 
        </div>
        <section className={`${styles.contactPeople}  customwidth`}>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Canada & USA Sales</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">ext 1</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">salesteam@microcad.ca</p>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Managed Services (MSP)</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p  className="text-sm text-slate-500">519-937-9039</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <a href="https://support.microcad.ca" className="text-sm text-slate-500 cursor-pointer">create a ticket</a>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Africa Sales</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">+256 706 667888</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">jeslor@microcad.ca</p>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">India Sales</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">+919803971280</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">aneet@microcad.ca</p>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Latin America                           Residencial Sosua Ocean Village, Villas las Palmas, Villa 10. Sosua, Puerto Plata. 57000</p>
                        <p className="text-sm text-slate-500">  RMA Returns</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">(Toll Free): 1 (800) 948-3572</p>
                        <p className="text-sm text-slate-500">xt 2</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <a href="https://support.microcad.ca" className="text-sm text-slate-500">https://support.microcad.ca</a>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Technical Support</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">ext 2</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <a href="https://support.microcad.ca" className="text-sm text-slate-500">https://support.microcad.ca</a>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">WSIB Service</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">ext 3</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">wsib@microcad.ca</p>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Shipping/Receiving/E-waste</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">ext 5</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">shipping@microcad.ca</p>
                    </div>
            </div>
            <div className={styles.contactPerson}>
                <div className={styles.imageHolder}>
                <Icon icon="fluent-mdl2:contact" />
                </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Department</h4>
                        <p className="text-sm text-slate-500">Accounting</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">Extension</h4>
                        <p className="text-sm text-slate-500">ext 4</p>
                    </div>
                    <div className={styles.segment}>
                        <h4 className="text-primaryLight font-semibold">contact/Email</h4>
                        <p className="text-sm text-slate-500">accounting@microcad.ca</p>
                    </div>
            </div>
        </section>
        <section className={`${styles.places}  customwidth`}>
            
                <h4>Canada Warehouses <Icon icon="twemoji:flag-canada" /></h4>
                <div className={styles.place}>
                    <span>London, ON</span>	
                    <span>Guelph, ON</span>
                    <span>Halifax, NS</span>
                    <span>Vancouver, BC</span>
                    <span>Calgary, AB</span>
                    <span>Toronto, ON</span>
                </div>

                <h4>United States ware Warehouses <Icon icon="twemoji:flag-united-states" /></h4>
                <div className={styles.place}>
                <span>Norcross, GA</span>
<span>Chantilly, VA</span>
<span>Miami, FL</span>
<span>Keasbey, NJ</span>
<span>Grove City, OH</span>
<span>Romeoville, IL</span>
<span>Olive Branch, MS</span>
<span>Richardson, TX</span>
<span>Fremont, CA</span>
<span>Ontario, CA</span>
<span>Harrisburg, PA</span>
<span>Atlanta, GA</span>
<span>Beaverton, OR</span>
<span>Chicago, IL </span>	
<span>Fresno, CA</span>

                </div>
    
        </section>
    </div>
   
  )
}

export default page