const nodemailer = require('nodemailer');

// Création du transporteur SMTP pour l'envoi de l'e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_adresse_email@gmail.com',
    pass: 'votre_mot_de_passe',
  },
});

// Définition des informations de l'e-mail
const mailOptions = {
  from: 'votre_adresse_email@gmail.com',
  to: 'destinataire@example.com',
  subject: 'Test d\'envoi d\'e-mail',
  text: 'Ceci est un test d\'envoi d\'e-mail avec Nodemailer.',
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('E-mail envoyé : ' + info.response);
  }
});
