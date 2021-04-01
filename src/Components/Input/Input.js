import React from 'react'
import styles from './Input.module.css';

function Input(props) {
    return (
        <div className={styles.Input}>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} required={props.required}>
                {props.children}
            </input>
        </div>
    )
}

export default Input
