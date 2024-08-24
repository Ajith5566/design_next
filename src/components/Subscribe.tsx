import React from 'react'
import styles from '../components/Subscribe.module.css'
import Image from 'next/image'
import phone from '../assets/phone.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
function Subscribe() {
  return (
    <>
      <section id={styles.fourth_sec}>
          <div id={styles.fourth_first_div}>
                <h1>Subscribe here for exclusive<br/> offers and updates!</h1>
                <div id={styles.ptagsdiv}>
                    <input type="text" placeholder="Name" className={styles.f_first_div_input}/>
                    <input type="text" placeholder="Email" className={styles.f_first_div_input} style={{marginLeft: '17.9px'}}/>
                </div>
                <p>Don't miss out! enter your email and your name, then hit subscribe to unlock a world of special offers
                    and details.</p>
                <button>Subscribe</button>
          </div>
          {/* second div */}
          <div id={styles.fourth_second_div}>
            <div id={styles.f_second_div}>
                <Image id={styles.phone} src={phone} alt="phone" />
            </div>
            <div id={styles.f_second_div2}>
                <p>Enter your number and receive <br /> a direct link to download the app</p>
                <input type="text" placeholder="enter the phone number" />
                <button>Get the link</button>
                <div id={styles.f_second_subdiv}>
                    <div id={styles.f_second_subdiv1}>
                        <h6>get in on</h6>
                    </div>
                    <div id={styles.f_second_subdiv2}>
                        <Image src={apple} alt="apple" style={{height: "30px",width: "103px"}} />
                        <Image src={google} alt="google" style={{height: '30px',width: '103px'}} />
                    </div>
                    <p id={styles.mobilep}>Enter your number and <br />receive  a direct link to download the app</p>
                </div>
            </div>
        </div>
        
      </section>
      <div id={styles.mobilefinal}>
        <input id={styles.mobileinput} type="text" placeholder="enter the phone number" />
          <button id={styles.mobilebutton} >Get the link</button>
      </div>
    </>
  )
}

export default Subscribe