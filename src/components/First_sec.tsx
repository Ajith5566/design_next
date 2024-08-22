"use client"
import React, { useState } from 'react'
import styles from '../components/First_sec.module.css'
import apple from '../assets/apple_black.svg'
import google from '../assets/google_black.svg'
import Image from 'next/image'
import bg from '../assets/background.svg'
useState
function First_sec() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const togglemenu = () => {
        setIsOpen(!isOpen);
        setIsOpen1(false);
    };
    const togglemenu1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen(false);
    };
    const togglemenu3 = () => {
        setIsOpen3(!isOpen3);
        if (isOpen3) {
            setIsOpen1(false);
            setIsOpen(false);
        }
    };
    return (
        <>
            <section id={styles.first_sec} style={{ backgroundImage: `url(${bg.src})` }}>
                {/* first */}
                <div id={styles.f_sec_firstdiv}>
                    <p id={styles.firstdiv_p1}>Same as pick_up</p>
                    <p id={styles.firstdiv_p2}>Different Drop-Off</p>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn} >Select vehicle type▼</button>
                        <div className={styles.dropdown_content}>
                            <a href="#">SUV</a>
                            <a href="#">Sedan</a>
                            <a href="#">Luxury</a>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div id={styles.f_sec_firstdiv1}>
                    {/* location */}
                    <form action="" id={styles.location} >
                        <select name="cars" id={styles.cars}>
                            <option value="volvo"> Al Quoz</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br /><br />
                    </form>
                    <input type="datetime-local" value="2023-10-23T09:00:00" className={styles.date} />
                    <input type="datetime-local" value="2023-11-29T09:00:00" className={styles.date} />
                    <button id={styles.f_sec_button} >Quick book</button>
                </div>
                <div id={styles.f_sec_firstdiv2}>
                    <p>Download our App for easy accessibility anytime, anywhere!</p>
                    <div id={styles.apple_div}>
                        <Image src={apple} style={{ marginLeft: '19px' }} alt="apple" />
                        <Image src={google} style={{ marginLeft: '9px' }} alt="apple" />
                    </div>
                </div>
            </section>
            {/* main button */}
            <section id={styles.mainbutsection}>
                <button style={{ backgroundColor: '#E21E26', color: '#FFFFFF' }} onClick={togglemenu3} className={styles.mainButton}>Book a Car</button>
                <button style={{ backgroundColor: '#FFFFFF', color: '#E21E26', border: '1px solid #E21E26' }} className={styles.mainButton}>Quick Book</button>
            </section>
            {/* mobile section */}
            <section id={styles.mobile} style={{ display: isOpen3 ? 'block' : 'none' }} >
                <div id={styles.mobile1}>
                    <div id={styles.mobbuttons}>
                        <button type='button' className={styles.mobutton} onClick={togglemenu}>Same as pick up</button>
                        <button type='button' className={styles.mobutton} onClick={togglemenu1}>Different drop_Off</button>
                        <button type='button' className={styles.mobutton} > Select vehicle type▼</button>

                    </div>
                    <div style={{ display: isOpen ? 'block' : 'none' }} className={isOpen ? styles.open : ''}>
                        <div className={styles.mobdivs}>
                            <select name="cars" className={styles.cars1}>
                                <option value="volvo">Pickup Location</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={styles.mobdivs}>
                            <input type="datetime-local" value="2023-10-23T09:00:00" className={styles.mobdate} />
                        </div>
                        <div className={styles.mobdivs}><input type="datetime-local" value="2023-10-23T09:00:00" className={styles.mobdate} /></div>
                    </div>
                    {/* second */}
                    <div style={{ display: isOpen1 ? 'block' : 'none' }} className={isOpen1 ? styles.open : ''}>
                        <div className={styles.mobdivs}>
                            <select name="cars" className={styles.cars1}>
                                <option value="volvo">Pickup Location</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={styles.mobdivs}>
                            <select name="cars" className={styles.cars1}>
                                <option value="volvo">Drop-Off Location</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={styles.mobdivs}>
                            <input type="datetime-local" value="2023-10-23T09:00:00" className={styles.mobdate} />
                        </div>
                        <div className={styles.mobdivs}><input type="datetime-local" value="2023-10-23T09:00:00" className={styles.mobdate} /></div>
                    </div>
                    <div id={styles.search_div}><button id={styles.search}>Search</button></div>
                </div>
            </section>
        </>
    )
}

export default First_sec