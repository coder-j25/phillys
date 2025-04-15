import './index.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/findus" element={<FindUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </>
  );
}

export default App;
