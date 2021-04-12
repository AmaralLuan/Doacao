import React, { useState, useCallback } from 'react'
import Form from '../../Components/Form/Form';
import Input from '../../Components/Input/Input';
import ButtonAdd from '../../Components/Button/ButtonAdd/ButtonAdd';
import { AiFillSave } from 'react-icons/all';

import RegisterImg from './RegisterImg/RegisterImg.svg'

import styles from './Register.module.css';

import Axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [url, setURL] = useState('');

    const [registerStatus, setRegisterStatus] = useState('');

    const submitValues = () => {
        Axios.post('http://localhost:3001/api/v1/register/registerUser', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            url: url
        }).then((response) => {
            setRegisterStatus(response.data.message);
            console.log(response);
            
        })
        
        
    }

    const submitHandler = useCallback((event) => {
        event.preventDefault();
        setName('');
      }, []);

    return (
        <div className={styles.Register}>
            <div className={styles.leftSide}>

                    <Form onSubmit={submitHandler}>
                        <h2>Cadastre-se</h2>

                        <p>Faça parte de um mundo mais solidário!</p>

                        <Input
                        label='Nome'
                        type='text'
                        placeholder='Nome'
                        onChange={e =>{setName(e.target.value)}}
                        required
                        />

                        <Input
                        label='Email'
                        type='email'
                        placeholder='Email'
                        onChange={e =>{setEmail(e.target.value)}}
                        required
                        />

                        <Input
                        label='Senha'
                        type='password'
                        placeholder='Pelo menos 8 caracteres'
                        onChange={e =>{setPassword(e.target.value)}}
                        required
                        />

                        <Input
                        label='Confirmar Senha'
                        type='password'
                        placeholder='Confirme sua senha'
                        onChange={e =>{setConfirmPassword(e.target.value)}}
                        required
                        />

                        <Input
                        label='Endereço da Imagem de Perfil'
                        type='url'
                        placeholder='Url da imagem'
                        onChange={e =>{setURL(e.target.value)}}
                        required
                        />

                        <h3>{registerStatus}</h3>

                        <ButtonAdd onClick={submitValues}>
                            Cadastrar
                            <AiFillSave />
                        </ButtonAdd>
                    </Form>

                    

                    <p>Já tem uma conta? <a href='/'>Faça Login</a> </p>
            </div>

            <div className={styles.rightSide}>
                <h2>Cadastre-se já.</h2>

                <h2>Para ajudar e ser ajudado!</h2>

                <img src={RegisterImg} alt='' />

                <p>Tratamos os seus dados com respeito. Clique aqui e saiba mais.</p>
            </div>
        </div>
    )
}

export default Register
