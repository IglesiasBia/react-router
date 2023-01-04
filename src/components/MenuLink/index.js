import {  useLocation, NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

function MenuLink({children, to}){
const local = useLocation();
console.log(local)
    return(
        <NavLink 
        className={({ isActive }) => ` ${styles.link} ${isActive ? styles.linkDestacado : ""}`}  
        to={to}
    >
        {children}
    </NavLink>
    )
}

export default MenuLink;