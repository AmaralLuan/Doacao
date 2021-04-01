import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <>
            <a href={props.href} className={styles.ButtonPrimary}>
                {props.children}
            </a>
        </>
    )
}

export default Button
