CREATE TABLE Utilisateur(
   identifiant_utilisateur SERIAL,
   nom_utilisateur VARCHAR(100) ,
   prenom VARCHAR(100) ,
   nom VARCHAR(100) ,
   mot_de_passe_hash VARCHAR(220) ,
   email VARCHAR(320) ,
   snippets_favoris VARCHAR(50) ,
   snippet_like VARCHAR(50) ,
   PRIMARY KEY(identifiant_utilisateur)
);

CREATE TABLE Catégorie(
   identifiant_catégorie SERIAL,
   categorie_nom VARCHAR(75) ,
   PRIMARY KEY(identifiant_catégorie)
);

CREATE TABLE Token(
   identifiant_jeton SERIAL,
   contenu VARCHAR(500) ,
   PRIMARY KEY(identifiant_jeton)
);

CREATE TABLE snippet_language(
   identifiant_language SERIAL,
   nom_language VARCHAR(100)  NOT NULL,
   PRIMARY KEY(identifiant_language)
);

CREATE TABLE Snippet(
   identifiant_snippet SERIAL,
   titre VARCHAR(150) ,
   visibilite INTEGER,
   tags VARCHAR(150) ,
   nombre_like INTEGER,
   code VARCHAR(8000) ,
   description VARCHAR(1500) ,
   identifiant_language INTEGER NOT NULL,
   identifiant_utilisateur INTEGER NOT NULL,
   PRIMARY KEY(identifiant_snippet),
   FOREIGN KEY(identifiant_language) REFERENCES snippet_language(identifiant_language),
   FOREIGN KEY(identifiant_utilisateur) REFERENCES Utilisateur(identifiant_utilisateur)
);

CREATE TABLE Commenter(
   identifiant_utilisateur INTEGER,
   identifiant_snippet INTEGER,
   identifiant_catégorie INTEGER,
   contenu VARCHAR(50) ,
   PRIMARY KEY(identifiant_utilisateur, identifiant_snippet, identifiant_catégorie),
   FOREIGN KEY(identifiant_utilisateur) REFERENCES Utilisateur(identifiant_utilisateur),
   FOREIGN KEY(identifiant_snippet) REFERENCES Snippet(identifiant_snippet),
   FOREIGN KEY(identifiant_catégorie) REFERENCES Catégorie(identifiant_catégorie)
);

CREATE TABLE Catégoriser(
   identifiant_snippet INTEGER,
   identifiant_catégorie INTEGER,
   PRIMARY KEY(identifiant_snippet, identifiant_catégorie),
   FOREIGN KEY(identifiant_snippet) REFERENCES Snippet(identifiant_snippet),
   FOREIGN KEY(identifiant_catégorie) REFERENCES Catégorie(identifiant_catégorie)
);

CREATE TABLE Verifier(
   identifiant_utilisateur INTEGER,
   identifiant_jeton INTEGER,
   PRIMARY KEY(identifiant_utilisateur, identifiant_jeton),
   FOREIGN KEY(identifiant_utilisateur) REFERENCES Utilisateur(identifiant_utilisateur),
   FOREIGN KEY(identifiant_jeton) REFERENCES Token(identifiant_jeton)
);

CREATE TABLE Aimer(
   identifiant_utilisateur INTEGER,
   identifiant_snippet INTEGER,
   utilisateur VARCHAR(100) ,
   PRIMARY KEY(identifiant_utilisateur, identifiant_snippet),
   FOREIGN KEY(identifiant_utilisateur) REFERENCES Utilisateur(identifiant_utilisateur),
   FOREIGN KEY(identifiant_snippet) REFERENCES Snippet(identifiant_snippet)
);