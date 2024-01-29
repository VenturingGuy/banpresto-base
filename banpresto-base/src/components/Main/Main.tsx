import React from 'react';
import home from '../../assets/home.jpg';
import { MainContainer, MainImage, MainYearCTA, MainYearList, MainYearListItem, MainYearSection } from './Main.styled.js';

const CURRENT_YEAR = new Date().getFullYear();
const BANPRESTO_FIRST_GAME_YEAR = 1990;

const renderYears = () => {
  const years = [];
  for (let i = BANPRESTO_FIRST_GAME_YEAR; i <= CURRENT_YEAR; i++){
    years.push(i);
  }
  return (
    <MainYearList>
      {years.map(year => (
        <MainYearListItem>[{year}]</MainYearListItem>
      ))}
    </MainYearList>
  )
};

const Main: () => JSX.Element = () => {
  return(
    <MainContainer>
      <MainImage alt="home" src={home}/>
      <h1>Antique Game Research Society</h1>
      <MainYearSection>
        Banpresto By Year
        <MainYearCTA>
          {renderYears()}
        </MainYearCTA>
      </MainYearSection>
    </MainContainer>
  );
}

export default Main;