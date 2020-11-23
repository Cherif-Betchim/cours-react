const anagrammes = (stringA, stringB) => {
    /**
     * stringA est égale à stringB si et seulement s'ils partagent les mêmes
     * caractères alphabétiques dans la même quantité.
     * La case n'est pas pris en compte
     *
     * Exemples :
     * anagrams('rail safety', 'fairy tales') === true
     * anagrams('RAIL! SAFETY!', 'fairy tales') === true
     * anagrams('Hi there', 'Bye there') === false
     */

    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(stringA) == sanitizeString(stringB)

};


class Stack {
    /**
     * Créer une structure d'empilement. La structure doit être
     * une classe contenant les méthodes :
     *  - `push`: pour ajouter un élément au bout de l'empilement,
     *  - `pop` pour retirer le dernier élément et le retourner;
     *  - et `peek` pour récupérer le premeier élément.
     */
    //
    // constructor() {
    //   this.tab = [];
    //   this.top = 0;
    // }
    //
    // push(element)
    // {
    //   // push element into the items
    //   this.tab.push(element);
    //   this.top = this.top + 1;
    // }
    //
    // pop()
    // {
    //   // return top most element in the stack
    //   // and removes it from the stack
    //   // Underflow if stack is empty
    //   if (this.tab.length == 0)
    //     return "Underflow";
    //   return this.tab.pop();
    // }
    //
    // peek() {
    //   let i = this.tab.length;
    //   return this.tab[0];
    // }
};


const fizzBuzz = (n) => {
    /**
     * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et
     * les multiples de 5 par buzz
     */

    for (var i = 0; i < n; i++) {

        if (n === 3) {
            console.log("fizz")
        } else if (n === 5) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }

};

const spirale = (n) => {
    /**
     * Retourne une matrice spirale de taille n x n.
     *
     * Exemples :
     *
     * matrix(2) = [[1, 2],
     *              [4, 3]]
     *
     * matrix(3) = [[1, 2, 3],
     *              [8, 9, 4],
     *              [7, 6, 5]]
     *
     * matrix(4) = [[1,   2,  3, 4],
     *              [12, 13, 14, 5],
     *              [11, 16, 15, 6],
     *              [10,  9,  8, 7]]
     */

    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    let compteur = 1;
    let debutColonne = 0;
    let finColonne = n - 1;
    let debutDeLigne = 0;
    let finDeLigne = n - 1;
    while (debutColonne <= finColonne && debutDeLigne <= finDeLigne) {
        // Top row
        for (let i = debutColonne; i <= finColonne; i++) {
            results[debutDeLigne][i] = compteur;
            compteur++;
        }
        debutDeLigne++;// Right column
        for (let i = debutDeLigne; i <= finDeLigne; i++) {
            results[i][finColonne] = compteur;
            compteur++;
        }
        finColonne--;// Bottom row
        for (let i = finColonne; i >= debutColonne; i--) {
            results[finDeLigne][i] = compteur;
            compteur++;
        }
        finDeLigne--;// start column
        for (let i = finDeLigne; i >= debutDeLigne; i--) {
            results[i][debutColonne] = compteur;
            compteur++;
        }
        debutColonne++;
    }
    return results;
};


const puissance4 = (grid) => {
    /**
     * Vérifie si un joueur a gagné au puissance 4,
     * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
     *
     * Exemples :
     *
     * puissance4(
     *  [[ 1, 0, 0, 0 ],
     *   [ 2, 1, 0, 0 ],
     *   [ 2, 1, 1, 2 ],
     *   [ 2, 1, 1, 2 ]]
     *   ) = 1
     * )
     *
     * puissance4(
     *  [[ 1, 1, 0, 0, 0 ],
     *   [ 2, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     *
     * puissance4(
     *  [[ 1, 2, 0, 0, 0 ],
     *   [ 1, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     */
}

module.exports = {
    fizzBuzz,
    puissance4,
    spirale,
    anagrammes,
    Stack
}

