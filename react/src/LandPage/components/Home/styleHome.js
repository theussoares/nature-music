import styled from "styled-components";

export const Div =  styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 50px;
    padding-top: 20px;

    width: 100%;

    .pesquisa{
        display: flex;
        align-items: center;
        gap: 5px;

        svg{
            color: var(--text-primary);
            filter: brightness(0.6);
            width: 15px;
        }

        button{
            border: none;
            background-color: transparent;

            color: #0d1966;
            font-weight: 700;
            font-size: 1rem;
            filter: brightness(5);

            cursor: pointer;
        }

        input, input:focus{
            outline: none;
            background: none;
            border: none;
            width: 300px;
            padding: 5px 15px 8px;
            color: var(--text-primary);
            font-size: 12px;
        }
    }

    .bottomSection{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

`