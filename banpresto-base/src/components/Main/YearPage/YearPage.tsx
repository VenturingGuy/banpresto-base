import React from "react";
import { useParams } from "react-router";
import gamesByYear from "../../../consts/gamesByYear.json";
import { YearPageContainer, YearPageGame } from "./YearPage.styled";

const YearPage: () => JSX.Element = () => {
  const { year } = useParams();

  return(
    <YearPageContainer>
      <h1>Banpresto: {year}</h1>
      <YearPageGame>
        {gamesByYear[year].gameTitles.map((gameTitle: string) =>
          <h3>{gameTitle}</h3>
        )}
      </YearPageGame>
    </YearPageContainer>
  )
};

export default YearPage;