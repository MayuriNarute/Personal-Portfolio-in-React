import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ProjectShow from "./components/ProjectShow";
import Badges from "./components/Badges";
import Others from "./components/Others";
import Certificates from "./components/Certificates";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" 
              element= {<About />}
           />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/projects" element={<ProjectShow />} />
          <Route exact path="/CP_milestones" element={<Badges />} />
          <Route exact path="/other_Achievements" element={<Others />} />
          <Route exact path="/certificates" element={<Certificates/>}/>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
