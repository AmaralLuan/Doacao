import React from 'react'
import styles from './ButtonImg.module.css';


function ButtonImg(props) {
    return (
        <button className={styles.ButtonImg}>
            <img src={props.src} alt="item" />
        </button>
    )
}

export default ButtonImg
