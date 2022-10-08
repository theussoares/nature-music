import { Div } from "./stylePlayLists"

function PlayLists({listOfPlayList}){

    return(
        <Div>
            <h2>Suas playlists</h2>
            <ul>
                <li className="addPlayList">
                    <p>Adicionar playlist</p>
                    <button>+</button>
                </li>
                {
                    listOfPlayList.map(playlist => 
                        <li className="playlist" key={playlist.index}>
                            <img src={playlist.img} alt={playlist.nome}></img>
                            <div>
                                <h3>{playlist.nome}</h3>
                                <p>{playlist.musicas}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </Div>
    )
}

export default PlayLists