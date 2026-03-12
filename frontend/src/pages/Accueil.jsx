import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

// Import des composants séparés
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero/Hero';
import CourseModal from '../components/CourseModal';

// Import des images
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import testimonial4 from '../assets/testimonial4.jpg';
import Article1 from '../assets/Article1.jpg';
import Article2 from '../assets/Article2.webp';
import Article3 from '../assets/Article3.webp';
import Article4 from '../assets/Article4.webp';
import reseau from '../assets/reseau.webp';
import EthicalHacker from '../assets/ethicalHacker.webp';
import data from '../assets/data.webp';
import linux from '../assets/linux.webp';
import python from '../assets/python.jpg';
import sens_num from '../assets/sens_num.webp'; 


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
// COMPOSANT LAST ARTICLES (4 articles)
// ============================================
const LastArticles = () => {
  const articles = [
    {
      id: 1,
      image: Article1,
      title: 'Et si je te disais que la partie la plus dangereuse d\'un pentest... n\'est pas technique ?'
    },
    {
      id: 2,
      image: Article2,
      title: 'Première conférence de l\'année  CyberSécurité & Hacking : au-delà des idées reçues.'
    },
    {
      id: 3,
      image: Article3,
      title: 'Les pirates informatiques peuvent SUIVRE les e-mails grâce à cet outil'
    },
    {
      id: 4,
      image: Article4,
      title: 'Samedi 22 novembre 2025, j\'ai vecu un moment qui resume parfaitement pourquoi je fais de la cybersecurité.'
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
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <h3 className="article-title">{article.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// COMPOSANT TRAINING CARD
// ============================================
const TrainingCard = ({ clearance, title, description, price, duration, image, onVoirPlus }) => (
  <div className="training-card">
    <div className="card-image">
      <span className="clearance-badge">{clearance}</span>
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      <button className="btn-card-voir-plus" onClick={onVoirPlus}>
        VOIR PLUS →
      </button>
      
      <div className="card-footer">
        <span className="card-price">{price}</span>
        <span className="card-duration">⏱ {duration}</span>
      </div>
    </div>
  </div>
);

// ============================================
// COMPOSANT TRAINING PATHS (6 cours + pagination)
// ============================================
const TrainingPaths = ({ onVoirPlus }) => {
  const courses = [
    {
      clearance: 'L3 CLEARANCE',
      title: 'Principes de base des réseaux',
      description: 'Le cours Networking Essentials permet aux apprenants d\'acquérir une large compréhension de base des réseaux.',
      price: '$199.00',
      duration: '40h',
      image: reseau 

    },
    {
      clearance: 'L2 CLEARANCE',
      title: 'Ethical Hacker ',
      description: 'Design robust network perimeters and secure traffic flow patterns for enterprise environments.',
      price: '$249.00',
      duration: '32h',
      image: EthicalHacker
    },
    {
      clearance: 'L4 CLEARANCE',
      title: 'Data Analytics Essentials',
      description: 'Secure distributed systems, multi-cloud architectures, and modern cloud-native infrastructures.',
      price: '$299.00',
      duration: '48h',
      image: data
    },
    {
      clearance: 'L3 CLEARANCE',
      title: 'Linux Unhatched',
      description: 'Learn to build and maintain secure network infrastructures against advanced persistent threats.',
      price: '$219.00',
      duration: '36h',
      image: linux
    },
    {
      clearance: 'L2 CLEARANCE',
      title: 'Programmation',
      description: 'Reverse engineer malicious software and understand attack vectors to build better defenses.',
      price: '$279.00',
      duration: '44h',
      image: python
    },
    {
      clearance: 'L4 CLEARANCE',
      title: 'Digital Awareness',
      description: 'Master the art of detecting, responding to, and recovering from security breaches.',
      price: '$329.00',
      duration: '52h',
      image: sens_num
    }
  ];

  return (
    <section className="training-paths" id="courses">
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
            <TrainingCard 
              key={index} 
              {...course} 
              onVoirPlus={() => onVoirPlus(course)} 
            />
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
      name: 'Bienvenue KARAGI',
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
      name: 'Jean-François KALILWA',
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
                <img src={testimonial.photo} alt={testimonial.name} loading="lazy" className="testimonial-photo" />
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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCourse(null), 300);
  };

  return (
    <div className="accueil">
      <Navbar />
      <main>
        <Hero onScrollToCourses={scrollToCourses} />
        <Stats />
        <LastArticles />
        <TrainingPaths onVoirPlus={handleOpenModal} />
        <Testimonials />
      </main>
      <Footer />
      <CourseModal 
        course={selectedCourse} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default Accueil;