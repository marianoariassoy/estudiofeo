import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomeContainer";
import Post from "./pages/post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
