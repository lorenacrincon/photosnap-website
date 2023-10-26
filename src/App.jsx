import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/home/Home";
import Stories from "./components/pages/stories/Stories";
import Footer from "./components/common/footer/Footer";
import Features from "./components/pages/features/Features";
import Pricing from "./components/pages/pricing/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
