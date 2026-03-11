import { useState } from 'react';
import emailjs from '@emailjs/browser';

const CourseModal = ({ course, isOpen, onClose }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  if (!isOpen || !course) return null;

  // Gestion de l'ouverture du modal de confirmation
  const handleInterestClick = () => {
    setShowConfirmModal(true);
  };

  // Fermer le modal de confirmation
  const handleCloseConfirm = () => {
    setShowConfirmModal(false);
    setUserEmail('');
    setSendStatus(null);
  };

  // Envoi de l'email via EmailJS
  const handleSendEmail = async (e) => {
    e.preventDefault();
    
    if (!userEmail || !userEmail.includes('@')) {
      setSendStatus({ type: 'error', message: 'Veuillez entrer un email valide' });
      return;
    }

    setIsSending(true);

    try {
      // Configuration EmailJS (à remplacer par tes propres IDs)
      const serviceID = 'YOUR_SERVICE_ID'; // Ex: 'service_xyz'
      const templateID = 'YOUR_TEMPLATE_ID'; // Ex: 'template_abc'
      const publicKey = 'YOUR_PUBLIC_KEY'; // Ex: 'user_abc123'

      const templateParams = {
        to_email: 'admin@d-corpacademy.com', // Email du formateur/admin
        user_email: userEmail,
        course_name: course.title,
        course_price: course.price,
        course_duration: course.duration,
        message: `Un utilisateur est intéressé par le cours : ${course.title}`
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSendStatus({ type: 'success', message: 'Demande envoyée avec succès !' });
      
      // Fermer après 2 secondes
      setTimeout(() => {
        handleCloseConfirm();
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSendStatus({ type: 'error', message: 'Erreur lors de l\'envoi. Réessayez.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal Principal */}
      <div className="course-modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-content">
          <div className="modal-image">
            <span className="modal-clearance-badge">{course.clearance}</span>
            <img src={course.image} alt={course.title} />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{course.title}</h2>
            
            <div className="modal-details">
              <div className="detail-item">
                <span className="detail-icon">⏱</span>
                <span>{course.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💰</span>
                <span>{course.price}</span>
              </div>
            </div>

            <div className="modal-description">
              <h3>Description du cours</h3>
              <p>{course.description}</p>
              <p>
                Ce cours complet vous permettra de maîtriser les concepts essentiels 
                grâce à des exercices pratiques et des études de cas réels. 
                Vous aurez accès à des ressources exclusives et un support personnalisé 
                tout au long de votre formation.
              </p>
              <ul className="modal-features">
                <li>✓ Accès à vie au contenu</li>
                <li>✓ Certificat de completion</li>
                <li>✓ Support communautaire</li>
                <li>✓ Mises à jour incluses</li>
              </ul>
            </div>

            <button className="btn-cta" onClick={handleInterestClick}>
              Je suis intéressé par ce cours
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Confirmation */}
      {showConfirmModal && (
        <>
          <div className="modal-overlay" onClick={handleCloseConfirm}></div>
          
          <div className="confirm-modal">
            <button className="modal-close" onClick={handleCloseConfirm}>✕</button>
            
            <div className="confirm-content">
              <h3>Confirmer votre intérêt</h3>
              <p>Voulez-vous vraiment envoyer votre demande pour ce cours ?</p>
              
              <form onSubmit={handleSendEmail}>
                <div className="form-group">
                  <label htmlFor="email">Votre adresse email</label>
                  <input
                    type="email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="exemple@email.com"
                    required
                    disabled={isSending}
                  />
                </div>

                {sendStatus && (
                  <div className={`status-message ${sendStatus.type}`}>
                    {sendStatus.message}
                  </div>
                )}

                <div className="confirm-actions">
                  <button 
                    type="button" 
                    className="btn-cancel" 
                    onClick={handleCloseConfirm}
                    disabled={isSending}
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit" 
                    className="btn-confirm"
                    disabled={isSending}
                  >
                    {isSending ? 'Envoi en cours...' : 'Confirmer et envoyer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseModal;