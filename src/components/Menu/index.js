import { NavLink } from "react-router-dom";
import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>

                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/aboutMe">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;