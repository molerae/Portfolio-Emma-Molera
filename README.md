# Portfolio React Application

## Description
Ce projet est un portfolio personnel en React, conçu pour présenter mes compétences, mes projets, et mes expériences. Il utilise diverses images, des icônes de `react-icons` et un format de contenu JSON pour structurer les informations affichées.

## Contenu

### Images Importées
Les images sont stockées dans le dossier `./assets/images/` et sont organisées en sous-dossiers pour chaque section :
- **Hero_person** : Image principale.
- **Skills** : Images représentant des compétences.
- **Services** : Photos pour les projets réalisés.
- **Testimonials** : Logos utilisés pour représenter les entreprise où j'ai travaillé.

### Icônes Importées
Les icônes sont importées de `react-icons` et utilisées dans le menu de navigation et les informations de contact. Voici les principales icônes utilisées :
- **GrMail** : Icône de mail, utilisée pour afficher l'adresse e-mail.
- **MdCall** : Icône de téléphone, utilisée pour afficher le numéro de téléphone.
- **BsInstagram** : Icône d'Instagram.

## Structure des Données

### `content`

`content` est un ensemble structuré de données permettant de gérer le contenu affiché dans chaque section de l'application.

- **hero** : Section principale avec l'image et les informations de présentation.

- **skills** : Section des compétences.
    - `title` et `subtitle` : Titre et sous-titre de la section.
    - `skills_content` : Liste de compétences.
        - `name` : Nom de la compétence.
        - `para` : Brève description de l'expérience.
        - `logo` : Image représentant la compétence.
        - `details` : Détails des sous-compétences ou expériences liées.

- **services** : Section des projets réalisés.
    - `title` et `subtitle` : Titre et sous-titre de la section.
    - `service_content` : Liste des projets.
        - `title` : Nom du projet.
        - `para` : Description du projet.
        - `logo` : Logo ou image du projet.
        - `width` et `height` : Dimensions d'affichage du logo.

- **Testimonials** : Section des expériences professionnelles.
    - `title` et `subtitle` : Titre et sous-titre.
    - `testimonials_content` : Liste des expériences avec :
        - `review` : Description de l'expérience ou des tâches réalisées.
        - `img` : Image de l'expérience (avatar).
        - `name` : Nom et durée du poste.

- **Contact** : Section des informations de contact.


## Lancement du Projet
Pour lancer ce projet en local :
1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Exécutez `npm start` pour lancer l'application en mode développement.

## Déploiement
Cliquer sur le lien suivant : https://silver-alpaca-965184.hostingersite.com/

## Packages
+ [tailwind css](https://tailwindcss.com/docs/installation)
+ [vite js](https://vitejs.dev/guide/)
+ [swiper js](https://swiperjs.com/get-started)
+ [email js](https://www.emailjs.com/docs/)
+ [Aos (animation)](https://michalsnik.github.io/aos/)
+ [react modal](https://www.npmjs.com/package/react-modal)
+ [react-hot-toast](https://react-hot-toast.com/docs)
+ [react icons](https://react-icons.github.io/react-icons/)



