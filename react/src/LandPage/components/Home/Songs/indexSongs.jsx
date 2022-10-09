import { Section } from "./styleSongs"

function Songs({ musicList }){

    return(
        <Section>
            <h2>Musicas</h2>
                <ul>
                    {
                        musicList.map(musica => 
                            <li>
                                <img src={musica.img} alt={musica.musica}></img>
                                <div>
                                    <h3>{musica.artista}</h3>
                                    <p>{musica.musica}</p>
                                </div>
                            </li>
                        )
                    }
                            
                </ul>
        </Section>
    )
}

export default Songs