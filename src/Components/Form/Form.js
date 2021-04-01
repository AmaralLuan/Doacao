import React from 'react'
import styles from './Forms.module.css';

function Form(props) {
    return (
        <form className={styles.Form} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form
