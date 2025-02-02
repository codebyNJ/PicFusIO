import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import myImage2 from './assets/my3.jpg';
import myImage1 from './assets/my1.jpg';
import myImage3 from './assets/my2.png';
import Particles from './Particle'; // Import the Particles component
import DemoVideo from './assets/demo.mp4';
import AIMaker from './aimaker';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Particles /> {/* Add Particles component */}
      <nav>
        <div>
          <h1>PICFUS<span>.IO</span></h1>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav ${menuOpen ? "responsive" : ""}`}>
          <li><Link to="/aimaker"><span>AI Maker</span></Link></li>
          <li><a href="https://dummy-two-pied.vercel.app/">Collage Editor</a></li>
        </ul>
      </nav>

      <div className="home_page">
        <h2>
          AI-POWERED <span>PHOTO</span>
          <br/>
          <span>COLLAGE</span> MAKER
        </h2>
        <button onClick={() => window.open('https://dummy-two-pied.vercel.app/', '_blank', 'noopener,noreferrer')}><span>GET STARTED</span></button>
        
        {/* Insert video here */}
        <div className="video-container">
          <video width="100%" autoPlay loop muted>
            <source src={DemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="content">
        <div className="hqt">
          <h3><span>HIGH QUALITY TEMPLATES</span></h3>
          <p>Access a wide variety of professionally designed templates that guarantee stunning, high-resolution results for your photo collages.</p>
        </div>
        <div className="ndsn">
          <h3><span>NO LOGIN REQUIRED</span></h3>
          <p>Start using the app instantly without the need for an account or sign-in process, offering quick and hassle-free access.</p>
        </div>
        <div className="ftu">
          <h3><span>FREE TO USE WITH AI TOOLS</span></h3>
          <p>Leverage advanced AI tools completely free of charge to enhance your creativity and streamline your collage-making experience.</p>
        </div>
      </div>

      <div className="madeby">
        <div className="nijeesh">
          <img src={myImage1} alt="Nijeesh NJ" />
          <h3><span>NIJEESH NJ</span></h3>
          <a href="https://github.com/codebyNJ">Github</a>
          <a href="https://www.linkedin.com/in/nijeesh-nj-062468285">LinkedIn</a>
        </div>
        <div className="naveen">
          <img src={myImage2} alt="Naveen Kanthan L" />
          <h3><span>NAVEEN KANTHAN L</span></h3>
          <a href="https://github.com/Naveen1825">Github</a>
          <a href="https://www.linkedin.com/in/naveenkanthan/">LinkedIn</a>
        </div>
        <div className="himavath">
          <img src={myImage3} alt="Himavath M" />
          <h3><span>HIMAVATH M</span></h3>
          <a href="https://github.com/Himavath08">Github</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

      <footer>
        © 2025 PicFus.IO. All Rights Reserved.
      </footer>
    </div>
  );
}

function Root() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aimaker" element={<AIMaker />} />
      </Routes>
    </Router>
  )
}

export default Root;
