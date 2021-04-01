import React from 'react'
import styles from './Donations.module.css';
import Donation from '../../Components/Donation/Donation';
import ButtonPrimary from '../../Components/Button/ButtonPrimary';
import Header from '../../Components/Layout/Header/Header'
import { Link } from 'react-router-dom';

function Donations() {
    return (
        <>
            <Header />

            <div className={styles.Donations}>
                <Donation
                img="https://source.unsplash.com/random"
                name="Diego Fernandes"
                setor="Garavelo"
                cidade='Goiânia'
                imgActive = "https://source.unsplash.com/random"
                condition="Usado"
                description="Estou doando esse jogo de mesa e cadeiras, pois está ocupando espaço aqui em casa, só precisa retirar, não entrego no local." />

                <Donation
                img="https://source.unsplash.com/random"
                name="Luan Amaral"
                setor="Jd América"
                cidade='Goiânia'
                imgActive = "https://source.unsplash.com/random"
                condition="Usado"
                description="Estou doando essa geladeira semi-nova, pois comprei uma recentemente e essa ficou sem serventia. Podemos combinar a entrega." />

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
