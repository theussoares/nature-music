import Home from "./Home/indexHome"
import { Main } from "./styleLandPage"
import SideMenu from "./UserPerfil/indexUserPerfil"

function LandPage(){

    return(
        <Main>
            <SideMenu />
            <Home />
        </Main>
    )
}

export default LandPage
