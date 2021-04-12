import React, { useEffect, useState } from 'react'
import styles from './Donation.module.css';
import Carousel from 'react-material-ui-carousel';
import Axios from 'axios';
import ButtonWhatsApp from '../Button/ButtonWhatsApp/ButtonWhatsApp';
import ButtonImg from '../Button/ButtonImg/ButtonImg';

function Donation(props) {

    const [profilePic, setProfilePic] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/v1/register/`).then((response) => {
            setProfilePic(response.data[0].name);
            console.log(response);
        })
    }, [])

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div className={styles.Donation} key={props.id}>
            <header>
                <img src={profilePic} alt="doador" />
                <div>
                    <h3>
                        {props.name}
                    </h3>
                    <span>
                        {props.setor}, {props.cidade}
                    </span>
                </div>
            </header>

            <div className={styles.imageGrid}>
                <ButtonImg src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                <ButtonImg src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"/>
                <ButtonImg src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                
            </div>

            <div className={styles.boxImgActive}>
                <Carousel>
                    {
                        items.map( (item, i) => <img src={props.imgActive} alt="" key={i} /> )
                    }
                </Carousel>
                
            </div>
            <p>
                {props.description}
            </p>
            <footer>
                <div>
                    <h4>Condição: &nbsp;</h4>
                    <span>{props.condition}</span>
                </div>    

                <ButtonWhatsApp />
            </footer>
        </div>
    )
}

export default Donation
