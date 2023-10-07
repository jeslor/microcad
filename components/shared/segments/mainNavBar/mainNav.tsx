
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

            <ul className='flex text-primayColor'>
                <li className={styles.mainNavLinks}>
                    <a className={`${styles.innerMainNavLink} `} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                    <div className={styles.mainNavLinksSubMenu}>
                        <ul className="mainNavLinksSubMenuList bg-slate-100">
                            <li className="mainNavLinksSubMenuListItems"><a href="#">desktops</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">laptops</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">servers</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">workstations</a></li>
                        </ul>
                    </div>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <div className={styles.mainNavLinksSubMenu}>
                        <ul className={`${styles.mainNavLinksSubMenuList} bg-slate-100`}>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">desktops</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">laptops</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">servers</a></li>
                            <li className="mainNavLinksSubMenuListItems"><a href="#">workstations</a></li>
                        </ul>
                    </div>   
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>

                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">refubrished <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                </li>
                <li className={styles.mainNavLinks}>
                    <a className={styles.innerMainNavLink} href="#">special <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                </li>
                <li className={`pb-1 ${styles.navbarCart}`}><a href="#"><Icon icon="mdi:cart-outline"  /></a></li>
            </ul>
        </div>

    </div>
  )
}

export default MainNav