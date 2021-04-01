import React from 'react'
import styles from './ProfileMenu.module.css';

function ProfileMenu(props) {
    return (
        <div className={styles.ProfileMenu}>
            <div>
                <h4>Olá, {props.name}</h4>        
            </div>

            <div className={styles.ProfilePicBox}>
                <img src="https://source.unsplash.com/random" alt="Profile Picture" />
            </div>
        </div>
    )
}

export default ProfileMenu
