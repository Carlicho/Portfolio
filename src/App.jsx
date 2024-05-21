import styles from './App.module.css'
import  { useRef, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/NavBar';

import About from './components/Info/About/About';
import MyCareer from './components/Info/MyCareer/MyCareer';
import MyWorks from './components/MyWorks/MyWorks';
import Footer from './components/Footer/Footer';


export default function App() {
  
  return (
    <div className={styles.AppContainer}>
      <NavBar      />
      <Banner      />
      <MyWorks     />
      <Info        />
      <About       />
      <MyCareer    />
      <Footer      />
  </div>
  )
}


// const imgRef = useRef(null);
// useEffect(() => {
//   const moveImage = (event) => {
//     const x = (event.clientX / window.innerWidth) * 110 + '%';
//     const y = (event.clientY / window.innerHeight) * 150 + '%';
//     imgRef.current.style.left = x;
//     imgRef.current.style.top = y;
//     imgRef.current.style.transform = `translate(-${x}, -${y})`;
//   };
//   document.addEventListener('mousemove', moveImage);
//   return () => {
//     document.removeEventListener('mousemove', moveImage);
//   };
// }, []);

// {/* <img src={aguila} className={styles.aguila} ref={imgRef} alt='aguila' /> */}