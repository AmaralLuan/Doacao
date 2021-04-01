import React from 'react'
import styles from './ButtonWhatsApp.module.css'
import { AiOutlineWhatsApp } from 'react-icons/all'

function ButtonWhatsApp() {
    return (
        <a className={styles.ButtonWhatsApp} href="/">
           <AiOutlineWhatsApp /> 
           Entrar em contato
        </a>
    )
}

export default ButtonWhatsApp
