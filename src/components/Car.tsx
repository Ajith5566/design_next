import React from 'react'
import Image from 'next/image'
import car from '../assets/car_background.svg'
import styles from '../components/Car.module.css'
function Car() {
    return (
        <>
            <section id={styles.second_sec}>
                <Image id={styles.car_image} src={car} alt="car_background" />
            </section>
        </>
    )
}

export default Car