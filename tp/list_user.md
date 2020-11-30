# TP liste d'utilisateurs

## Analyse de code

Analysez le [code situé du projet](https://codesandbox.io/s/react-props-list-from-file-wqwn5) puis répondez aux questions.


**1. Quelle ligne charge le fichier JSON dans le code ?**
Dans la ligne 4 on importe le user.json sous le nom de users. Et dans la ligne 48 

**2. Quelle est la structure de données du fichier JSON ?**
results est un tableau d'objets qui contient les données de plusieurs personnes. il a pour valeur des tableaux des chaînes de caractères
info est un objet avec 4 valeurs

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**
Les données pas prise en compte sont login, dob, picture : large et thumbnail, nat, registered, phone, cell, id, info. 

**4. Quelles données sont obligatoires pour construire le composant `User` ?**
Fichiers JSON.gender, name (title, fist name ).

**5. A quoi correspond `PropTypes.shape` ?**
Pour declarer qu'une PropTypes à un certain type dans ce cas ci la forme shape.
un Objet avec une forme spécifique 

**6. Pourquoi l'attribut contient deux accolades ?**
Parce que c'est un objet

**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**
export default est celui qui va transmettre ce qu'il y dans App

**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**

(Pensez à mettre votre code dans des balises Markdown  !!)

## Rédaction de tests
**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**


## Mini-projet 

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**
