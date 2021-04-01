import React from 'react'
import styles from './ButtonAdd.module.css';

function ButtonAdd(props) {
    return (
        <button onClick={props.onClick} className={styles.ButtonAdd} type={props.type}>
            {props.children}
        </button>
    )
}

export default ButtonAdd
