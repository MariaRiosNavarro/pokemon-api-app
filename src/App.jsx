import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Menu from "./pages/Menu";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/test" element={<Test />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
