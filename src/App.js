import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
