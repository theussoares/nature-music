import styled from "styled-components";

export const Header = styled.header`
    font-family: "Montserrat", sans-serif;

    margin: 0;
    padding: 0;
    padding-right: 16px;

    max-width: 100vw;
    margin-left: -8px;
    height: 80px;
    margin-top: -8px;
    width: 100%;
    
    background-color: var(--primary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        margin: 0;
        padding: 0;
        padding-left: 15px;

        color: var(--text-primary);
    }

    div{
        display: flex;
        gap: 20px;

        button{
            width: 100px;
            padding: 5px;

            border-radius: 8px;

            background-color: var(--text-primary);
            color: var(--primary);
            transition: 0.5s;

            font-weight: 500;
        }

        button:hover{
            transition: 0.5s;
            cursor: pointer;
            background-color: var(--text-secondary);
            color: var(--text-primary);
        }

        .btnLogin{
            cursor: pointer;
            background-color: var(--text-secondary);
            color: var(--text-primary);
        }
    }
`

export const Main = styled.main`

    display: flex;
    justify-content: center;

    font-family: "Montserrat", sans-serif;

    margin: 0;
    padding: 0;

    width: 98vw;
    height: 78vh;

    margin-top: 25px;

    form{
        color: var(--text-secondary);
        font-size: 0.7rem;
        font-weight: 300;
        transition: 1s;

        display: flex;
        flex-direction: column;
        gap: 45px;
        align-items: center;
        max-height: 400px;
        height: 100%;
    
        padding: 10px;

        max-width: 320px;
        width: 100%;

        background-color: var(--primary);
        filter: brightness(1.3);

        border-radius: 8px;

        h2{
            color: var(--text-primary);

            margin: 0;
            padding: 0;

            font-weight: 700;
            font-size: 1.3rem;
        }

        .divOfInputs{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;

            input, input:focus{
                width: 95%;
                min-height: 30px;

                outline: none;
                background: none;
                border: 1px solid var(--text-secondary);
                border-radius: 8px;
                padding-left: 10px;
                color: var(--text-primary);
                font-size: 0.8rem;
            }
        }

        .divOfBtns{
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            p{
                color: var(--text-secondary);
                font-size: 0.8rem;
            }

            button{
                width: 60%;
                height: 30px;

                background-color: var(--text-primary);
                color: var(--primary);
                filter: brightness(0.5);

                border: none;
                border-radius: 8px;

                transition: 0.5s;
            }

            button:hover{
                transition: 0.5s;
                cursor: pointer;
                filter: brightness(1);
            }
        }
    }
`