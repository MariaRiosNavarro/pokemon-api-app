import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Menu from "./pages/Menu";
import { useMyContext } from "./Context/AppPokemonFetchProvider";

function App() {
  const { theme } = useMyContext();

  return (
    <div className={theme ? "dark" : null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
