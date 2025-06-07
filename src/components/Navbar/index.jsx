import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CartWidget from "../CartWidget";
import { CartContext } from "../../context/CartContext";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import NavItems from "../NavItems/NavItems";
import logo from "../../assets/Ecommerce-React-logo.png"; // Importa el logo

const Navbar = () => {


  const [cart, setCart] = useContext(CartContext);  //Context del carrito
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0); //Cantidad de productos en el carrito

    return (
      <>
      
      <div className="w-100 bg-dark text-light text-center py-1">
        <p className="mb-0 small">
          Bienvenidos a Ecommerce-React hecho por Federico Gorosito!!🎉
        </p>
      </div>
      <NavBar expand="lg" className="border-bottom border-2 border-dark">
        <Container fluid className="d-flex justify-content-between align-items-center py-2">

              <NavLink to="/items" className="fs-3 d-flex align-items-center">
                {/* Izquierda: Logo */}
                <img
                  src={logo}
                  alt="Logo"
                  className={`${styles.logo} d-inline-block align-top`}
                />
              </NavLink>

            <div className="mx-auto d-none d-lg-flex">
              {/* Centro: Links (solo en pantallas grandes) */}
              <Nav className="d-flex justify-content-center align-items-center">
                <NavItems />
              </Nav>
            </div>

            <div className="d-flex align-items-center gap-3">
                <NavLink
                  to="/cart"
                  className={`d-flex justify-content-center align-items-center text-decoration-none`}
                >
                  <CartWidget />
                  {quantity > 0 && (
                    <div id="quantity" className={`${styles.quantity}`}>
                      {quantity}
                    </div>
                  )}
                </NavLink>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            </div>

        </Container>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column mx-1 p-1 d-lg-none">
            <NavItems />
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      </>
    );

};

export default Navbar;
