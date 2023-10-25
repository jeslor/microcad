
import Link from 'next/link'
import { useState } from 'react'
import styles from './mainNavBar.module.css'
import Image from 'next/image'
import Script from 'next/script'
import { Icon } from '@iconify/react/dist/iconify.js'
function MainNav() {
    const [showMenu, setShowMenu] = useState(false);
    const showMenuHandler = () => {
        let originalHeight: string = '';
        if (showMenu) {
            let div =  document.getElementsByTagName('body');
           div[0].style.overflow = 'auto';
            div[0].style.height = originalHeight;
            setShowMenu(false);
        }
        if (!showMenu) {
            let div =  document.getElementsByTagName('body');
            originalHeight =  `${div[0].clientHeight}px`;
            div[0].style.height = "100vh";
            div[0].style.overflow = 'hidden';
            setShowMenu(true);
         }
    }

    const mainNavLinkHolder = showMenu ? `${styles.mainNavLinksHolder} ${styles.mainNavLinksHolderActive}` : `${styles.mainNavLinksHolder}`
    const mobileMenuIcon = showMenu ? `${styles.mobileMenuIcon} ${styles.mobileMenuIconActive}` : `${styles.mobileMenuIcon}`

  return (
    <div className={`${styles.mainNav} shadow-sm`}>
        <Script src='/static/js/mainNav.js'/>
        <div className={`${styles.navContent} navContent`}>
            <div className={styles.mobileMenu} onClick={showMenuHandler}>
                <div className={mobileMenuIcon} >
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </div>
            <Link href='/' className="block pt-3 pb-2">
                <Image className={styles.navLogo} src="/static/media/microcad_logo.png" alt="Microcad Logo" width={200} height={20} />
            </Link>
            <div className={`${styles.mobileCart}`}>
                <ul>
                <li className={`pb-1 text-primayColor ${styles.navbarCart}`}><a href="#"><Icon icon="mdi:cart-outline"  /></a></li>
                <li className={`pb-1 text-primayColor ${styles.navbarCart}`}><a href="#"><Icon icon="clarity:search-line" /></a></li>
                </ul>

            </div>

            <ul className={`${mainNavLinkHolder} flex text-primayColor`}>
                <div className={`${styles.mainLinkMenu} bg-slate-100` }></div>
                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li className='hover:text-primayColor'><a href="/products/systems/thin_client"><Icon icon="clarity:thin-client-line" />Terminals/Thin Clients</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/desktop_computer"><Icon icon="radix-icons:desktop" /> desktop computers</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/workstations"><Icon icon="teenyicons:servers-outline" /> Workstations</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/laptops"><Icon icon="iconoir:laptop" />laptops</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/systems"><Icon icon="tdesign:system-log" />systems</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/servers"><Icon icon="bi:server" />servers</a></li>
                        <li className='hover:text-primayColor'><a href="/products/systems/extreme_series"><Icon icon="simple-icons:pcgamingwiki" />extreme series</a></li>

                    </ul>
                </li>

                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li ><a href="/products/hardware/cables"> <Icon icon="streamline:computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb" />cables</a></li>
                        <li><a href="/products/hardware/sound_cards"><Icon icon="bi:pci-card-sound" />sound cards </a></li>
                        <li><a href="/products/hardware/mother_boards"> <Icon icon="bi:motherboard" />motherboards</a></li>
                        <li><a href="/products/hardware/cooling"> <Icon icon="streamline:travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning" />cooling</a></li>
                        <li><a href="/products/hardware/cases"> <Icon icon="lucide:pc-case" />cases</a></li>
                        <li><a href="/products/hardware/processors"> <Icon icon="game-icons:processor" />processors</a></li>
                        <li><a href="/products/hardware/videocards"> <Icon icon="fluent:network-adapter-16-regular" />video cards</a></li>
                        <li><a href="/products/hardware/networkcards"> <Icon icon="bi:pci-card-network" />network cards</a></li>
                        <li><a href="/products/hardware/power_supply"><Icon icon="icon-park-outline:power-supply-one" />power supplies </a></li>
                        <li><a href="/products/hardware/optical_drives"> <Icon icon="gg:drive" />optical drives</a></li>
                        <li><a href="/products/hardware/adapters"> <Icon icon="material-symbols:ev-charger-outline-rounded" />adapters</a></li>
                        <li><a href="/products/hardware/accessories"> <Icon icon="mdi:car-turbocharger" />accessories</a></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>  
                    <ul>
                        <li><a href="/products/network/network_interface_cards"> <Icon icon="mdi:network-pos" />Network Interface Cards</a></li>
                        <li><a href="/products/network/media_converters"> <Icon icon="ion:git-network-outline" />Media Converters</a></li>
                        <li><a href="/products/network/firewalls_&_security"> <Icon icon="carbon:firewall-classic" />Firewalls & Security</a></li>
                        <li><a href="/products/network/print_servers"> <Icon icon="bi:cloud" />Print Servers</a></li>
                        <li><a href="/products/network/rackmount_LCDs"> <Icon icon="bi:router" />Rackmount LCDs</a></li>
                        <li><a href="/products/network/switchboxes"> <Icon icon="subway:switch" />Switchboxes</a></li>
                        <li><a href="/products/network/router_switches"> <Icon icon="bi:router" />Routers/Switches</a></li>
                        <li><a href="/products/network/wireless_devices"> <Icon icon="mdi:router-wireless" />Wireless Devices</a></li>
                        <li><a href="/products/network/modems"> <Icon icon="bi:modem" />Modems</a></li>
                        <li><a href="/products/network/powerline_network_adaptters"> <Icon icon="tabler:network" />Powerline Network Adapters</a></li>
                        <li><a href="/products/network/video_consoles"> <Icon icon="mdi:console-network-outline" />Video Consoles/Extenders</a></li>
                     
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a href="/products/storage/solid_state_drives"><Icon icon="clarity:ssd-line" /> Solid State Drives </a></li>
                    <li><a href="/products/storage/flash_drives"><Icon icon="solar:flash-drive-line-duotone" /> Flash Drives </a></li>
                    <li><a href="/products/storage/hard_drives"><Icon icon="mdi:harddisk" /> Hard Drives </a></li>
                    <li><a href="/products/storage/memory_cards"><Icon icon="bx:memory-card" />Memory cards</a></li>
                    <li><a href="/products/storage/SAN_drives"><Icon icon="mdi:network-attached-storage" /> SAN Devices </a></li>
                    <li><a href="/products/storage/NAS_drives"><Icon icon="ic:twotone-storage" /> NAS Devices </a></li>
                    <li><a href="/products/storage/optical_drives"><Icon icon="icon-park-outline:cloud-storage" /> optical drives </a></li>
                    <li><a href="/products/storage/storage_media"><Icon icon="carbon:file-storage" />storage media </a></li>
                    <li><a href="/products/storage/backup_&_mass_storage_devices"><Icon icon="material-symbols:home-storage-outline" /> backup & mass storage devices </a></li>
                    <li><a href="/products/storage/hard_drive_duplicators"><Icon icon="fluent-mdl2:merge-duplicate" /> hard drive duplicators </a></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a href="/products/display/monitors"><Icon icon="bi:display" /> Monitors </a></li>
                    <li><a href="/products/display/projectors"><Icon icon="bi:projector" /> Projectors </a></li>
                    <li><a href="/products/display/projector_lamps"><Icon icon="icon-park:projector" /> Projector Lamps </a></li>
                    <li><a href="/products/display/touchscreen"><Icon icon="teenyicons:hd-screen-outline" /> Touchscreen </a></li>
                    <li><a href="/products/display/digital_signage"><Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" /> Digital signage </a></li>    
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a href="/products/peripherals/keyboards"><Icon icon="carbon:keyboard" /> Keyboards </a></li>
                    <li><a href="/products/peripherals/mice"><Icon icon="cil:mouse" /> Mice </a></li>
                    <li><a href="/products/peripherals/scanners"><Icon icon="material-symbols:scanner-outline" />scanners </a></li>
                    <li><a href="/products/peripherals/mouse_and_keyboard_combo"><Icon icon="emojione-v1:keyboard-and-mouse" /> Mouse and Keyboard Combo </a></li>
                    <li><a href="/products/peripherals/speakers"><Icon icon="cil:speaker" /> Speakers </a></li>
                    <li><a href="/products/peripherals/printers"><Icon icon="uiw:printer" /> printers </a></li>
                    <li><a href="/products/peripherals/webcams"><Icon icon="ri:webcam-line" /> Webcams </a></li>
                    <li><a href="/products/peripherals/gaming_consoles"><Icon icon="game-icons:game-console" /> gaming consoles </a></li>
                    </ul>
                </li> 
                <div className={styles.onlyMobile}>
                <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                        <a className={styles.innerMainNavLink} href="/products/">refubrished </a>
                    </li>
                    <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                        <a className={styles.innerMainNavLink} href="/products/">special </a>
                    </li>  
                    <li className={`${styles.mainNavLinks} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">More <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a href="/services">services </a></li>
                    <li><a href="/partners">partners </a></li>
                    <li><a href="/policies">policies </a></li>
                    <li><a href="/company">About </a></li>
                    <li><a href="/company/awards">Awards </a></li>
                    <li><a href="/contact">Contact us </a></li>    
                    </ul>
                </li> 
                <li className={styles.iconsMobileMenu}>
                    <a className={styles.innerMainNavLink} href="/login"> <Icon className="text-lg pe-1" icon="mdi:login" /><span className='text-xs font-light'>Login</span> </a>
                    <a className={styles.innerMainNavLink} href="/register"><Icon className="text-lg pe-1" icon="mdi:account" /> <span className='text-xs font-light'>Register</span> </a>
                    <a className={styles.innerMainNavLink} href="/reset-password"><Icon className="text-lg pe-1" icon="mdi:lock-reset" /><span className='text-xs font-light'>forgot password</span> </a>


                </li>

                </div>
           
            </ul>
            <ul className={styles.extraMainMenu}>
                <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                    <a className={styles.innerMainNavLink} href="#">refubrished </a>
                </li>
                <li className={`${styles.mainNavLinks} text-secondaryColor`}>
                    <a className={styles.innerMainNavLink} href="#">special </a>
                </li>
                <li className={`pb-1 text-primayColor ${styles.navbarCart}`}><a href="#"><Icon icon="mdi:cart-outline"  /></a></li>
                <li className={`pb-1 text-primayColor ${styles.navbarCart}`}><a href="#"><Icon icon="clarity:search-line" /></a></li>
            </ul>
        </div>

    </div>
  )
}

export default MainNav