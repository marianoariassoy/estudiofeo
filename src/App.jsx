import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomeContainer";
import Contacto from "./pages/contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
