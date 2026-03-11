import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Accueil.css';

// Import des images
import profil from '../assets/profil.png';
import image1 from '../assets/image1.png';

const Navbar = () => {
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [certificationsDropdown, setCertificationsDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">▶</span>
          <span className="brand-text">D-CORP ACADEMY</span>
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>

          {/*  <li>
            <Link to="/hacking-security-posts" className="dropdown-toggle">
              HACKING & SECURITY POSTS <span className="dropdown-arrow">▼</span>
            </Link>
          </li> */}
          
          <li 
            className="dropdown"
            onMouseEnter={() => setCoursesDropdown(true)}
            onMouseLeave={() => setCoursesDropdown(false)}            
          >
            <Link to="/courses" className="dropdown-toggle">
              Courses <span className="dropdown-arrow">▼</span>
            </Link>
            {coursesDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-links">
                    <Link to="/courses/all" className="dropdown-item">All Courses</Link>
                    <Link to="/courses/ethical-hacking" className="dropdown-item">Ethical Hacking Course</Link>
                    <Link to="/courses/bundles" className="dropdown-item">Bundles</Link>
                    <Link to="/courses/memberships" className="dropdown-item">Memberships</Link>
                    <Link to="/courses/faq" className="dropdown-item">FAQ</Link>
                  </div>
                  <div className="dropdown-popular">
                    <h4 className="popular-title">POPULAR COURSE</h4>
                    <Link to="/courses/python-ethical-hacking" className="popular-course">
                      <img src={image1} alt="Python & Ethical Hacking" className="popular-course-img" />
                      <div className="popular-course-info">
                        <h5>Learn Python & Ethical Hacking From Scratch Course</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          
          <li
            className="dropdown"
            onMouseEnter={() => setCertificationsDropdown(true)}
            onMouseLeave={() => setCertificationsDropdown(false)}
          >
            <Link to="/certifications" className="dropdown-toggle">
              Certifications <span className="dropdown-arrow">▼</span>
            </Link>
            {certificationsDropdown && (
              <div className="dropdown-menu dropdown-certifications">
                <div className="dropdown-content">
                  <div className="dropdown-links">
                    <Link to="/certifications/all" className="dropdown-item">All Certifications</Link>
                    <Link to="/certifications/osint" className="dropdown-item">Certified OSINT Professional</Link>
                    <Link to="/certifications/ceh" className="dropdown-item">Certified Ethical Hacker</Link>
                    <Link to="/certifications/oscp" className="dropdown-item">Offensive Security Certified</Link>
                    <Link to="/certifications/security" className="dropdown-item">Security Analyst</Link>
                  </div>
                  <div className="dropdown-popular">
                    <h4 className="popular-title">FEATURED CERTIFICATION</h4>
                    <Link to="/certifications/osint" className="popular-course">
                      <img src={image1} alt="OSINT Certification" className="popular-course-img" />
                      <div className="popular-course-info">
                        <h5>Become a Certified OSINT Professional</h5>
                        <span className="certification-badge">NEW</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*  <li><Link to="/labs">Labs</Link></li> */}
          <li><Link to="/community">Services</Link></li>
        </ul>

        <div className="navbar-actions">
          <div className="search-box">
            {/*  <span className="search-icon">🔍</span> */}
            <input type="text" placeholder="Search systems..." />
          </div>
          <button className="btn btn-join">JOIN THE GRID</button>
          <div className="user-avatar">
            <img src={profil} alt="Profil" className="user-avatar-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;