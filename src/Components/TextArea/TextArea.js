import React from 'react';
import styles from './TextArea.module.css';

function TextArea(props) {
    return (
        <div className={styles.TextArea}>
            <label>{props.label}</label>
            <textarea placeholder={props.placeholder} onChange={props.onChange} maxLength='200' rows='10'>
                {props.children}
            </textarea>
        </div>
    )
}

export default TextArea
