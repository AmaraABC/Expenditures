# Restaurant by Cooking CORP.
Collaborateur(s) : **Amâra-Noah GAKOU**  
Date de création du dossier : 07/01/2026

Une mini-application de gestion de dépenses.

## Fonctionnalités de l'application
Sur cette application, un utilisateur pourra :
- Consulter ses dépenses ;
- Ajouter ses dépenses avec sa catégorie, sa date et sa description ;
- Modifier les informations de ses dépenses ;
- Supprimer ses dépenses.

## Endpoints / routes de l'API
- `GET /spendings` : Page des dépenses ;
- `GET /spendings/{id}` : Page d'une dépense spécifique ;
- `POST /spendings` : Page d'ajout des dépenses ;
- `PUT /spendings/{id}` : Page de mise à jour d'une dépense spécifique ;
- `DELETE /spendings/{id}` : Suppression d'une dépense.

## Composition du projet
Ce projet se caractérise principalement par son dossier [`/src`](/src) comporte toute la logique fondamentale pour le bon fonctionnement du projet. Dans ce dossier, on retrouve notamment :
- Le fichier [`server.js`](/src/server.js), fichier qui démarre l'application et qui concentre toutes les parties de l'API ;
- Le dossier [`/config`](/src/config/), qui contient les fichiers [`db.mongo.js`](/src/config/db.mongo.js) et [`db.postgres.js`](/src/config/db.postgres.js) nécessaires pour connecter l'application aux bases de données.

Etant donné que l'API du projet a été réalisé sous **architecture MVC (Models, Controllers, Routes)**, trois nouveaux dossiers sont présents en plus des fichiers préccédents dans le dossier [`/src`](/src) :
- Le dossier [`/models`](/src/models/) qui regroupe la structure des données qui seront stockées dans les bases de données ;
- Le dossier [`/controllers`](/src/controllers/) contenant les fichiers qui vont faire la passerelle entre les routes et les models qui intéragissent avec les bases de données ;
- Le dossier [`/routes`](/src/routes/) où sont définis les endpoints de l'API.

Pour finir, nous avons :
- Un dossier [`/middlewares`](/src/middlewares/) qui englobe un ensemble de fichiers ayant pour but d'effectuer une action spécifique sur une requête du serveur ;
- Un dossier [`/tests`](/src/tests/) qui regroupe les fichiers tests de chaque contrôleur de l'application.

## Guide d'installation et de configuration du projet
Tout d'abord, s'assurer que **PostgreSQL** et **MongoDB** sont installés sur votre machine. Si cela n'est pas le cas, se rendre sur la [page d'installation de PostgreSQL](https://www.postgresql.org/download/), de [MongoDB](https://www.mongodb.com/docs/manual/installation/) puis suivre les instructions.

**Node.js** est également requis pour faire fonctionner le projet. Il faut donc [l'installer](https://nodejs.org/en/download) si ce n'est pas dejà fait.

  **1** - Sur le terminal, cloner le projet à partir de son lien GitHub :

      git clone https://github.com/AmaraABC/Restaurant-by-Cooking-CORP.git

  **2** - Installer les librairies nécessaires au projet :

      npm install
    
  **3** - Créer un fichier `.env` à la racine du dossier, à partir du fichier [`.env.example`](/.env.example) :

      cp .env.example .env

  **4** - Démarrer le serveur :

      npm run dev

## Améliorations envisageables
- Faire le front-end de l'application ;
- Eviter de créer plusieurs routes ayant le même fonctionnement ;
- Compléter le guide d'installation du projet.