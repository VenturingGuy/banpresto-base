import styled from "styled-components";

export const MainContainer = styled.div`
  max-width           : 100%;
  height          : 100%;
  background-color: black;
  color           : white;
  display         : flex;
  align-items     : center;
  flex-direction  : column;
`;

export const MainImage = styled.img`
  width  : 370px;
  height : 324px;
  padding: 24px 16px;
`;

export const MainYearSection = styled.div`
  width : 80%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainYearCTA = styled.div`

`;

export const MainYearList = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 16px;
  flex-flow: row wrap;
`;

export const MainYearListItem = styled.a`
  padding: 0 4px;

  &:hover {
    cursor: pointer;
  }
`;