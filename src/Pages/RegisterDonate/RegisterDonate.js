import React, { useCallback, useState, useEffect } from 'react'
import Axios from 'axios';
import styles from './RegisterDonate.module.css';
import Form from '../../Components/Form/Form'
import Input from '../../Components/Input/Input';
import ButtonAdd from '../../Components/Button/ButtonAdd/ButtonAdd';
import Header from '../../Components/Layout/Header/Header'

import { BsPlusCircle } from 'react-icons/all'
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
    const [user_id, setUser_id] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/register/login').then((response) => {
            setUser_id(response.data.user[0].user_id);
        })
    }, [])


    const submitValues = () => {
        Axios.post('http://localhost:3001/api/v1/donations/register', {
            itemName: name,
            setor: setor,
            cidade: cidade,
            imagem: imagem,
            description: description,
            phone: phone,
            user_id: user_id
        }).then((response) => {
            console.log(response);
            setStatus(response.data.message)
        })
        
        
    }

    const BotaoVoltar = () => {
        let history = useHistory();

        function handleClick() {
            history.push("/donations");
        }

        return (
            <button type="button" onClick={handleClick}>
                Voltar
            </button>
        )
    }

    const addImgField = () => {
        //SELECIONAR O CONTAINER COM TODAS AS IMGS
        const container = document.querySelector('#imgsField');

        //SELECIONAR O COMPONENT ONDE ADD A URL
        const fieldsContainer = document.querySelectorAll('#img-url');

        // realizar duplicação da ultima imagem adicionada
        const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

        // verificar se o campo está vazio

        const inputField = newFieldContainer.children[0];

        if (inputField.value === "") {
            return 
        }

    
        // limpar o campo antes de add ao container de #images
    
        inputField.value = '';
    
        // adicionar duplicação ao container de #images
        container.appendChild(newFieldContainer);

        if (container.length >= 5) {
            console.log('marcou')
        }
    }

    const deleteField = (event) => {
        const span = event.currentTarget;

        const fieldsContainer = document.querySelectorAll('#img-url');

        if(fieldsContainer.length < 2) {
            // limpar o valor do campo
            span.parentNode.children[0].value = '';
            return
        }

        // deletar o campo
        span.parentNode.remove()
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
                            <button onClick={deleteField}>Delete</button>
                        </Input>
                    </div>

                    

                    <ButtonAdd onClick={addImgField} >
                        <BsPlusCircle />
                    </ButtonAdd>

                    <TextArea label="Descrição"
                        placeholder="Descreva o item que quer doar" 
                        onChange={e =>{setDescription(e.target.value)}}/>

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
