import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
import Accueil from './pages/Accueil' // Import de la page d'accueil

import './App.css'

function App() {
  return (
    <div className="app">
      {/* Tu peux mettre un Header ici qui sera visible sur toutes les pages */}
      
      <Routes>
        {/* Configuration des pages */}
        <Route path="/" element={<Accueil />} />

      </Routes>
    </div>
  )
}

export default App