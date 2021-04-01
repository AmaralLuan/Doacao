import React from 'react'
import styles from './Donation.module.css';

import ButtonWhatsApp from '../Button/ButtonWhatsApp/ButtonWhatsApp';
import ButtonImg from '../Button/ButtonImg/ButtonImg';

function Donation(props) {
    return (
        <div className={styles.Donation}>
            <header>
                <img src={props.img} alt="doador" />
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
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                <ButtonImg src="https://source.unsplash.com/random"/>
                
            </div>

            <div className={styles.boxImgActive}>
                <img src={props.imgActive} alt />
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
