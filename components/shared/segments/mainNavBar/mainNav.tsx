
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
                <div className={styles.mainLinkMenu}></div>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                   {/* <div className={`${styles.mainLinkMenu} bg-slate-100`}> */}
                    <ul>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="clarity:thin-client-line" />Terminals/Thin Clients</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="radix-icons:desktop" /> desktop computers</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="teenyicons:servers-outline" /> Workstations</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="iconoir:laptop" />laptops</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="tdesign:system-log" />systems</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="bi:pc-display-horizontal" />servers</a></li>
                        <li className='hover:text-primayColor'><a href="#"><Icon icon="simple-icons:pcgamingwiki" />extreme series</a></li>
                        <li className='hover:text-primayColor'><a href="#">rugged</a></li>
                        <li className='hover:text-primayColor'><a href="#">all in ones</a></li>
                        <li className='hover:text-primayColor'><a href="#">monitors</a></li>
                        <li className='hover:text-primayColor'><a href="#">printers</a></li>
                        <li className='hover:text-primayColor'><a href="#">scanners</a></li>
                        <li className='hover:text-primayColor'><a href="#">projectors</a></li>
                    </ul>
                   {/* </div> */}
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

                        </ul>
                     </div>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>  
                    <div className={`${styles.mainLinkMenu} bg-slate-100`}>
                        <ul>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="clarity:thin-client-line" />Terminals/Thin Clients</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="radix-icons:desktop" /> desktop computers</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="teenyicons:servers-outline" /> Workstations</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="iconoir:laptop" />laptops</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="tdesign:system-log" />systems</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="bi:pc-display-horizontal" />servers</a></li>
                            <li className='hover:text-primayColor'><a href="#"><Icon icon="simple-icons:pcgamingwiki" />extreme series</a></li>
                            <li className='hover:text-primayColor'><a href="#">rugged</a></li>
                            <li className='hover:text-primayColor'><a href="#">all in ones</a></li>
                        </ul>
                    </div>
                   
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                </li>
                <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                    <a className={styles.innerMainNavLink} href="#">refubrished </a>
                </li>
                <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                    <a className={styles.innerMainNavLink} href="#">special </a>
                </li>
                <li className={`pb-1 ${styles.navbarCart}`}><a href="#"><Icon icon="mdi:cart-outline"  /></a></li>
                <li className={`pb-1 ${styles.navbarCart}`}><a href="#"><Icon icon="clarity:search-line" /></a></li>
            </ul>
        </div>

    </div>
  )
}

export default MainNav