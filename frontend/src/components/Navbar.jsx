import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Accueil.css';

// Import des images
import profil from '../assets/profil.png';
import image1 from '../assets/image1.png';

const Navbar = () => {
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [certificationsDropdown, setCertificationsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ajouter/supprimer la classe menu-open au body
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">▶</span>
          <span className="brand-text">D-CORP ACADEMY</span>
        </div>

        {/* Menu Desktop */}
        <ul className="navbar-menu desktop-menu">
          <li><Link to="/">Home</Link></li>

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

          <li><Link to="/community">Services</Link></li>
        </ul>

        {/* Actions Desktop */}
        <div className="navbar-actions desktop-actions">
          <div className="search-box">
            <input type="text" placeholder="Search systems..." />
          </div>
          <button className="btn btn-join">JOIN THE GRID</button>
          <div className="user-avatar">
            <img src={profil} alt="Profil" className="user-avatar-img" />
          </div>
        </div>

        {/* Bouton Menu Burger Mobile */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="mobile-menu-content">
          <ul className="mobile-menu-list">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-link-icon">⌂</span>
                Home
              </Link>
            </li>
            
            <li className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle"
                onClick={() => setCoursesDropdown(!coursesDropdown)}
              >
                <span className="mobile-link-icon">◈</span>
                Courses 
                <span className={`dropdown-arrow ${coursesDropdown ? 'rotate' : ''}`}>▼</span>
              </button>
              {coursesDropdown && (
                <ul className="mobile-dropdown-content">
                  <li><Link to="/courses/all" onClick={() => setMobileMenuOpen(false)}>All Courses</Link></li>
                  <li><Link to="/courses/ethical-hacking" onClick={() => setMobileMenuOpen(false)}>Ethical Hacking</Link></li>
                  <li><Link to="/courses/bundles" onClick={() => setMobileMenuOpen(false)}>Bundles</Link></li>
                  <li><Link to="/courses/memberships" onClick={() => setMobileMenuOpen(false)}>Memberships</Link></li>
                  <li><Link to="/courses/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link></li>
                </ul>
              )}
            </li>
            
            <li className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle"
                onClick={() => setCertificationsDropdown(!certificationsDropdown)}
              >
                <span className="mobile-link-icon">◉</span>
                Certifications 
                <span className={`dropdown-arrow ${certificationsDropdown ? 'rotate' : ''}`}>▼</span>
              </button>
              {certificationsDropdown && (
                <ul className="mobile-dropdown-content">
                  <li><Link to="/certifications/all" onClick={() => setMobileMenuOpen(false)}>All Certifications</Link></li>
                  <li><Link to="/certifications/osint" onClick={() => setMobileMenuOpen(false)}>OSINT Professional</Link></li>
                  <li><Link to="/certifications/ceh" onClick={() => setMobileMenuOpen(false)}>Ethical Hacker</Link></li>
                  <li><Link to="/certifications/oscp" onClick={() => setMobileMenuOpen(false)}>Offensive Security</Link></li>
                  <li><Link to="/certifications/security" onClick={() => setMobileMenuOpen(false)}>Security Analyst</Link></li>
                </ul>
              )}
            </li>
            
            <li>
              <Link to="/community" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-link-icon">◐</span>
                Services
              </Link>
            </li>
          </ul>

          {/* Profil mobile en bas */}
          <div className="mobile-profile-section">
            <div className="mobile-profile-avatar">
              <img src={profil} alt="Profil" />
            </div>
            <button className="btn btn-join mobile-join-btn">
              JOIN THE GRID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;