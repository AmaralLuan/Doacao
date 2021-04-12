import React, { useState, useEffect } from 'react'
import styles from './Donations.module.css';
import Donation from '../../Components/Donation/Donation';
import ButtonPrimary from '../../Components/Button/ButtonPrimary';
import Header from '../../Components/Layout/Header/Header'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Donations() {
    const [donationsList, setDonationsList] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/v1/donations/getdonations`).then((response) => {
          setDonationsList(response.data);
        })
      }, [])


    return (
        <>
            <Header />

            <div className={styles.Donations}>

            {donationsList.map((value) => {

                    return (
                        <Donation
                            key={value.id}
                            img={value.images}
                            name={value.name}
                            setor={value.setor}
                            cidade={value.city}
                            imgActive = {value.images}
                            description={value.description} />
                    )
                })}

                <Link to="/donate">
                    <ButtonPrimary>
                        Quero Doar!
                    </ButtonPrimary>
                </Link>    
            </div>
        </>    
    )
}

export default Donations
