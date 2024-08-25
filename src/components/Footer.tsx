import React from 'react'
import styles from '../components/Footer.module.css'
import Image from 'next/image'
import last_logo from '../assets/last_logo.svg'
import social_media from '../assets/social_media.svg'
import final from '../assets/image 273.svg'
import social from '../assets/social_media_black.svg'
function Footer() {
  return (
    <>
        <section id={styles.final_div}>
            <div id={styles.final_div1}>
                <Image src={last_logo} alt="last_logo" />
                <p>Member of the <br/> Al Habtoor Group</p>
            </div>
            <div id={styles.final_div2}>
                <div className={styles.final_divs} style={{marginTop:'0px'}}>
                    <p className={styles.final_divsp}>Home</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '83.5px'}}>Offers</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '97px'}}>FAQ</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '135px'}}>Career</p>
                </div>
                <div className={styles.final_divs}>
                    <p  className={styles.final_divsp} >About Us</p>
                    <p  className={styles.final_divsp} style={{marginLeft: '64px'}}>Locations</p>
                    <p  className={styles.final_divsp} style={{marginLeft: '73px'}}>Privacy Policy</p>
                    <p  className={styles.final_divsp}  style={{marginLeft: '71px'}}>Terms & Conditions</p>
                </div>
                <div className={styles.final_divs}>
                    <p  className={styles.final_divsp}  >Services</p>
                    <p  className={styles.final_divsp}  style={{marginLeft: '68px'}}>Contact Us</p>
                    <p  className={styles.final_divsp}  style={{marginLeft: '64px'}}>Service Request</p>
                </div>
                <div className={styles.final_divs}>
                    <p className={styles.final_divsp} >Al Habtoor Companies</p>
                </div>
                <div className={styles.final_divs}>
                    <p className={styles.final_divsp} >Hospitality</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '21px'}}>Real Estate</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '21px'}}>Education</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '21px'}}>Publishing</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '21px'}}>Automotive</p>
                    <p className={styles.final_divsp}  style={{marginLeft: '21px'}}>Vehicle Leasing</p>
                </div>
                
            </div>
            <div id={styles.final_div3}>
                <p>fOLLOW US ON</p>
                <Image style={{marginTop: '10px'}} src={social_media} alt="social_media" />
                <Image style={{marginTop: '31.4px'}} src={final} alt="final" />
            </div>
     </section>
        <section id={styles.final_divm}>
            <div id={styles.final_divm1}>
                <Image src={last_logo} alt="last_logo" />
                <p>Member of the <br/> Al Habtoor Group</p>
                <Image style={{marginTop: '10px',marginLeft:'auto'}} src={social} alt="social_media" />
            </div>
            <div id={styles.final_divm2}>
                <div className={styles.final_divms} style={{marginTop:'0px'}}>
                    <p className={` ${styles.final_divmsp} ${styles.pblack}`}>Home</p>
                    <p className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '16px'}}>Offers</p>                    
                    <p className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '16px'}}>Career</p>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`} style={{marginLeft: '16px'}} >About Us</p>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`} style={{marginLeft: '16px'}}>Locations</p>
                </div>
                <div className={styles.final_divms}>                   
                    <p className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '3px'}}>FAQ</p>
                
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '16px'}}>Service Request</p>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '16px'}}>Terms & Conditions</p>
                </div>
                <div className={styles.final_divms}>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`}  >Services</p>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`}  style={{marginLeft: '16px'}}>Contact Us</p>
                    <p  className={` ${styles.final_divmsp} ${styles.pblack}`} style={{marginLeft: '16px'}}>Privacy Policy</p>
                   
                </div>
                <div className={styles.mobilecolor}>
                    <div className={styles.final_divms } style={{paddingTop:'10px'}}>
                        <p className={styles.final_divmsp} >Al Habtoor Companies</p>
                    </div>
                    <div className={styles.final_divms}>
                        <p className={styles.final_divmsp} >Hospitality</p>
                        <p className={styles.final_divmsp}  style={{marginLeft: '21px',paddingTop:'10px'}}>Real Estate</p>
                        
                        <p className={styles.final_divmsp}  style={{marginLeft: '21px',paddingTop:'10px'}}>Publishing</p>
                       
                    </div>
                    <div className={styles.final_divms}>
                        <p className={styles.final_divmsp}  style={{marginLeft: '21px'}}>Automotive</p>
                        <p className={styles.final_divmsp}  style={{marginLeft: '21px'}}>Vehicle Leasing</p>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Footer