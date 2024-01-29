import React from 'react';
import home from '../../assets/home.jpg';
import { MainContainer, MainImage } from './Main.styled.js';

const Main: () => JSX.Element = () => {
  return(
    <MainContainer>
      <MainImage alt="home" src={home}/>
      <h1>Antique Game Research Society</h1>
    </MainContainer>
  );
}

export default Main;