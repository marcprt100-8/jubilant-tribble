const express = require('express');
const moment = require('moment');
const path = require('path');

const app = express();
const port = 3005;

// Middleware pour vérifier l'heure de la demande
const checkWorkingHours = (_req, _res, next) => {
  const now = moment();
  const dayOfWeek = now.day();
  const hourOfDay = now.hour();

  // Vérifiez si c'est un jour de semaine (du lundi au vendredi) et si l'heure est entre 9h et 17h
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 19) {
    // Si c'est dans les heures ouvrables, continuez le traitement de la requête
    next();
  } else {
    _res.status(403).send('L\'application est disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
  
    next();
  }
};
// Appliquer le middleware pour toutes les routes
app.use(checkWorkingHours);

// Définir le dossier statique pour les fichiers HTML, CSS, etc.
app.use(express.static(path.join(__dirname, '')));

// Route Express pour la page d'accueil
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/Index.html'));
});

app.get('/Accueil.html', (_req, res) => {
  res.sendFile(path.join(__dirname, '/Accueil.html'));
});

app.get('/Services.html', (_req, res) => {
  res.sendFile(path.join(__dirname, '/Services.html'));
});

app.get('/Contact.html', (_req, res) => {
  res.sendFile(path.join(__dirname, '/Contact.html'));
});
app.get('/Apropos.html', (_req, res) => {
  res.sendFile(path.join(__dirname, '/Apropos.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
