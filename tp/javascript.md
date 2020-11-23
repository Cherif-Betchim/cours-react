# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests 
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**
La première ligne " const { anagrammes, Stack, spirale, puissance4, fizzBuzz } = require('./javascript.js'); "
correspond à l'import des fonctions du fichier javascript.js qui sont exportés par un module.export dans un objet.
On peut importer des dépendances en ligne de commande grâce à npm et yarn.

**2. Expliquez le rôle de la fonction `expect`.**
Le rôle de la fonction expect est de vérifier la valeur attendue du test.

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**
toEqual sert à vérifier si le résultat attendu est égal à cela. Il existe 5 fonctions similaires : toBe(), toNotEqual(), toContain(), ToBeTruthy(), toBeFalsy().

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**
Le rôle des fonctions beforeEach et afterEach est d'être executé avant et après chaque tests. Celui de la fonction describe créer un bloc qui regroupe plusieurs tests associés.

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**
La signification de "la fonction console log est mocké" veut dire qu'on a associé à la fonction console log des données fictives.
Les mocks sont des objets simulés qui reproduisent le comportement d'objets réels de manière contrôlée.
On l'utilise pour tester le comportement d'autres objets, réels, mais liés à un objet inaccessible ou non implémenté. Ce dernier est alors remplacé par un mock.

**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**
Il peut s'avérer utile de mocker une fonction dans les cas suivants : 
Renvoyer des résultats déterminés notamment dans des tests unitaires automatisés.
Obtenir un état difficilement reproductible (erreur d'accès réseau, ...)
Éviter d'invoquer des ressources longues à répondre (accès à une base de données, ...)
Invoquer un composant qui n'existe pas encore.
