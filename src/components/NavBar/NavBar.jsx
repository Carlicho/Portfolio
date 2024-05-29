import { Link } from 'react-scroll';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/png/tech/github icon.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import styles from './NavBar.module.css';


// HACER QUE TITILE EL BOTON LETS CONNECT

const NavBar = () => {



  return (
    
        <header className={styles.navcontainer}>
          <div className={styles.navlogo}>
            <h1>Carlos J Licho </h1>
          </div>
          
          <div className={styles.links}>
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

      </header>
      
    
  );
};

export default NavBar;