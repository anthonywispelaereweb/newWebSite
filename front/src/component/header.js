import React, { useState } from "react"
import { NavLink } from "react-router-dom";


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
            path: "/",
            text: "Home",
            end: true
        },
        {
            path: "experiences",
            text: "Experiences",
            end: false
        },
        {
            path: "services",
            text: "Services",
            end: false
        },
        {
            path: "contact",
            text: "Contacts",
            end: false
        }
    ]

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
                            onClick={() => { closeMenu(); }}
                            end={link.end.toString()}
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