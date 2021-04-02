import React from 'react'
import styles from './Input.module.css';

function Input(props) {
    return (
        <div className={styles.Input} id={props.id}>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} required={props.required} button={props.button} />
            {props.children}
        </div>
    )
}

export default Input
