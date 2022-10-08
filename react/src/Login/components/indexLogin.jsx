import { useState } from "react";
import { Header, Main } from "./styleLogin";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const [id, setId] = useState('')

    function createId() {
        let randonString = '';
        let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i++) {
            randonString += caracters.charAt(Math.floor(Math.random() * caracters.length));
        }
        setId(randonString)
        return randonString;
    }

    const navigate = useNavigate()

    const userInformation = {
        name: localStorage.getItem('@UserName'),
        img: localStorage.getItem('@UserImg'),
        password: localStorage.getItem('@UserPassword'),
        email: localStorage.getItem('@UserEmail')
    }

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido").oneOf([userInformation.email], 'Email não cadastrado'),
        name: yup.string().required("Nome obrigatório").oneOf([userInformation.name], 'Uma conta com este nome não existe'),
        password: yup.string().required("Senha obrigatória").oneOf([userInformation.password], 'Senha incorreta'),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onSubmitFunction (data) {
        createId()
        localStorage.setItem('@UserId', id)
        navigate('/')
    };

    function turnToRegisterPage(){
        navigate('/register')
    }

    return(
        <>
            <Header>
                <h1>Nature Music</h1>
                <div>
                    <button className="btnLogin">Login</button>
                    <button onClick={turnToRegisterPage}>Registro</button>
                </div>
            </Header>
            <Main>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <div>
                        <h2>Login</h2>
                    </div>
                    <div className="divOfInputs">
                        <input type="text" placeholder="Digite seu nome" {...register("name")}/>
                        {errors.name?.message}
                        <input type="text" placeholder="Digite seu email" {...register("email")}/>
                        {errors.email?.message}
                        <input type="password" placeholder="Digite sua senha" {...register("password")}/>
                        {errors.password?.message}
                    </div>
                    <div className="divOfBtns">
                        <button type="submit">Logar</button>
                        <p>Ainda não tem uma conta?</p>
                        <button onClick={turnToRegisterPage}>Fazer cadastro</button>
                    </div>
                </form>
            </Main>

        </>
    )
}

export default LoginPage
