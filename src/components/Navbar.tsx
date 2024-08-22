"use client"
import React, { useState } from 'react'
import styles from '../components/Navbar.module.css'
import logo from '../assets/Group.svg'
import logo1 from '../assets/Group (1).svg'
import Image from 'next/image'
import Link from 'next/link'
import bell_icon from '../assets/bell_icon.svg'
import john_doe from '../assets/john_doe.svg'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
        <nav id={styles.nav}>
            <div id={styles.logobar}>
                <div id={styles.imgbox1}>
                    <Image src={logo} alt='logo' className={styles.logimages} />
                </div>

                <div id={styles.imgbox2}>
                    <Image src={logo1} alt="logo1" className={styles.logimages} />
                </div>
                <span id={styles.toggle}>
                    <button type='button'  onClick={toggleMenu} >☰</button>
                </span>
            </div>
            <div id={styles.link_bar} className={isOpen ? styles.open : ''}>
                <ul>
                    <li style={{ height: '23px', width: '44px' }} className={styles.links}><Link className={styles.linktag} href="">About</Link></li>

                    <li style={{ height: '23px', width: '44px' }} className={styles.links}><Link className={styles.linktag} href="">Offers</Link></li>

                    <li style={{ width: '77px', height: '23px' }} className={styles.links}><Link className={styles.linktag} href="">Coporate</Link></li>

                    <li style={{ width: '64px', height: '23px' }} className={styles.links}><Link className={styles.linktag} href="">Personal</Link></li>

                    <li style={{ width: '71px', height: ' 23px' }} className={styles.links}><Link className={styles.linktag} href="">Locations</Link></li>

                    <li style={{ width: '82px', height: '23px' }} className={styles.links}><Link className={styles.linktag} href="" style={{ fontSize: '14px' }}>Contact Us</Link> </li>
                </ul>
                <div id={styles.notification}>
                    <div style={{ height: '24px', width: '24px' }}>
                        <Image src={bell_icon} alt="bell" />
                    </div>
                    <div style={{ width: '114px', height: '29px' }}>
                        <Image src={john_doe} alt="john_doe" />
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar
