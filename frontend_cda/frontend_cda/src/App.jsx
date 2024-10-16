import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import LoginForm from './containers/Login.jsx';

function App() {

  // Stocker l'URL du backend dans une constante
  const backendUrl = "http://127.0.0.1:8000";

  // States pour stocker le message et les données reçues du backend
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  // Utiliser useEffect pour effectuer l'appel fetch au montage du composant
  useEffect(() => {
    fetch(backendUrl)
      .then(response => response.json()) // Convertir la réponse en JSON
      .then(jsonData => {
        // Mettre à jour les états avec les données reçues
        setMessage(jsonData.message);
        setData(jsonData.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []); // Le tableau vide [] signifie que cet effet est exécuté une seule fois au montage

  return (
    <>
      <div>
      <h1>Bienvenu sur mon site !!</h1>

      <p>Ici pour essayer de communiquer avec le backend :</p>

      <p>vérification de l'url du backend : {backendUrl}</p>

      {/* Affiche le message récupéré du backend */}
      {message && <h2>{message}</h2>}

      {/* Affiche les données récupérées sous forme de liste */}
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Pas de données disponibles</p>
      )}

      <p>Fin de la zone d'essai pour communiquer avec le backend</p>

      <LoginForm />

      </div>
    </>
  )
}

export default App
