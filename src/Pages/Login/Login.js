import React,{ useState, useEffect, useCallback } from 'react'
import styles from './Login.module.css';
import ButtonAdd from '../../Components/Button/ButtonAdd/ButtonAdd'
import Input from '../../Components/Input/Input'
import Form from '../../Components/Form/Form';

import { Redirect } from 'react-router-dom';

import Axios from 'axios';

import  { IoLogInOutline } from 'react-icons/all';

import LoginImg from './LoginImg/LoginImg.svg';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const [auth, setAuth] = useState(false);

    Axios.defaults.withCredentials = true;

    const submitValues = () => {
        Axios.post('http://localhost:3001/api/v1/register/login', {
            login: login,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                console.log(response)
                setLoginStatus(response.data[0].email)
                setAuth(true);
            }
        })
    }

    useEffect(() => {
        Axios.get('https://doacao-backend.herokuapp.com/api/v1/register/login').then((response) => {
            if (response.data.loggedIn ===  true) {
                setLoginStatus(response.data.user[0].email)
            }
        })
    }, [])

    const submitHandler = useCallback((event) => {
        event.preventDefault();
    }, []);

    
    
    

        return (

            <div className={styles.Login}>
                <div className={styles.leftSide}>
                    <h1>Bem vindo.</h1>
    
                    <p>Entre com os dados que você cadastrou.</p>
    
                    <Form onSubmit={submitHandler}>
                        <h2>Que legal receber você! :)</h2>
    
                        <Input
                        label='Login'
                        type='email'
                        placeholder='email@exemplo.com'
                        onChange={e => {setLogin(e.target.value)}} />
    
                        <Input
                        label='Password'
                        type='password'
                        placeholder='Pelo menos 8 caracteres'
                        onChange={e => {setPassword(e.target.value)}}  />
    
    
                        <ButtonAdd
                         type='submit'
                         onClick={submitValues}
                        > 
                         Login
                         <IoLogInOutline />
                         </ButtonAdd >
                    </Form>

                    {auth ? <Redirect to="/donations" /> : <Redirect to="/" />}

                    <h2>{loginStatus}</h2>
    
                    <p>Ainda não é cadastrado? <a href='/register'>clique aqui!</a></p>
                 </div>
    
                 <div className={styles.rightSide}>
                     <h2>Bem-vindo!</h2>
                     <h1>Solidariedade salva vidas. </h1>
                    <img src={LoginImg} alt=" "/>
                 </div>
    
            </div>
    
        )
}

export default Login
