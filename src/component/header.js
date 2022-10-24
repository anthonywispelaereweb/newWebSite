import React, { useState } from "react"
import {
    NavLink
} from 'react-router-dom';

import styles from "./../styles/Header.module.scss"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    const links = [
        {
            path: "",
            text: "Accueil"
        },
        {
            path: "about",
            text: "Mes expériences"
        },
        {
            path: "services",
            text: "Mes services"
        },
        {
            path: "contact",
            text: "Contacts"
        }
    ]
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        console.log(pathname);
        return pathname === "/";
    }
    return <nav className={styles.navBar_ctn}>
        <button className={styles.navBar_button} onClick={handleToggle}>{navbarOpen ? (
            <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}</button>
        <ul className={`${styles.menuNav_list} ${navbarOpen ? styles.menuNav_list_showMenu : ""}`}>
            {
                links.map((link, idx) => {
                    return <li key={idx} className={styles.menuNav_list_item} >
                        <NavLink
                            to={link.path}
                            onClick={() => closeMenu()}
                            // activeClassName="active-link"
                            isActive={checkActive}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                })
            }

        </ul>

    </nav>
}

export default Header;