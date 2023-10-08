
import Link from 'next/link'
import styles from './mainNavBar.module.css'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
function MainNav() {
  return (
    <div className={`${styles.mainNav}`}>
        <div className="navContent">
        <Link href='/' className="block pt-3 pb-2 ">
                <Image src="/media/microcad_logo.png" alt="Microcad Logo" width={200} height={20} />
            </Link>

            <ul className={`${styles.mainNavLinksHolder} flex text-primayColor`}>
           
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                   <div className={`${styles.mainLinkMenu} bg-slate-100`}>
                    <ul>
                        <li><a href="#">desktops</a></li>
                        <li><a href="#">laptops</a></li>
                        <li><a href="#">servers</a></li>
                        <li><a href="#">workstations</a></li>
                        <li><a href="#">tablets</a></li>
                        <li><a href="#">thin clients</a></li>
                        <li><a href="#">point of sale</a></li>
                        <li><a href="#">rugged</a></li>
                        <li><a href="#">all in ones</a></li>
                        <li><a href="#">monitors</a></li>
                        <li><a href="#">printers</a></li>
                        <li><a href="#">scanners</a></li>
                        <li><a href="#">projectors</a></li>
                    </ul>
                   </div>
                </li>

                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <div className={`${styles.mainLinkMenu} bg-slate-100`}>
                    <ul>
                        <li><a href="#">cpu</a></li>
                        <li><a href="#">memory</a></li>
                        <li><a href="#">motherboards</a></li>
                        <li><a href="#">hard drives</a></li>
                        <li><a href="#">solid state drives</a></li>
                        <li><a href="#">flash memory</a></li>
                        <li><a href="#">video cards</a></li>
                        <li><a href="#">sound cards</a></li>
                        <li><a href="#">network cards</a></li>
                        <li><a href="#">power supplies</a></li>
                        <li><a href="#">cases</a></li>
                        <li><a href="#">optical drives</a></li>
                        <li><a href="#">cables</a></li>
                        <li><a href="#">adapters</a></li>
                        <li><a href="#">controllers</a></li>
                        <li><a href="#">chassis</a></li>
                        <li><a href="#">cooling</a></li>
                        <li><a href="#">accessories</a></li>
                        <li><a href="#">chassis</a></li>
                        <li><a href="#">cooling</a></li>
                        <li><a href="#">accessories</a></li>
                        </ul>
                     </div>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>  
                   
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">refubrished <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">special <Icon className={styles. mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={`pb-1 ${styles.navbarCart}`}><a href="#"><Icon icon="mdi:cart-outline"  /></a></li>
            </ul>
        </div>

    </div>
  )
}

export default MainNav