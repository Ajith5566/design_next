import React from 'react'
import styles from '../components/Locations.module.css'
import locationicon from '../assets/location_icon.svg'
import Image from 'next/image'
function Locations() {
  return (
    <>
        <section id={styles.sixth_sec}>
            <div id={styles.six_firstdiv}>
                <h1>Locations</h1>
                <div id={styles.six_seconddiv}>
                    <div className={styles.locationdiv} style={{height: '41px',width: '150px', borderRight: "1px solid #FFFFFF" }}>
                        <div  style={{height: '28.59px', width: '88.88px',display:' flex', marginTop: '7.41px'}}>
                            <Image src={locationicon} alt="location" />
                            <h5 className={styles.locationhh} style={{height: '26px',width: '54px', margin:'0.59px 0px 2px 12.64px',lineHeight: '25.6px'}}>Dubai </h5>
                        </div>
                    </div>
                    {/* <!-- second --> */}
                    <div className={styles.locationdiv} style={{height:'41px',width: '245px',borderRight: '1px solid #FFFFFF'}}>
                        <div className={styles.locationimg} style={{display: 'flex', height:' 28.59px',width: '134.46px',marginLeft: '49px',marginTop:' 8px'}}>
                            <Image src={locationicon} alt="location" />
                            <h5 className={styles.locationhh} style={{height: '26px',width:' 95px', margin:'0.59px 0px 2px 17.23px',lineHeight:'25.6px'}}>AbuDhabi</h5>
                        </div>
                    </div>
                    {/* <!-- third --> */}
                    <div className={styles.locationdiv} style={{height: '41px',width:' 229px',borderRight: '1px solid #FFFFFF'}}>
                        <div className={styles.locationimg} style={{display:'flex', height: '28.9px',width: '111.31px',marginLeft:'51px',marginTop:' 7.41px'}}>
                            <Image src={locationicon} alt="location" />
                            <h5 className={styles.locationhh} style={{height: '26px',width: '70px', margin:'0.59px 0px 2px 19.07px',lineHeight: '25.6px'}}>Sharjah</h5>
                        </div>
                    </div>
                   {/*  <!-- fourth --> */}
                    <div className={styles.locationdiv} style={{height: '41px',width: '201px',borderRight:' 1px solid #FFFFFF'}}>
                        <div className={styles.locationimg} style={{display: 'flex', height: '28.9px',width: '115.87px',marginLeft: '34px',marginTop: '7.41px'}}>
                            <Image src={locationicon} alt="location" />
                            <h5 className={styles.locationhh} style={{height: '26px',width: '75px', margin:'0.59px 0px 2px 18.63px',lineHeight: '25.6px'}}> Fujairah</h5>
                        </div>
                    </div>
                    {/* <!-- fifth --> */}
                    <div className={styles.locationdiv} style={{height: '41px',width: '227.47px'}}>
                        <div className={styles.locationimg} style={{display: 'flex', height: '28.9px',width:'180.47px',marginLeft: '47px',marginTop:' 7.41px'}}>
                            <Image src={locationicon} alt="location" />
                            <h5 className={styles.locationhh} style={{height: '26px',width: '141px', margin:'0.59px 0px 2px 17.23px',lineHeight: '25.6px'}}>Ras AlKhaimah </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Locations