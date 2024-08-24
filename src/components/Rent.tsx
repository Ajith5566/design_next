import React from 'react'
import styles from '../components/Rent.module.css'
import Image from 'next/image'
import location from '../assets/Frame 1171274971.svg'
import car from '../assets/car.svg'
import calender from '../assets/car.svg'
function Rent() {
  return (
    <>
      <div id={styles.heading2}>
        <h1>Rent/Lease In three easy steps</h1>
      </div>
      <section id={styles.fifth_sec}>
          {/* first */}
        <div style={{textAlign:"center"}} className={styles.number_div}>
            <div style={{width:"348px"}}>
                <h1>01</h1>
            </div>
            <div className={styles.icon_div}>
                <Image src={location} alt="locations" />
                <p style={{ margin:"35px 63px 11px 62px"}}>Select the location. Browse through our available options and
                    find the perfect car to suit your needs</p>
            </div>
        </div>
        {/*  second */}
        <div style={{textAlign: "center",marginLeft: "50px"}} className={styles.number_div}>
            <div style={{width: "348px"}}>
                <h1>02</h1>
            </div>
            <div className={styles.icon_div}>
                <Image src={calender} style={{height: "46px",width: "46px"}} alt="calender" />
                <p style={{height: "37px",width: "190px",margin: "44px 79.17px 0px 79px" }}>Choose your desired Pick-Up date and time.</p>
            </div>
        </div>
             {/* third */}
        <div style={{textAlign: "center",marginLeft: "49.83px"}} className={styles.number_div}>
            <div style={{width: "348px"}}>
                <h1>03</h1>
            </div>
            <div className={styles.icon_div}>
                <Image src={car} style={{height: "43px",width: "50px"}} alt="car" />
                <p style={{width: "270px",margin: "26px 39.17px 0px 39px"}}>Make payment and book the car. Select an option
                    to either have the car delivered to your location or pick it up directly from us.</p>
            </div>
        </div>

    </section>
    </>
  )
}

export default Rent