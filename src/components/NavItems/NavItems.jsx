import { NavLink } from "react-router-dom";
import styles from "../NavItems/NavItems.module.css";

export default function NavItems() {

    return (
      <>
        <NavLink to="/items" className={`m-1 fs-5 px-1 ${styles.link}`}>
          Inicio
        </NavLink>
        <NavLink
          to="/category/fragancias"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Fragancias
        </NavLink>
        <NavLink
          to="/category/alimentos"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Alimentos
        </NavLink>
                <NavLink
          to="/category/belleza"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Belleza
        </NavLink>
                <NavLink
          to="/category/muebles"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Muebles
        </NavLink>
      </>
    );

}