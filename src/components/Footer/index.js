import styles from "./Footer.module.css"
import logo from "./logo.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function PieDePagina() {
    return (
        <footer className={styles.footerContainer}>
            <img src={logo} alt="Logo de la empresa" className={styles.logo} />

            <div className={styles.links}>
                <li>
                    <a href="https://www.linkedin.com/in/juan-david-goez-callejas-993186149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                        <FaLinkedin className={styles.icons} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/juangoez32" target="_blank">
                        <FaGithub className={styles.icons} />
                    </a>
                </li>
            </div>
            <div className={styles.textContainer}>
                <p>Desarrollado por Juan Goez</p>
                <p>2024</p>
            </div>

        </footer>
    )

}

export default PieDePagina