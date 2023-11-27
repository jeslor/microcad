"use client"
import {useContext } from 'react';
import { StateContext } from '@/components/providers/stateProvider';
import {usePathname, useParams} from 'next/navigation'
import styles from './mainNavBar.module.css'
import Image from 'next/image'
import Script from 'next/script'
import { Icon } from '@iconify/react/dist/iconify.js'
import NavCart from '@/components/single/cart/navCart'
import Link from 'next/link';
import { signOut } from 'next-auth/react';


function MainNav({user}:{user:any}) {
    let { parentCategory, category } = useParams();
    if (category) { 
        category =  category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase(); 
    }
  
  
    let path = usePathname();
        path = path.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();
    

    const {handleOpenSearch,showCartDrawer, handleToggleCartDrawer,cart,showMenu, showMenuHandler} = useContext(StateContext);
    
    const cartCount = cart!==null && cart.reduce((acc, item:any) => acc + item.quantity, 0)
    
    
    const mainNavLinkHolder = showMenu ? `${styles.mainNavLinksHolder} ${styles.mainNavLinksHolderActive}` : `${styles.mainNavLinksHolder}`
    const mobileMenuIcon = showMenu ? `${styles.mobileMenuIcon} ${styles.mobileMenuIconActive}` : `${styles.mobileMenuIcon}`
    
    

  return (
    <div className={`${styles.mainNav} `}>
        <Script src='/static/js/mainNav.js'/>

        <div className={`${styles.navContent} navContent`}>
            <div className={styles.mobileMenu} onClick={showMenuHandler}>
                <div className={mobileMenuIcon} >
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </div>

            <a href='/' className="block pt-3 pb-2 ">
                <Image className={styles.navLogo} src="/static/media/microcad_logo.png" alt="Microcad Logo" width={200} height={20} />
            </a>
            <div className={`${styles.mobileCart}`}>
                <ul>
                <li onClick={handleToggleCartDrawer} className={`pb-1 text-primayColor ${styles.navbarCart}`}><div><Icon icon="mdi:cart-outline"  />{cart.length >0 && <span className={styles.cartCount}>{cartCount}</span>}</div></li>
                <li onClick={handleOpenSearch} className={`pb-1 text-primayColor ${styles.navbarCart}`}><a href="#"><Icon icon="clarity:search-line" /></a></li>
                </ul>

            </div>
            <ul className={`${mainNavLinkHolder} ${styles.onlyDesktopView} text-primayColor`}>
                <div className={`${styles.mainLinkMenu} bg-slate-100` }></div>

                <li className={`${styles.mainNavLinks} ${parentCategory ==="systems" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li className='hover:text-primayColor'><Link className={`${category === 'thin client' && styles.activeSubMenu}`} href="/products/systems/thin_client"><Icon icon="clarity:thin-client-line" />Terminals/Thin Clients</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'desktop computers' && styles.activeSubMenu}`} href="/products/systems/desktop_computers"><Icon icon="radix-icons:desktop" /> desktop computers</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'workstations' && styles.activeSubMenu}`} href="/products/systems/workstations"><Icon icon="teenyicons:servers-outline" /> Workstations</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'laptops' && styles.activeSubMenu}`} href="/products/systems/laptops"><Icon icon="iconoir:laptop" />laptops</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'barebone systems' && styles.activeSubMenu}`} href="/products/systems/barebone_systems"><Icon icon="tdesign:system-log" />barebone systems</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'servers' && styles.activeSubMenu}`} href="/products/systems/servers"><Icon icon="bi:server" />servers</Link></li>
                        <li className='hover:text-primayColor'><Link className={`${category === 'extreme series' && styles.activeSubMenu}`} href="/products/systems/extreme_series"><Icon icon="simple-icons:pcgamingwiki" />extreme series</Link></li>

                    </ul>
                </li>

                <li className={`${styles.mainNavLinks} ${parentCategory ==="hardware" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li ><Link className={`${category === 'cables' && styles.activeSubMenu}`}  href="/products/hardware/cables"> <Icon icon="streamline:computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb" />cables</Link></li>
                        <li><Link className={`${category === 'sound cards' && styles.activeSubMenu}`}  href="/products/hardware/sound_cards"><Icon icon="bi:pci-card-sound" />sound cards </Link></li>
                        <li><Link className={`${category === 'motherboards' && styles.activeSubMenu}`}  href="/products/hardware/motherboards"> <Icon icon="bi:motherboard" />motherboards</Link></li>
                        <li><Link className={`${category === 'cooling' && styles.activeSubMenu}`}  href="/products/hardware/cooling"> <Icon icon="streamline:travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning" />cooling</Link></li>
                        <li><Link className={`${category === 'cases' && styles.activeSubMenu}`}  href="/products/hardware/cases"> <Icon icon="lucide:pc-case" />cases</Link></li>
                        <li><Link className={`${category === 'processors' && styles.activeSubMenu}`}  href="/products/hardware/processors"> <Icon icon="game-icons:processor" />processors</Link></li>
                        <li><Link className={`${category === 'video cards' && styles.activeSubMenu}`}  href="/products/hardware/video_cards"> <Icon icon="fluent:network-adapter-16-regular" />video cards</Link></li>
                        <li><Link className={`${category === 'power supplies' && styles.activeSubMenu}`}  href="/products/hardware/power_supplies"><Icon icon="icon-park-outline:power-supply-one" />power supplies </Link></li>
                        <li><Link className={`${category === 'optical drives' && styles.activeSubMenu}`}  href="/products/hardware/optical_drives"> <Icon icon="gg:drive" />optical drives</Link></li>
                        <li><Link className={`${category === 'adapters' && styles.activeSubMenu}`}  href="/products/hardware/adapters"> <Icon icon="material-symbols:ev-charger-outline-rounded" />adapters</Link></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="network" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>  
                    <ul>
                        <li><Link className={`${category === 'network interface cards' && styles.activeSubMenu}`} href="/products/network/network_interface_cards"> <Icon icon="mdi:network-pos" />Network Interface Cards</Link></li>
                        <li><Link className={`${category === 'media converters' && styles.activeSubMenu}`} href="/products/network/media_converters"> <Icon icon="ion:git-network-outline" />Media Converters</Link></li>
                        <li><Link className={`${category === 'firewalls & security' && styles.activeSubMenu}`} href="/products/network/firewalls_&_security"> <Icon icon="carbon:firewall-classic" />Firewalls & Security</Link></li>
                        <li><Link className={`${category === 'print servers' && styles.activeSubMenu}`} href="/products/network/print_servers"> <Icon icon="bi:cloud" />Print Servers</Link></li>
                        <li><Link className={`${category === 'rackmount lcds' && styles.activeSubMenu}`} href="/products/network/rackmount_LCDs"> <Icon icon="bi:router" />Rackmount LCDs</Link></li>
                        <li><Link className={`${category === 'switchboxes' && styles.activeSubMenu}`} href="/products/network/switchboxes"> <Icon icon="subway:switch" />Switchboxes</Link></li>
                        <li><Link className={`${category === 'router switches' && styles.activeSubMenu}`} href="/products/network/router_switches"> <Icon icon="bi:router" />Routers/Switches</Link></li>
                        <li><Link className={`${category === 'wireless devices' && styles.activeSubMenu}`} href="/products/network/wireless_devices"> <Icon icon="mdi:router-wireless" />Wireless Devices</Link></li>
                        <li><Link className={`${category === 'modems' && styles.activeSubMenu}`} href="/products/network/modems"> <Icon icon="bi:modem" />Modems</Link></li>
                        <li><Link className={`${category === 'powerline network adapters' && styles.activeSubMenu}`} href="/products/network/powerline_network_adapters"> <Icon icon="tabler:network" />Powerline Network Adapters</Link></li>                     
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="storage" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><Link className={`${category === 'solid state drives' && styles.activeSubMenu}`} href="/products/storage/solid_state_drives"><Icon icon="clarity:ssd-line" /> Solid State Drives </Link></li>
                    <li><Link className={`${category === 'flash drives' && styles.activeSubMenu}`} href="/products/storage/flash_drives"><Icon icon="solar:flash-drive-line-duotone" /> Flash Drives </Link></li>
                    <li><Link className={`${category === 'hard drives' && styles.activeSubMenu}`} href="/products/storage/hard_drives"><Icon icon="mdi:harddisk" /> Hard Drives </Link></li>
                    <li><Link className={`${category === 'memory cards' && styles.activeSubMenu}`} href="/products/storage/memory_cards"><Icon icon="bx:memory-card" />Memory cards</Link></li>
                    <li><Link className={`${category === 'san devices' && styles.activeSubMenu}`} href="/products/storage/SAN_devices"><Icon icon="mdi:network-attached-storage" /> SAN Devices </Link></li>
                    <li><Link className={`${category === 'nas devices' && styles.activeSubMenu}`} href="/products/storage/NAS_devices"><Icon icon="ic:twotone-storage" /> NAS Devices </Link></li>
                    <li><Link className={`${category === 'storage media' && styles.activeSubMenu}`} href="/products/storage/storage_media"><Icon icon="carbon:file-storage" />storage media </Link></li>
                    <li><Link className={`${category === 'backup & mass storage devices' && styles.activeSubMenu}`} href="/products/storage/backup_&_mass_storage_devices"><Icon icon="material-symbols:home-storage-outline" /> backup & mass storage devices </Link></li>
                    <li><Link className={`${category === 'hard drive duplicators' && styles.activeSubMenu}`} href="/products/storage/hard_drive_duplicators"><Icon icon="fluent-mdl2:merge-duplicate" /> hard drive duplicators </Link></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="display" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><Link className={`${category === 'monitors' && styles.activeSubMenu}`} href="/products/display/monitors"><Icon icon="bi:display" /> Monitors </Link></li>
                    <li><Link className={`${category === 'projectors' && styles.activeSubMenu}`} href="/products/display/projectors"><Icon icon="bi:projector" /> Projectors </Link></li>
                    <li><Link className={`${category === 'projector lamps' && styles.activeSubMenu}`} href="/products/display/projector_lamps"><Icon icon="icon-park:projector" /> Projector Lamps </Link></li>
                    <li><Link className={`${category === 'touchscreen' && styles.activeSubMenu}`} href="/products/display/touchscreen"><Icon icon="teenyicons:hd-screen-outline" /> Touchscreen </Link></li>
                    <li><Link className={`${category === 'digital signage' && styles.activeSubMenu}`} href="/products/display/digital_signage"><Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" /> Digital signage </Link></li>    
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="peripherals" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><Link className={`${category === 'keyboards' && styles.activeSubMenu}`} href="/products/peripherals/keyboards"><Icon icon="carbon:keyboard" /> Keyboards </Link></li>
                    <li><Link className={`${category === 'mice' && styles.activeSubMenu}`} href="/products/peripherals/mice"><Icon icon="cil:mouse" /> Mice </Link></li>
                    <li><Link className={`${category === 'scanners' && styles.activeSubMenu}`} href="/products/peripherals/scanners"><Icon icon="material-symbols:scanner-outline" />scanners </Link></li>
                    <li><Link className={`${category === 'mouse and keyboard combo' && styles.activeSubMenu}`} href="/products/peripherals/mouse_and_keyboard_combo"><Icon icon="emojione-v1:keyboard-and-mouse" /> Mouse and Keyboard Combo </Link></li>
                    <li><Link className={`${category === 'printers' && styles.activeSubMenu}`} href="/products/peripherals/printers"><Icon icon="uiw:printer" /> printers </Link></li>
                    <li><Link className={`${category === 'gaming consoles' && styles.activeSubMenu}`} href="/products/peripherals/gaming_consoles"><Icon icon="game-icons:game-console" /> gaming consoles </Link></li>
                    </ul>
                </li> 
            </ul>

            <ul className={`${mainNavLinkHolder} ${styles.onlyMobileView} text-primayColor`}>
                <div className={`${styles.mainLinkMenu} bg-slate-100` }></div>

                <li className={`${styles.mainNavLinks} ${parentCategory ==="systems" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li className='hover:text-primayColor'><a className={`${category === 'thin client' && styles.activeSubMenu}`} href="/products/systems/thin_client"><Icon icon="clarity:thin-client-line" />Terminals/Thin Clients</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'desktop computers' && styles.activeSubMenu}`} href="/products/systems/desktop_computers"><Icon icon="radix-icons:desktop" /> desktop computers</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'workstations' && styles.activeSubMenu}`} href="/products/systems/workstations"><Icon icon="teenyicons:servers-outline" /> Workstations</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'laptops' && styles.activeSubMenu}`} href="/products/systems/laptops"><Icon icon="iconoir:laptop" />laptops</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'barebone systems' && styles.activeSubMenu}`} href="/products/systems/barebone_systems"><Icon icon="tdesign:system-log" />barebone systems</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'servers' && styles.activeSubMenu}`} href="/products/systems/servers"><Icon icon="bi:server" />servers</a></li>
                        <li className='hover:text-primayColor'><a className={`${category === 'extreme series' && styles.activeSubMenu}`} href="/products/systems/extreme_series"><Icon icon="simple-icons:pcgamingwiki" />extreme series</a></li>

                    </ul>
                </li>

                <li className={`${styles.mainNavLinks} ${parentCategory ==="hardware" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>  
                    <ul>
                        <li ><a className={`${category === 'cables' && styles.activeSubMenu}`}  href="/products/hardware/cables"> <Icon icon="streamline:computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb" />cables</a></li>
                        <li><a className={`${category === 'sound cards' && styles.activeSubMenu}`}  href="/products/hardware/sound_cards"><Icon icon="bi:pci-card-sound" />sound cards </a></li>
                        <li><a className={`${category === 'motherboards' && styles.activeSubMenu}`}  href="/products/hardware/motherboards"> <Icon icon="bi:motherboard" />motherboards</a></li>
                        <li><a className={`${category === 'cooling' && styles.activeSubMenu}`}  href="/products/hardware/cooling"> <Icon icon="streamline:travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning" />cooling</a></li>
                        <li><a className={`${category === 'cases' && styles.activeSubMenu}`}  href="/products/hardware/cases"> <Icon icon="lucide:pc-case" />cases</a></li>
                        <li><a className={`${category === 'processors' && styles.activeSubMenu}`}  href="/products/hardware/processors"> <Icon icon="game-icons:processor" />processors</a></li>
                        <li><a className={`${category === 'video cards' && styles.activeSubMenu}`}  href="/products/hardware/video_cards"> <Icon icon="fluent:network-adapter-16-regular" />video cards</a></li>
                        <li><a className={`${category === 'power supplies' && styles.activeSubMenu}`}  href="/products/hardware/power_supplies"><Icon icon="icon-park-outline:power-supply-one" />power supplies </a></li>
                        <li><a className={`${category === 'optical drives' && styles.activeSubMenu}`}  href="/products/hardware/optical_drives"> <Icon icon="gg:drive" />optical drives</a></li>
                        <li><a className={`${category === 'adapters' && styles.activeSubMenu}`}  href="/products/hardware/adapters"> <Icon icon="material-symbols:ev-charger-outline-rounded" />adapters</a></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="network" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">network <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>  
                    <ul>
                        <li><a className={`${category === 'network interface cards' && styles.activeSubMenu}`} href="/products/network/network_interface_cards"> <Icon icon="mdi:network-pos" />Network Interface Cards</a></li>
                        <li><a className={`${category === 'media converters' && styles.activeSubMenu}`} href="/products/network/media_converters"> <Icon icon="ion:git-network-outline" />Media Converters</a></li>
                        <li><a className={`${category === 'firewalls & security' && styles.activeSubMenu}`} href="/products/network/firewalls_&_security"> <Icon icon="carbon:firewall-classic" />Firewalls & Security</a></li>
                        <li><a className={`${category === 'print servers' && styles.activeSubMenu}`} href="/products/network/print_servers"> <Icon icon="bi:cloud" />Print Servers</a></li>
                        <li><a className={`${category === 'rackmount lcds' && styles.activeSubMenu}`} href="/products/network/rackmount_LCDs"> <Icon icon="bi:router" />Rackmount LCDs</a></li>
                        <li><a className={`${category === 'switchboxes' && styles.activeSubMenu}`} href="/products/network/switchboxes"> <Icon icon="subway:switch" />Switchboxes</a></li>
                        <li><a className={`${category === 'router switches' && styles.activeSubMenu}`} href="/products/network/router_switches"> <Icon icon="bi:router" />Routers/Switches</a></li>
                        <li><a className={`${category === 'wireless devices' && styles.activeSubMenu}`} href="/products/network/wireless_devices"> <Icon icon="mdi:router-wireless" />Wireless Devices</a></li>
                        <li><a className={`${category === 'modems' && styles.activeSubMenu}`} href="/products/network/modems"> <Icon icon="bi:modem" />Modems</a></li>
                        <li><a className={`${category === 'powerline network adapters' && styles.activeSubMenu}`} href="/products/network/powerline_network_adapters"> <Icon icon="tabler:network" />Powerline Network Adapters</a></li>                     
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="storage" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">storage <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a className={`${category === 'solid state drives' && styles.activeSubMenu}`} href="/products/storage/solid_state_drives"><Icon icon="clarity:ssd-line" /> Solid State Drives </a></li>
                    <li><a className={`${category === 'flash drives' && styles.activeSubMenu}`} href="/products/storage/flash_drives"><Icon icon="solar:flash-drive-line-duotone" /> Flash Drives </a></li>
                    <li><a className={`${category === 'hard drives' && styles.activeSubMenu}`} href="/products/storage/hard_drives"><Icon icon="mdi:harddisk" /> Hard Drives </a></li>
                    <li><a className={`${category === 'memory cards' && styles.activeSubMenu}`} href="/products/storage/memory_cards"><Icon icon="bx:memory-card" />Memory cards</a></li>
                    <li><a className={`${category === 'san devices' && styles.activeSubMenu}`} href="/products/storage/SAN_devices"><Icon icon="mdi:network-attached-storage" /> SAN Devices </a></li>
                    <li><a className={`${category === 'nas devices' && styles.activeSubMenu}`} href="/products/storage/NAS_devices"><Icon icon="ic:twotone-storage" /> NAS Devices </a></li>
                    <li><a className={`${category === 'storage media' && styles.activeSubMenu}`} href="/products/storage/storage_media"><Icon icon="carbon:file-storage" />storage media </a></li>
                    <li><a className={`${category === 'backup & mass storage devices' && styles.activeSubMenu}`} href="/products/storage/backup_&_mass_storage_devices"><Icon icon="material-symbols:home-storage-outline" /> backup & mass storage devices </a></li>
                    <li><a className={`${category === 'hard drive duplicators' && styles.activeSubMenu}`} href="/products/storage/hard_drive_duplicators"><Icon icon="fluent-mdl2:merge-duplicate" /> hard drive duplicators </a></li>
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="display" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">display <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a className={`${category === 'monitors' && styles.activeSubMenu}`} href="/products/display/monitors"><Icon icon="bi:display" /> Monitors </a></li>
                    <li><a className={`${category === 'projectors' && styles.activeSubMenu}`} href="/products/display/projectors"><Icon icon="bi:projector" /> Projectors </a></li>
                    <li><a className={`${category === 'projector lamps' && styles.activeSubMenu}`} href="/products/display/projector_lamps"><Icon icon="icon-park:projector" /> Projector Lamps </a></li>
                    <li><a className={`${category === 'touchscreen' && styles.activeSubMenu}`} href="/products/display/touchscreen"><Icon icon="teenyicons:hd-screen-outline" /> Touchscreen </a></li>
                    <li><a className={`${category === 'digital signage' && styles.activeSubMenu}`} href="/products/display/digital_signage"><Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" /> Digital signage </a></li>    
                    </ul>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="peripherals" && styles.mainNavLinksActive} openNavLinkMenu`}>
                    <a className={styles.innerMainNavLink} href="#">peripherals <Icon className={styles.mainNavLinksIcon} icon="ep:arrow-down" /></a>
                    <ul>
                    <li><a className={`${category === 'keyboards' && styles.activeSubMenu}`} href="/products/peripherals/keyboards"><Icon icon="carbon:keyboard" /> Keyboards </a></li>
                    <li><a className={`${category === 'mice' && styles.activeSubMenu}`} href="/products/peripherals/mice"><Icon icon="cil:mouse" /> Mice </a></li>
                    <li><a className={`${category === 'scanners' && styles.activeSubMenu}`} href="/products/peripherals/scanners"><Icon icon="material-symbols:scanner-outline" />scanners </a></li>
                    <li><a className={`${category === 'mouse and keyboard combo' && styles.activeSubMenu}`} href="/products/peripherals/mouse_and_keyboard_combo"><Icon icon="emojione-v1:keyboard-and-mouse" /> Mouse and Keyboard Combo </a></li>
                    <li><a className={`${category === 'printers' && styles.activeSubMenu}`} href="/products/peripherals/printers"><Icon icon="uiw:printer" /> printers </a></li>
                    <li><a className={`${category === 'gaming consoles' && styles.activeSubMenu}`} href="/products/peripherals/gaming_consoles"><Icon icon="game-icons:game-console" /> gaming consoles </a></li>
                    </ul>
                </li> 
                <div className={styles.onlyMobile}>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="refurbrished" && styles.mainNavLinksActive} text-secondaryColor`}>
                        <a className={styles.innerMainNavLink} href="/products/refurbrished">refurbrished </a>
                    </li>
                    <li className={`${styles.mainNavLinks} ${parentCategory ==="specialOffer" && styles.mainNavLinksActive} text-secondaryColor`}>
                        <a className={styles.innerMainNavLink} href="/products/specialOffer">special </a>
                    </li>  
                    <li className={`${styles.mainNavLinks} ${parentCategory ==="more" && styles.mainNavLinksActive} openNavLinkMenu`}>
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
                    { user ? 
                        (
                            <>
                                <a className={styles.innerMainNavLink} href={`/account/${user._id}`}><Icon className="text-lg pe-1" icon="mdi:account" /><span className='text-xs font-light'>{user!.firstName}</span></a>
                                <a onClick={()=>signOut} className={styles.innerMainNavLink} href="/api/auth/signout"><Icon className="text-lg pe-1" icon="mdi:logout" /><span className='text-xs font-light'>Logout</span></a>
                            </>
                        ):(<>
                            <a className={styles.innerMainNavLink} href="/login"> <Icon className="text-lg pe-1" icon="mdi:login" /><span className='text-xs font-light'>Login</span> </a>
                            <a className={styles.innerMainNavLink} href="/register"><Icon className="text-lg pe-1" icon="mdi:account" /> <span className='text-xs font-light'>Register</span> </a>
                            <a className={styles.innerMainNavLink} href="/reset-password"><Icon className="text-lg pe-1" icon="mdi:lock-reset" /><span className='text-xs font-light'>forgot password</span> </a>
                            </>
                        )      
                    }
                </li>
                </div>
            </ul>
            <ul className={styles.extraMainMenu}>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="refurbrished" && styles.mainNavLinksActive} text-secondaryColor`}>
                    <Link className={styles.innerMainNavLink} href="/products/refurbrished">refurbrished </Link>
                </li>
                <li className={`${styles.mainNavLinks} ${parentCategory ==="specialOffer" && styles.mainNavLinksActive} text-secondaryColor`}>
                    <Link className={styles.innerMainNavLink} href="/products/specialOffer">special </Link>
                </li>
                <li onClick={handleToggleCartDrawer} className={`pb-1 text-primayColor ${styles.navbarCart}`}>
                    <div >
                        <Icon icon="mdi:cart-outline"  />
                        {cart.length >0 && <span className={styles.cartCount}>{cartCount}</span>}
                    </div>
                </li>
                <li onClick={handleOpenSearch} className={`pb-1 text-primayColor ${styles.navbarCart}`}><a><Icon icon="clarity:search-line" /></a></li>
            </ul>
        </div>
        {showCartDrawer && <NavCart />

        }

    </div>
  )
}

export default MainNav