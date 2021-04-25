import React, { useCallback, useState } from 'react'
import Axios from 'axios';
import styles from './RegisterDonate.module.css';
import Form from '../../Components/Form/Form'
import Input from '../../Components/Input/Input';
import ButtonAdd from '../../Components/Button/ButtonAdd/ButtonAdd';
import Header from '../../Components/Layout/Header/Header'

import TextArea from '../../Components/TextArea/TextArea';
import { useHistory } from 'react-router-dom';

const RegisterDonate = () => {

    const [name, setName] = useState('');
    const [setor, setSetor] = useState('');
    const [cidade, setCidade] = useState('');
    const [imagem, setImagem] = useState([]);
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [condition, setCondition] = useState('');


    const submitValues = () => {
        Axios.post('https://doacao-backend.herokuapp.com/v1/register/registerdonate', {
            itemName: name,
            setor: setor,
            cidade: cidade,
            imagem: imagem,
            description: description,
            phone: phone,
            condition: condition
        }).then((response) => {
            setStatus(response.data.message)
        })
        
        
    }

    const BotaoVoltar = () => {
        let history = useHistory();

        function handleClick() {
            history.push("/donations");
        }

        return (
            <ButtonAdd type="button" onClick={handleClick}>
                Voltar
            </ButtonAdd>
        )
    }


    const submitHandler = useCallback((event) => {
        event.preventDefault();
    }, []);

    return (
        <>
            <Header />
            <div className={styles.RegisterDonate}>
                <BotaoVoltar>
                    Voltar
                </BotaoVoltar>

                <Form onSubmit={submitHandler}>
                    <Input
                    label="Nome"
                    type="text"
                    onChange={e =>{setName(e.target.value)}}
                    />

                    <Input
                    label="Setor"
                    type="text"
                    onChange={e =>{setSetor(e.target.value)}}
                    />

                    <Input
                    label="Cidade"
                    type="text"
                    onChange={e =>{setCidade(e.target.value)}}
                    />

                    <div className={styles.imgsField} id='imgsField'>
                        <Input
                            label="Imagem"
                            type="url"
                            id="img-url"
                            placeholder='Insira aqui o link da imagem da sua doação '
                            onChange={e => { setImagem(e.target.value) }}
                        >
                        </Input>
                    </div>

                    <TextArea label="Descrição"
                        placeholder="Descreva o item que quer doar" 
                        onChange={e =>{setDescription(e.target.value)}}/>

                    <Input
                        label="Condição"
                        type="text"
                        placeholder="Usado ou novo"
                        onChange={e =>{setCondition(e.target.value)}}
                    />     

                    <Input
                        label="Telefone"
                        type="text"
                        onChange={e =>{setPhone(e.target.value)}}
                    />   

                    <ButtonAdd onClick={submitValues}>
                        Enviar
                    </ButtonAdd>
                </Form>

                <h2>{status}</h2>
            </div>
        </>    
    )
}

export default RegisterDonate
