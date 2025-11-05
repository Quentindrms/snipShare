-- Vider la table avant d'insérer (optionnel, pour les tests)
-- TRUNCATE TABLE Snippet RESTART IDENTITY CASCADE;

-- Insertion de 5 exemples de snippets
INSERT INTO Snippet (
    titre, 
    visibilite, 
    tags, 
    nombre_like, 
    code, 
    description, 
    identifiant_language, 
    identifiant_utilisateur
) 
VALUES 
(
    'Fonction Python pour additionner',
    1, -- Public
    'python, fonction, maths, débutant',
    15,
    E'def additionner(a, b):\n\treturn a + b\n\nprint(additionner(5, 10))',
    E'Une fonction Python très basique qui prend deux nombres en arguments et retourne leur somme.',
    1, -- (En supposant que 1 = Python)
    1  -- Utilisateur ID 1
),
(
    'Requête SQL pour sélectionner des utilisateurs actifs',
    0, -- Privé
    'sql, select, postgresql',
    0,
    E'SELECT identifiant_utilisateur, email\nFROM Utilisateur\nWHERE est_actif = true\nAND date_creation > \'2024-01-01\';',
    E'Snippet personnel pour retrouver rapidement les utilisateurs actifs inscrits cette année. Ne pas partager.',
    2, -- (En supposant que 2 = SQL)
    1  -- Utilisateur ID 1
),
(
    'Exemple Fetch API en JavaScript',
    1, -- Public
    'javascript, fetch, api, async, await',
    42,
    E'async function recupererDonnees(url) {\n\ttry {\n\t\tconst reponse = await fetch(url);\n\t\tif (!reponse.ok) {\n\t\t\tthrow new Error(\'Erreur réseau\');\n\t\t}\n\t\tconst donnees = await reponse.json();\n\t\tconsole.log(donnees);\n\t} catch (erreur) {\n\t\tconsole.error(\'Il y a eu un problème avec le fetch:\', erreur);\n\t}\n}\n\nrecupererDonnees(\'https://api.exemple.com/data\');',
    E'Exemple moderne d\'utilisation de l\'API Fetch en JavaScript avec async/await pour gérer les appels asynchrones et la gestion des erreurs.',
    3, -- (En supposant que 3 = JavaScript)
    1  -- Utilisateur ID 1
),
(
    'Centrer un div avec CSS Flexbox',
    1, -- Public
    'css, flexbox, centering, layout',
    120,
    E'.conteneur {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100vh;\n\tborder: 1px solid black;\n}\n\n.element-centre {\n\twidth: 100px;\n\theight: 100px;\n\tbackground-color: navy;\n}',
    E'La méthode la plus simple pour centrer parfaitement un élément (horizontalement et verticalement) à l\'intérieur d\'un conteneur en utilisant CSS Flexbox.',
    4, -- (En supposant que 4 = CSS)
    1  -- Utilisateur ID 1
),
(
    'Classe "Hello World" de base en Java',
    1, -- Public
    'java, débutant, hello world',
    5,
    E'public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}',
    E'Le programme "Hello, World!" standard en Java. Point de départ pour tout nouvel apprentissage du langage.',
    5, -- (En supposant que 5 = Java)
    1  -- Utilisateur ID 1
);