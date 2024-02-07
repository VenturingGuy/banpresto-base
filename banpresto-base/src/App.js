import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './components/Main/Main.tsx';
import YearPage from './components/YearPage/YearPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/banpresto-base" element={<Main/>}/>
        <Route path="/banpresto-games-by-year/:year" element={<YearPage/>}/>
        <Route path="/games/:game" element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
