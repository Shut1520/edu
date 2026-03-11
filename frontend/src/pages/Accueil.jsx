import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

// Import des composants
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import des images depuis le dossier assets
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

// Import des photos de témoignages (à ajouter dans assets)
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import testimonial4 from '../assets/testimonial4.jpg';

// ============================================
// COMPOSANT HERO
// ============================================
const Hero = () => (
  <section className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="system-status">
          <span className="status-dot">●</span>
          SYSTEM STATUS: ONLINE
        </div>
        
        <h1 className="hero-title">
          Hack the Future.<br />
          <span className="text-highlight">Secure the Grid.</span>
        </h1>
        
        <p className="hero-description">
          Master the art of ethical hacking with industry-leading experts. 
          Professional-grade cybersecurity training for the next generation of digital defenders.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary">
            START LEARNING ⚡
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

// ============================================
// COMPOSANT STATS
// ============================================
const Stats = () => {
  const statsData = [
    { label: 'ACTIVE OPERATIVES', value: '15,402', change: '+12.4%' },
    { label: 'INFILTRATION RATE', value: '98.2%', change: '+5.1%' },
    { label: 'SYSTEM CERTS', value: '50+', change: '+8.9%' },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">
              {stat.value}
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================
// COMPOSANT LAST ARTICLES
// ============================================
const LastArticles = () => {
  const articles = [
    {
      id: 1,
      image: image1,
      title: 'Créez votre propre robot de piratage IA avec OpenClaw et Kali Linux'
    },
    {
      id: 2,
      image: image2,
      title: 'SUIVI des publications Instagram - Outil OSINT GRATUIT'
    },
    {
      id: 3,
      image: image3,
      title: 'Les pirates informatiques peuvent SUIVRE les e-mails grâce à cet outil'
    },
    {
      id: 4,
      image: image1,
      title: 'Suivi d\'un numéro de téléphone à l\'aide de renseignements en sources ouvertes'
    },
    {
      id: 5,
      image: image2,
      title: 'Extraire les e-mails des administrateurs grâce à l\'OSINT'
    },
    {
      id: 6,
      image: image3,
      title: 'La recherche d\'images inversée vous expose'
    },
    {
      id: 7,
      image: image1,
      title: 'Pirater les comptes WhatsApp et Gmail de n\'importe qui et contourner l\'authentification à deux facteurs (2FA/MFA).'
    },
    {
      id: 8,
      image: image2,
      title: 'Comment les pirates informatiques vous traquent grâce à votre adresse IP'
    }
  ];

  return (
    <section className="last-articles">
      <div className="articles-container">
        <div className="articles-header">
          <h2 className="articles-title">DERNIERS ARTICLES</h2>
          <p className="articles-subtitle">Dans le domaine du piratage et de la sécurité</p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <h3 className="article-title">{article.title}</h3>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button className="pagination-btn">«</button>
          <button className="pagination-btn">‹</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
          <button className="pagination-btn">›</button>
          <button className="pagination-btn">»</button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMPOSANT TRAINING CARD
// ============================================
const TrainingCard = ({ clearance, title, description, price, duration, image }) => (
  <div className="training-card">
    <div className="card-image">
      <span className="clearance-badge">{clearance}</span>
      <img src={image} alt={title} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span className="card-price">{price}</span>
        <span className="card-duration">⏱ {duration}</span>
      </div>
    </div>
  </div>
);

// ============================================
// COMPOSANT TRAINING PATHS
// ============================================
const TrainingPaths = () => {
  const courses = [
    {
      clearance: 'L3 CLEARANCE',
      title: 'Advanced Pentesting',
      description: 'Master complex exploitation techniques and vulnerability assessment across diverse network topologies.',
      price: '$199.00',
      duration: '40h',
      image: image1
    },
    {
      clearance: 'L2 CLEARANCE',
      title: 'Firewall Architecture',
      description: 'Design robust network perimeters and secure traffic flow patterns for enterprise environments.',
      price: '$249.00',
      duration: '32h',
      image: image2
    },
    {
      clearance: 'L4 CLEARANCE',
      title: 'Cloud Security',
      description: 'Secure distributed systems, multi-cloud architectures, and modern cloud-native infrastructures.',
      price: '$299.00',
      duration: '48h',
      image: image3
    }
  ];

  return (
    <section className="training-paths">
      <div className="training-container">
        <div className="section-header">
          <div>
            <span className="section-subtitle">OPERATIONAL MODULES</span>
            <h2 className="section-title">Professional Training Paths</h2>
          </div>
          <button className="btn btn-link">
            VIEW ALL NODES →
          </button>
        </div>

        <div className="training-grid">
          {courses.map((course, index) => (
            <TrainingCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMPOSANT TESTIMONIALS
// ============================================
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emmanuel GILWANDJI',
      photo: testimonial1,
      quote: 'Ce cours va changer votre vie !',
      text: 'Je voulais simplement remercier Bazika pour ses cours. J\'ai voulu essayer la publicité Facebook par curiosité, et finalement, après seulement sept mois de formation avec lui, j\'ai quitté l\'armée et intégré une excellente entreprise. J\'ai pris les choses très au sérieux et travaillé dur chaque jour, ce qui m\'a permis d\'être recruté par une entreprise formidable... et un an plus tard, j\'en suis le responsable. Je me prépare actuellement aux certifications OSCP et MASPT.'
    },
    {
      id: 2,
      name: 'Mike Devlin',
      photo: testimonial2,
      quote: '',
      text: '« Je suis absolument bluffé par les connaissances que Bazika partage constamment en matière de tests d\'intrusion. J\'ai toujours voulu apprendre le hacking pour me protéger des piratages, mais il n\'existait aucun cours ni ressource unique. Je passais généralement des heures sur YouTube et Google, pour finalement être déçu et submergé par la quantité d\'informations superflues. Ce cours présente la théorie et la mise en pratique des tests d\'intrusion. J\'ai déjà suivi quatre cours et j\'en achèterai d\'autres s\'il en publie de nouveaux. Merci Bazika ! »'
    },
    {
      id: 3,
      name: 'Raymund Paglinawan',
      photo: testimonial3,
      quote: '',
      text: '« Je recommande vivement ce cours à tous ceux qui souhaitent s\'initier au hacking éthique. Un hacker éthique professionnel et expérimenté vous enseignera les concepts les plus efficaces et les plus faciles à comprendre, avec une forte composante pratique tout au long de la formation. Un grand merci à Bazika. »'
    },
    {
      id: 4,
      name: 'Jediah Logiodice',
      photo: testimonial4,
      quote: '',
      text: 'Que vous soyez novice en matière de tests d\'intrusion ou que vous recherchiez simplement un cours de remise à niveau, il existe d\'excellents cours.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">CE QUE DISENT LES GENS</h2>
          <div className="title-underline"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="testimonial-header">
                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  {testimonial.quote && <p className="testimonial-quote-title">{testimonial.quote}</p>}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMPOSANT PRINCIPAL ACCUEIL
// ============================================
function Accueil() {
  return (
    <div className="accueil">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <LastArticles />
        <TrainingPaths />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;