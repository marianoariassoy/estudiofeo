import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomeContainer";
import Contacto from "./pages/contacto/Contacto";
import Post from "./pages/post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
