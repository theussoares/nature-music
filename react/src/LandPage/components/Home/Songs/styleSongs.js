import styled from "styled-components";

export const Section = styled.section`
    max-width: 500px;
    width: 100%;
    height: 100px;

    padding-right: 120px;

    h2{
        color: var(--text-primary);

        font-weight: 700;
        font-size: 1.3rem;
    }

    img{
        width: 120px;
        height: 120px;

        border-radius: 8px;
    }

    ul{
        display: flex;
        overflow-x: scroll;

        padding: 0;
        margin: 0;

        gap: 20px;
    }

    ul::-webkit-scrollbar-thumb {
    background: var(--scroll);
    height: 6px;
    border-radius: 6px;
    }

    ul::-webkit-scrollbar {
    background: #49349c11;
    height: 6px;
    border-radius: 6px;
    }

    li{
        list-style: none;
        filter: brightness(0.5);
        transition: 0.8s;
    }

    li:hover{
        filter: brightness(1);
        cursor: pointer;
        transition: 0.8s;
    }

    h3{
        margin: 0;
        padding: 0;

        font-size: 0.9rem;
        color: var(--text-primary);
    }

    p{
        margin: 0;
        padding: 0;

        font-size: 0.75rem;
        color: var(--text-secondary);
    }
`