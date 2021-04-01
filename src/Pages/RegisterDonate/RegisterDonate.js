import React from 'react'
import styles from './RegisterDonate.module.css';
import Form from '../../Components/Form/Form'
import Input from '../../Components/Input/Input';
import ButtonAdd from '../../Components/Button/ButtonAdd/ButtonAdd';
import Header from '../../Components/Layout/Header/Header'

import { BsPlusCircle } from 'react-icons/all'
import TextArea from '../../Components/TextArea/TextArea';
import { useHistory } from 'react-router-dom';

function RegisterDonate() {

    const useHistory = () => {
        let history = useHistory();
        history.push("/donations");
        
    }


    return (
        <>
            <Header />
            <div className={styles.RegisterDonate}>
                <button onClick={useHistory}>voltar</button>

                <Form>
                    <Input
                    label="Nome"
                    type="text"
                    />

                    <Input
                    label="Setor"
                    type="text"
                    />

                    <Input
                    label="Cidade"
                    type="text"
                    />

                    <Input
                    label="Imagem"
                    type="url"
                    placeholder='Insira aqui o link da imagem da sua doação ' />

                    <ButtonAdd onClick={console.log('Olá mundo')} >
                        <BsPlusCircle />
                    </ButtonAdd>

                    <TextArea label="Descrição"
                        placeholder="Descreva o item que quer doar" />

                    <ButtonAdd>
                        Enviar
                    </ButtonAdd>
                </Form>
            </div>
        </>    
    )
}

export default RegisterDonate
