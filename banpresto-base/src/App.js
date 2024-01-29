import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './components/Main/Main.tsx';
import YearPage from './components/Main/YearPage/YearPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/banpresto-games-by-year/:year" element={<YearPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
