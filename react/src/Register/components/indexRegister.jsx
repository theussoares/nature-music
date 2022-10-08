import { Header, Main } from "./styleRegister"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function RegisterPage(){

    // const [id, setId] = useState('')

    // function createId() {
    //     let randonString = '';
    //     let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 10; i++) {
    //         randonString += caracters.charAt(Math.floor(Math.random() * caracters.length));
    //     }
    //     setId(randonString)
    //     return randonString;
    // }

    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        name: yup.string().required("Nome obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        img: yup.string().required("Foto obrigatória")
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onSubmitFunction (data) {
        localStorage.setItem('@UserImg', data.img)
        localStorage.setItem('@UserName', data.name)
        localStorage.setItem('@UserEmail', data.email)
        localStorage.setItem('@UserPassword', data.password)

        navigate('/login')
    }

    function turnToLogin(){
        navigate('/login')
    }


    return(
        <>
            <Header>
                <h1>Nature Music</h1>
                <div>
                    <button onClick={turnToLogin}>Login</button>
                    <button className="btnRegister">Registro</button>
                </div>
            </Header>
            <Main>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="registerHeader">
                        <h2>Cadastrar</h2>
                        <button onClick={turnToLogin}>Volar</button>
                    </div>
                    <div className="divOfInputs">
                        <input type="text" placeholder="Seu nome" {...register("name")}/>
                        {errors.name?.message}
                        <input type="email" placeholder="Seu e-mail" {...register("email")} />
                        {errors.email?.message}
                        <input type="password" placeholder="Sua senha" {...register("password")} />
                        {errors.password?.message}
                        <input type="url" placeholder="URL da imagem de perfil" {...register("img")}/>
                        {errors.img?.message}
                    </div>
                    <div className="divOfBtns">
                        <button type="submit" className="btnFormRegister">Registar</button>
                        <p>Já possui login?</p>
                        <button className="btnFormLogin" onClick={turnToLogin}>Ir para página de login</button>
                    </div>
                </form>
            </Main>
        </>
    )
}

export default RegisterPage

