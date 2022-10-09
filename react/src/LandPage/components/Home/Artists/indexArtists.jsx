import alessandro from '../../../../assets/alessandro.jpg';
import sam from '../../../../assets/sam.jpg';
import mj from '../../../../assets/mj.jpg';
import { Section } from './styleArtists'

function Artists(){

    return(
        <Section>
            <h2>Artistas</h2>
                <ul>
                    <li>
                        <div className="divImg">
                            <img src={alessandro} alt="Alessandro VIlas Boas"></img>
                            <div>
                                <h3>Alessandro Vilas Boas</h3>
                                <p>4 dias atras</p>
                            </div>
                        </div>
                        <p>2 albuns</p>
                    </li>
                    <li>
                        <div className="divImg">
                            <img src={sam} alt="Sam Smith"></img>
                            <div>
                                <h3>Sam Smith</h3>
                                <p>1 hora atras</p>
                            </div>
                        </div>
                        <p>3 albuns</p>
                    </li>
                    <li>
                        <div className="divImg">
                            <img src={mj} alt="Michael Jackson"></img>
                            <div>
                                <h3>Michael Jackson</h3>
                                <p>8 hora atras</p>
                            </div>
                        </div>
                    <p>6 albuns</p>
                </li>
            </ul>
        </Section>

    )
}

export default Artists