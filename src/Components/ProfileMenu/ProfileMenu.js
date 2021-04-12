import React, { useState, useEffect } from 'react'
import styles from './ProfileMenu.module.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import { AiFillCaretDown } from 'react-icons/all';

function ProfileMenu(props) {
    const [profilePic, setProfilePic] = useState('')
    const [name, setName] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/v1/register/login`).then((response) => {
            setProfilePic(response.data.user[0].photo_url);
            setName(response.data.user[0].name);
        })
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className={styles.ProfileMenu}>
            

         
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <div>
                        <h4>Olá, {name}</h4>
                    </div>

                    <div className={styles.ProfilePicBox}>
                        <img src={profilePic} alt='profile pic' />
                    </div>

                    <AiFillCaretDown />
                </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={styles.Menu}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            
        </div>
    )
}

export default ProfileMenu
