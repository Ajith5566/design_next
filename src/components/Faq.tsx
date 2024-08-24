"use client"
import React, { useState } from 'react'
import styles from '../components/Faq.module.css'


function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const handleCollapsible = (index:number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        <>
            <div id={styles.heading3}>
                <h1>Frequently asked questions</h1>
            </div>
            <section id={styles.seventh_sec}>
                <div id={styles.sevth_first_div}>
                     {/* first */} 
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 0 ? styles.active : ''}`} onClick={() => handleCollapsible(0)}>What is my eligibility to book a car?</button>
                        <div className={styles.content}  style={{ display: activeIndex === 0 ? 'block' : 'none' }} >
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                     {/* second */}
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleCollapsible(1)}>Can i book for any period of time?</button>
                        <div className={styles.content} style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                    {/* <!-- third --> */}
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 2 ? styles.active : ''}`} onClick={() => handleCollapsible(2)}>Can i opt car for a longer period?</button>
                        <div className={styles.content} style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                    {/* <!-- fourth --> */}
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 3 ? styles.active : ''}`} onClick={() => handleCollapsible(3)}>Can i book one-way trip?</button>
                        <div className={styles.content} style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                    {/* <!-- fifth --> */}
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 4 ? styles.active : ''}`} onClick={() => handleCollapsible(4)}>How can i make the payment?</button>
                        <div className={styles.content} style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                    {/* <!-- sixth --> */}
                    <div className={styles.sevth_first_div1}>
                        <button type="button" className={`${styles.collapsible} ${activeIndex === 5 ? styles.active : ''}`} onClick={() => handleCollapsible(5)}>Is there home delivery option available?</button>
                        <div className={styles.content} style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                            <p>You should be of 18 years old above and you must possess a valid driving license</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Faq