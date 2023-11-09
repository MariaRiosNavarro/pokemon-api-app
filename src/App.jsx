import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Menu from "./pages/Menu";
import { AppPokemonFetchProvider } from "./Context/AppPokemonFetchProvider";

function App() {
  return (
    <div>
      <AppPokemonFetchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/detail/:name" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </AppPokemonFetchProvider>
    </div>
  );
}

export default App;
