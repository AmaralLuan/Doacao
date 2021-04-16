import React from 'react'
import styles from './Donation.module.css';
import ButtonWhatsApp from '../Button/ButtonWhatsApp/ButtonWhatsApp';

function Donation(props) {

    return (
        <div className={styles.Donation} key={props.id}>
            <header>
                <img src={props.profilePic} alt="doador" />
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

                
            </div>

            <div className={styles.boxImgActive}>
                <img src={props.imgActive} alt=""/>
            </div>

            <p>
                {props.description}
            </p>
            <footer>
                <div>
                    <h4>Condição: &nbsp;</h4>
                    <span>{props.condition}</span>
                </div>    

                <ButtonWhatsApp phone={props.phone}/>
            </footer>
        </div>
    )
}


export default Donation
