import React, { useState } from 'react';

function LoginForm() {
  // États pour les champs email et mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Validation simple : vérifier que les champs ne sont pas vides
    if (!email || !password) {
      setErrorMessage('Veuillez entrer un email et un mot de passe.');
      return;
    }

    // Validation basique de l'email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Veuillez entrer un email valide.');
      return;
    }

    // Réinitialiser les messages d'erreur
    setErrorMessage('');

    console.log('Email:', email);
    console.log('Mot de passe:', password);

    // Simuler une redirection ou un traitement après la soumission
    alert('Connexion réussie !');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Connexion</h2>

      {/* Formulaire */}
      <form onSubmit={handleSubmit}>
        {/* Champ Email */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Champ Mot de passe */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Message d'erreur */}
        {errorMessage && <p style={{ color: 'red', marginBottom: '15px' }}>{errorMessage}</p>}

        {/* Bouton de soumission */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
