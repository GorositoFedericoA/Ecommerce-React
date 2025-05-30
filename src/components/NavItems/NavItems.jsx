import { NavLink } from "react-router-dom";
import styles from "../NavItems/NavItems.module.css";
import { NavDropdown } from "react-bootstrap"; // Importa NavDropdown de react-bootstrap

export default function NavItems() {

    return (
      <>
        <NavLink to="/items" className={`m-1 fs-5 px-1 ${styles.link}`}>
          Inicio
        </NavLink>
        <NavLink
          to="/category/jewelery"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Joyeria
        </NavLink>
        <NavLink
          to="/category/electronics"
          className={`m-1 fs-5 px-1 ${styles.link}`}
        >
          Electronica
        </NavLink>
        <NavDropdown
          id="nav-dropdown"
          title="Ropa"
          className={`m-1 px-1 fs-5 `}
        >
          <NavDropdown.Item
            href="/category/womens-clothing"
            className={`m-1 px-1 fs-6 ${styles.link}`}
          >
            Ropa Mujer
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="/category/mens-clothing"
            className={`m-1 px-1 fs-6 ${styles.link}`}
          >
            Ropa Hombre
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );

}