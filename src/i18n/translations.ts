export type Language = "rw" | "en" | "fr";

export const languageNames: Record<Language, string> = {
  rw: "Kinyarwanda",
  en: "English",
  fr: "Français",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.learn": "Learn",
    "nav.quiz": "Quiz",
    "nav.ai": "AI Assistant",
    "nav.dashboard": "Dashboard",
    "nav.login": "Log In",
    "nav.signup": "Sign Up",
    "nav.logout": "Log Out",

    // Home
    "home.headline": "Learn Amategeko y'Umuhanda the Smart Way",
    "home.subheadline": "A modern AI-powered platform to master Rwanda's traffic laws and prepare for your driving exam.",
    "home.cta.learn": "Start Learning",
    "home.cta.quiz": "Take a Quiz",
    "home.cta.ai": "Ask AI",

    // Features
    "home.feature.lessons.title": "Structured Lessons",
    "home.feature.lessons.desc": "6 comprehensive chapters covering every traffic law topic you need to know.",
    "home.feature.quiz.title": "Smart Quizzes",
    "home.feature.quiz.desc": "Topic-based quizzes, mock exams, and AI-generated questions to test your knowledge.",
    "home.feature.ai.title": "AI Assistant",
    "home.feature.ai.desc": "Ask questions, get explanations, and learn in your preferred language with our AI tutor.",

    // Footer
    "footer.tagline": "Learn traffic laws the smart way.",
    "footer.rights": "All rights reserved.",

    // Common
    "common.language": "Language",
    "common.darkMode": "Dark Mode",
    "common.lightMode": "Light Mode",
  },
  rw: {
    // Nav
    "nav.learn": "Kwiga",
    "nav.quiz": "Ikizamini",
    "nav.ai": "Umufasha wa AI",
    "nav.dashboard": "Ikibaho",
    "nav.login": "Kwinjira",
    "nav.signup": "Kwiyandikisha",
    "nav.logout": "Gusohoka",

    // Home
    "home.headline": "Wige Amategeko y'Umuhanda mu Buryo Bwiza",
    "home.subheadline": "Urubuga rukoreshwa na AI rugufasha kwiga amategeko y'umuhanda mu Rwanda no gutegura ikizamini cyo gutwara.",
    "home.cta.learn": "Tangira Kwiga",
    "home.cta.quiz": "Kora Ikizamini",
    "home.cta.ai": "Baza AI",

    // Features
    "home.feature.lessons.title": "Amasomo Yubakiye",
    "home.feature.lessons.desc": "Ibice 6 byuzuye bigufasha kumenya amategeko yose y'umuhanda.",
    "home.feature.quiz.title": "Ibizamini Byiza",
    "home.feature.quiz.desc": "Ibizamini ku ngingo, imyitozo y'ikizamini nyacyo, n'ibibazo bikorwa na AI.",
    "home.feature.ai.title": "Umufasha wa AI",
    "home.feature.ai.desc": "Baza ibibazo, ubonye ibisobanuro, wige mu rurimi ukunda ukoresheje AI yacu.",

    // Footer
    "footer.tagline": "Wige amategeko y'umuhanda mu buryo bwiza.",
    "footer.rights": "Uburenganzira bwose bwihariwe.",

    // Common
    "common.language": "Ururimi",
    "common.darkMode": "Ubururu",
    "common.lightMode": "Urumuri",
  },
  fr: {
    // Nav
    "nav.learn": "Apprendre",
    "nav.quiz": "Quiz",
    "nav.ai": "Assistant IA",
    "nav.dashboard": "Tableau de bord",
    "nav.login": "Connexion",
    "nav.signup": "Inscription",
    "nav.logout": "Déconnexion",

    // Home
    "home.headline": "Apprenez le Code de la Route de Manière Intelligente",
    "home.subheadline": "Une plateforme moderne alimentée par l'IA pour maîtriser les lois de la circulation au Rwanda et préparer votre examen de conduite.",
    "home.cta.learn": "Commencer à Apprendre",
    "home.cta.quiz": "Faire un Quiz",
    "home.cta.ai": "Demander à l'IA",

    // Features
    "home.feature.lessons.title": "Leçons Structurées",
    "home.feature.lessons.desc": "6 chapitres complets couvrant tous les sujets du code de la route.",
    "home.feature.quiz.title": "Quiz Intelligents",
    "home.feature.quiz.desc": "Quiz par sujet, examens blancs et questions générées par IA pour tester vos connaissances.",
    "home.feature.ai.title": "Assistant IA",
    "home.feature.ai.desc": "Posez des questions, obtenez des explications et apprenez dans votre langue préférée avec notre tuteur IA.",

    // Footer
    "footer.tagline": "Apprenez le code de la route intelligemment.",
    "footer.rights": "Tous droits réservés.",

    // Common
    "common.language": "Langue",
    "common.darkMode": "Mode sombre",
    "common.lightMode": "Mode clair",
  },
};
