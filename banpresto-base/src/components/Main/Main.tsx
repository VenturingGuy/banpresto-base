import React from 'react';
import Home from 'src/components/Main/assets/Home.jpg';

const Main: () => JSX.Element = () => {
  return(
    <div className="main-page">
      <Home/>
      <h1>Oye como va</h1>
    </div>
  );
}

export default Main;