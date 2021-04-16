import React from 'react'
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.LogoBox}>
                <h1>DoAção</h1>
            </div>    

            <ProfileMenu />
        </div>
    )
}

export default Header
