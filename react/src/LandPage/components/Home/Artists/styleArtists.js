import styled from "styled-components";

export const Section = styled.section`
    max-width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2{
        color: var(--text-primary);

        font-weight: 700;
        font-size: 1.3rem;
    }

    ul{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    img{
        width: 45px;
        height: 45px;
        border-radius: 8px;
    }

    li{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        filter: brightness(0.6);
        transition: 0.8s;
        gap: 10px;
    }

    li:hover{
        filter: brightness(1);
        cursor: pointer;
        transition: 0.8s;
    }

    .divImg{
        display: flex;
        gap: 15px;

        div{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
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