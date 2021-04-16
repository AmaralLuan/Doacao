import React from 'react'
import styles from './ButtonWhatsApp.module.css'
import { AiOutlineWhatsApp } from 'react-icons/all'

function ButtonWhatsApp(props) {
    return (
        <>
            <a href={props.phone} target='blank_'>
                <button className={styles.ButtonWhatsApp} href="/" >
                    <AiOutlineWhatsApp />
                    Entrar em contato
                </button>
            </a>
        </>
    )
}

export default ButtonWhatsApp
