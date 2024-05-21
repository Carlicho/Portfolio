import { Link } from 'react-scroll';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/png/tech/github icon.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import styles from './NavBar.module.css';
import burguerIcon from "../../assets/png/burguerIcon.png"
import { useState } from 'react';


// HACER QUE TITILE EL BOTON LETS CONNECT

const NavBar = () => {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
        <div className={styles.navcontainer}>
            <button onClick={toggleMenu} className={styles.burguerBtn}>
              <img src={burguerIcon} alt="burguerIcon" />
            </button>
          <div className={styles.navlogo}>
            <h1>Carlos J Lichowski </h1>
          </div>

        <div className={styles.burguerbtn} id="burguerbtn">
          <div className={`${styles.links} ${menu ? styles.isActive : ""}`}>
            <Link to="home" spy={true} smooth={true} offset={-170} duration={500} className={styles.link}>
              Home
            </Link>
            <Link to="myworks" spy={true} smooth={true} offset={50} duration={500} className={styles.link}>
              Projets
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-200} duration={500} className={styles.link}>
              About
            </Link>

            
          </div>
        </div>

        <div>
          <div className={styles.socialicons}>
            <span className="navbar-text">
              
              <Link to='footer'  >
                <button className={styles.ConnectBtn}>Lets Connect</button> 
              </Link>
            </span>
            <div className={styles.socialNetworks}>
            <a href="https://www.linkedin.com/in/carlos-lichowski/" target="new_blank"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/Carlicho"                   target="new_blank"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/carloslichowski/"    target="new_blank"><img src={navIcon3} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;