import styled from "styled-components";

export const Div = styled.div`
    max-width: 970px;
    width: 100%;

h2{
    color: var(--text-primary);

    font-weight: 700;
    font-size: 1.3rem;
}

img{
    max-width: 300px;
    max-height: 140px;
    width: 250px;
    height: 100%;
    border-radius: 20px;
    opacity: 0.5;
    transition: 0.8s;
}

img:hover{
    transition: 0.5s;
    scale: 1.1;
    opacity: 1;
}

ul{
    display: flex;
    gap: 30px;
    overflow: scroll;
    overflow-y: hidden;
    height: 220px;
    padding-top: 10px;

    .addPlayList{
        background-color: var(--primary);
        max-height: 180px;
        max-width: 250px;
        list-style: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;

        border-radius: 20px;

        p{
            color: var(--text-secondary);
            width: 250px;
            font-weight: 700;
            font-size: 1rem;
        }

        button{
            width: 100px;
            border-radius: 20px;
            border: none;

            background-color: var(--scroll);

            color: var(--text-secondary);
            font-size: 2rem;

            cursor: pointer;
        }

        filter: brightness(0.5);
    }

    .addPlayList:hover{
        filter: brightness(1.5);

        p{
            color: var(--text-primary);
        }

        button{
            color: var(--text-primary);
        }
    }
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

.playlist{
    list-style: none;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    
    div{
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        line-height: 0;

        h3{
            color: var(--text-primary);
            font-size: 1.2rem;
        }

        p{
            color: var(--text-secondary);
            font-size: 0.7rem;
        }
    }
}
`