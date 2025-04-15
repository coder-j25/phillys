import './index.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import AboutMe from './views/AboutMe';
// import Menu from './views/Menu';
// import FindUs from './views/FindUs';
// import ContactUs from './views/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        {/* <Route path="/" element={<AboutMe />}/> */}
        {/* <Route path="/menu" element={<Menu />}/> */}
        {/* <Route path="/findus" element={<FindUs />}/> */}
        {/* <Route path="/contact" element={<ContactUs />}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
