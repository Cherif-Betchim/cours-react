# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**
Pour la fonction validateEmail vérifie grâce à une regex si la value est bien une adresse email. Si la chaine de caractère ne correspond pas à la requête Regex elle renvoie "une adresse email est obligatoire". 
La fonction validateName vérifie si l'input name est vide sinon elle retourne et affiche "Un nom est obligatoire". 
La fonction NameField créer l'input nom et met une valeur dedans et ensuite elle vérifie la fonction validateName.
La fonction EmailField vérifie la valeur de l'input et s’il a des changements dedans. Si la longueur de l'input n'est pas supérieur à 0 elle renvoie un message d'erreur "une adresse email est obligatoire".

**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**
les 3 states sont :
isSubmit par défaut elle est false,
name par défaut est une chaîne de caractère vide,
email par défaut est une chaîne de caractère vide.
les props sont : Name, Email, setName, setEmail

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**
Elle contient :
```
bubbles: (...)
cancelable: (...)
currentTarget: (...)
defaultPrevented: (...)
dispatchConfig: null
eventPhase: (...)
isDefaultPrevented: (...)
isPropagationStopped: (...)
isTrusted: (...)
nativeEvent: (...)
target: (...)
timeStamp: (...)
type: (...)
_dispatchInstances: null
_dispatchListeners: null
_targetInst: null
preventDefault: (...)
stopPropagation: (...)
get bubbles: ƒ ()
set bubbles: ƒ (val)
get cancelable: ƒ ()
set cancelable: ƒ (val)
get currentTarget: ƒ ()
set currentTarget: ƒ (val)
get defaultPrevented: ƒ ()
set defaultPrevented: ƒ (val)
get eventPhase: ƒ ()
set eventPhase: ƒ (val)
get isDefaultPrevented: ƒ ()
set isDefaultPrevented: ƒ (val)
get isPropagationStopped: ƒ ()
set isPropagationStopped: ƒ (val)
get isTrusted: ƒ ()
set isTrusted: ƒ (val)
get nativeEvent: ƒ ()
set nativeEvent: ƒ (val)
get target: ƒ ()
set target: ƒ (val)
get timeStamp: ƒ ()
set timeStamp: ƒ (val)
get type: ƒ ()
set type: ƒ (val)
get preventDefault: ƒ ()
set preventDefault: ƒ (val)
get stopPropagation: ƒ ()
set stopPropagation: ƒ (val)
__proto__: Object
```

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**
Cela permet de rajouter un espace entre l'input et le message d'erreur.

**5. Peut-on transmettre une fonction dans un Props ?**
Oui c'est possible à la ligne 32 setName est passé c'est une fonction et on l'utilise à la ligne 39.

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**
À chaque fois que le champ nom est modifié React émet un événement (ligne 39) qu'on intercepte afin de réaffecter la valeur de la props name via la méthode setName qui est elle même une props du composant NameField  (ligne 79|32) et qui provient du state de son composant parent (ligne 66).

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**
Un seul caractère accepte au minimum une lettre en minuscule et majuscule de a à z ainsi qu'un nombre de 0 à 9 et les symboles .!#$%&'*+/=?^_`{|}~- avant le arobase. Après le arobase au minimum une lettre en minuscule et majuscule de a à z et un nombre de 0 à 9


## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).




