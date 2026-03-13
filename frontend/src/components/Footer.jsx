import { Link } from 'react-router-dom';
import '../pages/Accueil.css';

// Import des images
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import twitter from '../assets/twitter.png';
import linkedln from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png'

import dcorpLogo from '../assets/dcorp.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Colonne 1: D-CORP Brand avec logo cliquable */}
      <div className="footer-brand">
        <Link to="/" className="brand-logo">
          <img src={dcorpLogo} alt="D-CORP ACADEMY" className="footer-logo" />
        </Link>
        <p>
          The premier training grounds for the next generation of security professionals. 
          We don't just teach hacking; we build architects of a more secure digital world.
        </p>
        <div className="social-links">
          <a href="web.facebook.com/dcorpacademy" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="dcorpacademy@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="Gmail" className="social-icon" />
          </a>
          <a href="twitter.com/dcorpacademy" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="linkedin.com/in/john-bazika-bulambo" target="_blank" rel="noopener noreferrer">
            <img src={linkedln} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="www.youtube.com/@dcorpacademy" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="social-icon" />
          </a>
          <a href="instagram.com/dcorpacademy" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Colonne 2: Resources */}
      <div className="footer-column">
        <h4>RESOURCES</h4>
        <ul>
          <li><Link to="#">Documentation</Link></li>
          <li><Link to="#">Hacker Tools</Link></li>
          <li><Link to="#">Lab Access</Link></li>
          <li><Link to="#">Knowledge Base</Link></li>
        </ul>
      </div>

      {/* Colonne 3: Academy */}
      <div className="footer-column">
        <h4>ACADEMY</h4>
        <ul>
          <li><Link to="#">Careers</Link></li>
          <li><Link to="#">Partnerships</Link></li>
          <li><Link to="#">Student Stories</Link></li>
          <li><Link to="#">Hall of Fame</Link></li>
        </ul>
      </div>

      {/* Colonne 4: Legal */}
      <div className="footer-column">
        <h4>LEGAL</h4>
        <ul>
          <li><Link to="#">Terms of Entry</Link></li>
          <li><Link to="#">Security Ethics</Link></li>
          <li><Link to="#">Privacy Protocol</Link></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024 D-CORP ACADEMY // ENCRYPTED_SESSIONS_ONLY</p>
      <div className="footer-meta">
        <span>IP: 192.168.1.1</span>
        <span>LAT: 40.7128° N</span>
        <span>LONG: 74.0060° W</span>
      </div>
    </div>
  </footer>
);

export default Footer;