import { useTypingEffect } from '../hooks/useTypingEffect';
import './Hero.css';

const Hero = ({ onScrollToCourses }) => {
  const texts = [
    {
      title: 'Hack the Future.\nSecure the Grid.',
      description: 'Master the art of ethical hacking with industry-leading experts. Professional-grade cybersecurity training for the next generation of digital defenders.'
    },
    {
      title: 'Become a Certified\nEthical Hacker.',
      description: 'Get certified with industry-recognized certifications. Our expert-led courses prepare you for real-world cybersecurity challenges.'
    },
    {
      title: 'Join Elite\nCyber Defenders.',
      description: 'Join a community of 15,000+ security professionals. Learn from industry experts and advance your cybersecurity career today.'
    }
  ];

  const { displayedTitle, displayedDesc } = useTypingEffect(texts, 50, 3000);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="system-status">
            <span className="status-dot">●</span>
            SYSTEM STATUS: ONLINE
          </div>
          
          <h1 className="hero-title">
            {displayedTitle}
            <span className="typing-cursor">|</span>
          </h1>
          
          <p className="hero-description">
            {displayedDesc}
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onScrollToCourses}>
             EMMANUEL GIL
            </button>
            <button className="btn btn-secondary">
              VIEW CURRICULUM
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="server-rack">
            <div className="server-terminal">
              <p>{`> decrypter.exe --active`}</p>
              <p>{`> fetching_node_04... OK`}</p>
            </div>
            <div className="shield-icon">🛡️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;