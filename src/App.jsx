import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TranslatePage from "./pages/TranslatePage";
import RandomPage from "./pages/RandomPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<TranslatePage />} />
        <Route path="/random" element={<RandomPage />} />
      </Routes>
    </>
  );
}

export default App;