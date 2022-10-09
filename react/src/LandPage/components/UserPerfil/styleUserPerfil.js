import styled from "styled-components";


export const Aside = styled.aside`
    margin: 0;

    background-color: var(--primary);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 20vw;
    margin: -8px;
    min-height: 100vh;

    font-family: "Montserrat", sans-serif;

    svg{
        max-width: 12px;
    }

    .perfil{
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 50px;
        width: 100%;
        img{
            max-width: 80px;
            max-height: 80px;
            padding-left: 20px;

            width: 100%;
            height: 100%;
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    h2{
        font-size: 14px;
        font-weight: bold;
        color: var(--text-primary);

        margin: 0;
        padding: 0;
    }

    p{
        font-size: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;
        color: var(--text-secondary);
        transition: color 0.18s linear;

        margin: 0;
        padding: 0;
    }

    .infos{
        display: flex;
        flex-direction: column;
        text-align: justify;
        gap: 15px;

        padding: 50px;

    }

    ul{
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        border-top: solid 1px var(--text-secondary);
        width: 100px;
    }

    li{
        margin: 0;
        padding: 0;
        
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        color: var(--text-secondary);
        cursor: pointer;
    }

    li:hover{
        color: var(--text-primary);
    }

    .actived{
        color: var(--text-primary);
    }

`