import React from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import car1 from '../assets/Mask group.svg'
import details1 from '../assets/details1.svg'
import car2 from '../assets/Mask group2.svg'

function Slider() {
    return (
        <>
            <div id={styles.heading}>
                <h1>Most popular cars</h1>
            </div>
            <section id={styles.third_sec}>
                <div className={styles.third_sec_div}>
                    <div className={styles.third_sec_img}>
                        <Image className={styles.car1} src={car1} alt="car1"/>
                    </div>
                    <div className={styles.third_sec_cont}>
                        <h1>Mitsubishi Eclipse</h1>
                        <p>Eclipse cross is a fusion of shrap coupe looks and <br /> dynamic SUV mobility with signature
                            Mitsubishi<br /> styling,technology and driving confidence. </p>
                        <Image className={styles.details} src={details1} alt="img1" />
                            <div className={styles.button_div}>
                                <h1>AED 2700/ Monthly</h1>
                                <button><span>Book Now</span></button>
                            </div>
                    </div>
                </div>
                <div className={styles.third_sec_div} id={styles.third_sec_divid} style={{marginLeft:'22px'}}>
                    <div className={styles.third_sec_img}>
                        <Image className={styles.car1} src={car2} alt="car1"/>
                    </div>
                    <div className={styles.third_sec_cont}>
                        <h1>Jac J7</h1>
                        <p>S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact &
                        Whipping test. </p>
                        <Image className={styles.details} src={details1} alt="img1" />
                            <div className={styles.button_div}>
                                <h1>AED 2700/ Monthly</h1>
                                <button><span>Book Now</span></button>
                            </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Slider