import PlayLists from "./PlayLists/indexPlayLists"
import { useState } from "react";
import pop from '../../../assets/pop.png';
import albumCruz from '../../../assets/albumCruz.jpg';
import rock from '../../../assets/rock.jpg';
import olds from '../../../assets/olds.jpg';
import eletronic from '../../../assets/eletronic.jpg';
import musica1 from '../../../assets/musica1.jpg'
import musica2 from '../../../assets/musica2.jpg'
import musica3 from '../../../assets/musica3.png'
import musica4 from '../../../assets/musica4.jpg'
import musica5 from '../../../assets/musica5.jpg'
import musica6 from '../../../assets/musica6.jpg'
import musica7 from '../../../assets/musica7.webp'
import { Div } from "./styleHome";
import Artists from "./Artists/indexArtists";

function Home(){

    const [pesquisa, setPesquisa] = useState('')
    const [playlists, setPlaylist] = useState([{
        img: pop,
        nome: 'Pop hits',
        musicas: 24 + ' musicas'
    },
    {
        img: olds,
        nome: 'Old ones',
        musicas: 31 + ' musicas'
    },
    {
        img: albumCruz,
        nome: 'Adoração',
        musicas: 12 + ' musicas'
    },
    {
        img: rock,
        nome: 'rock it',
        musicas: 46 + ' musicas'
    },
    {
        img: eletronic,
        nome: 'dont stop',
        musicas: 63 + ' musicas'
    }])
    const [listaDeMusicas, setMusicas] = useState([
        {
            img: musica1,
            artista: 'Fresno',
            musica: 'Eu sou a mare viva'
        },
        {
            img: musica2,
            artista: 'The Weekend',
            musica: 'Star boy'
        },
        {
            img: musica3,
            artista: 'New one',
            musica: 'Diluvio'
        },
        {
            img: musica4,
            artista: 'Talita Catanzaro',
            musica: 'Ruja o leão'
        },
        {
            img: musica5,
            artista: 'Alessandro Vilas Boas',
            musica: 'O Carpinteiro'
        },
        {
            img: musica6,
            artista: 'NCS',
            musica: 'Royalty'
        },
        {
            img: musica7,
            artista: 'Sam Smith',
            musica: 'Unholy'
        }
    ])

    return(
        <Div>
            <div className="pesquisa">
                    <label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg></label>
                    <input onChange={(e) => setPesquisa(e.target.value)} type="text" value={pesquisa} placeholder="Pesquise por musicas, playlist, artistas..."></input> 
                    {pesquisa.length > 0 && <button onClick={(e) => limparPesquisa(e)}>x</button>}
            </div>
            <PlayLists listOfPlayList={playlists}/>
            <Artists />
        </Div>
    )
}

export default Home