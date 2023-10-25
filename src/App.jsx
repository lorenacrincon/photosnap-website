import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/home/Home";
import Stories from "./components/pages/stories/Stories";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
