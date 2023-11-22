const quizz = [
  {
    title: "Quelle est la différence entre undefined et null en JavaScript ?",
    options: 
      {
        0:"Il n'y en a pas. ",
        1: "Null est la valeur qui signifie \"pas de valeur\" et undefined est le type de variables qui n'ont pas reçu de valeur.",
        2: "Undefined est la valeur qui signifie \"pas de valeur\" et null est le type de variables qui n'ont pas reçu de valeur.",
        3: "Je ne sais pas",
        },
    answer: 1,
  },
  {
    title: "Quelle est la différence entre == et === ?",
    options: {
      0:"== effectue une comparaison d'égalité lâche, ne vérifiant que la valeur des variables. En revanche, === effectue une comparaison d'égalité stricte, prenant en compte à la fois la valeur et le type de données des variables.",
      1:"== et === sont tous deux des opérateurs de comparaison, mais == ne considère que la valeur des variables, tandis que === prend en compte à la fois la valeur et le type de données.",
      2:"== est simplement une version plus courte et plus simple de ===",
      3:"Je ne sais"
    },
    answer: 0
  },
  {
    title: "Qu'est ce qu'un callback ?",
    options: {
      0:"Un callback est une fonction utilisée pour rappeler des erreurs dans un programme, permettant ainsi de résoudre des problèmes de manière rétrospective.",
      1:"En programmation, un callback est une sorte de surnom donné à une fonction qui est destinée à être ignorée ou omise lors de l'exécution du programme.",
      2:"Un callback est un dispositif de sécurité qui alerte le programme en cas d'activité suspecte ou de comportement malveillant, agissant comme une sorte de rappel pour les développeurs.",
      3:"Un callback est une fonction passée en tant qu'argument à une autre fonction, et qui est ensuite invoquée ou exécutée après la réalisation d'une opération asynchrone ou d'un événement spécifique, permettant ainsi de gérer des actions ultérieures de manière flexible et réactive."
    },
    answer: 0
  },
  {
    title: "Qu'est-ce qu'une fonction ?",
    options: {
      0: "Une fonction en JavaScript est une sorte de variable spéciale qui stocke des séquences d'instructions, facilitant ainsi la communication entre différentes parties d'un programme.",
      1: "Les fonctions en JavaScript sont utilisées principalement pour la décoration graphique des sites web, permettant d'ajouter des éléments visuels interactifs à une page.",
      2: "En JavaScript, une fonction est un bloc de code réutilisable qui peut être appelé avec un nom spécifique. Elle peut accepter des paramètres, effectuer des opérations, et retourner un résultat, offrant ainsi une modularité et une réutilisabilité dans le code.",
      3: "Je ne sais pas"
    },
    answer: 2
  },
  {
    title: "Quelle est la différence entre Java et JavaScript?",
    options: {
      0: "Java et JavaScript sont deux langages de programmation distincts. Java est un langage de programmation polyvalent utilisé principalement pour le développement côté serveur, tandis que JavaScript est un langage de script utilisé pour le développement côté client dans les navigateurs web, permettant une interactivité dynamique sur les pages web",
      1: "La différence clé entre Java et JavaScript réside dans leur paradigme de programmation : Java est un langage de programmation orienté objet, tandis que JavaScript est un langage de script orienté événement.",
      2: "Java et JavaScript sont deux versions différentes d'un même langage de programmation, Java étant plus ancien et JavaScript étant sa version moderne et mise à jour.",
      3: "La principale différence entre Java et JavaScript réside dans leur utilisation : Java est principalement utilisé pour le développement côté serveur, tandis que JavaScript est utilisé pour le développement côté client, principalement dans les navigateurs web."
    },
    answer: 0
  },
  {
    title: "Qu’est-ce que le DOM?",
    options: {
      0: "Le DOM (Dance Of Monkeys) en JavaScript est une métaphore humoristique pour décrire le processus complexe par lequel les navigateurs interprètent et exécutent le code JavaScript.",
      1: "En JavaScript, le DOM (Document Object Model) est une interface de programmation qui représente la structure hiérarchique d'un document HTML ou XML. Il permet aux développeurs d'interagir avec et de manipuler dynamiquement les éléments d'une page web, en modifiant son contenu, sa structure et son style de manière réactive.",
      2: "Le DOM (Document Orientation Model) en JavaScript est une technique avancée utilisée pour contrôler l'orientation du document, permettant aux développeurs d'ajuster dynamiquement la disposition de la page en fonction de l'appareil utilisé.",
      3: "En JavaScript, le DOM (Data Object Model) est une bibliothèque spécialisée dans la gestion des bases de données locales, facilitant le stockage et la récupération de données côté client."
    },
    answer: 3
  },
  {
    title: "A quoi sert le mot-clé « this » en JavaScript?",
    options: {
      0: "Le mot-clé 'this' en JavaScript est une référence dynamique qui fait référence à l'objet actuel sur lequel une fonction est appelée. Son comportement dépend du contexte d'exécution et est souvent utilisé pour accéder aux propriétés et méthodes de l'objet courant dans lequel il est utilisé.",
      1: "En JavaScript, 'this' est un mot-clé réservé pour créer des objets anonymes, simplifiant ainsi la création d'instances d'objets sans avoir besoin de définir de classes.",
      2: "Le mot-clé 'this' en JavaScript est utilisé pour déclarer des variables avec une portée globale, permettant ainsi un accès facile à ces variables dans n'importe quelle partie du code.",
      3: "En JavaScript, le mot-clé 'this' est utilisé pour créer des références vers des éléments HTML spécifiques, facilitant ainsi la manipulation du contenu visuel d'une page web."
    },
    answer: 2
  },
  {
    title: "Quelle est la différence entre let et var ?",
    options: {
      0: "let est une version plus ancienne de var en JavaScript, et bien que les deux soient toujours pris en charge, let est considéré comme obsolète et n'est plus recommandé pour une utilisation moderne.",
      1: "La différence principale entre let et var en JavaScript réside dans leur portée : let a une portée de bloc, ce qui signifie qu'il est limité au bloc dans lequel il est déclaré, tandis que var a une portée de fonction, ce qui signifie qu'il est limité à la fonction dans laquelle il est déclaré.",
      2: "En JavaScript, let est réservé pour les variables constantes, tandis que var est utilisé pour les variables qui peuvent être réaffectées.",
      3: "La principale différence entre let et var en JavaScript réside dans leur portée : let est utilisé pour déclarer des variables avec une portée globale, tandis que var est utilisé pour des variables locales à l'intérieur d'une fonction."
    },
    answer: 1
  },
  {
    title: "A quoi sert la méthode SetTimeout() ?",
    options: {
      0: "setTimeout() est utilisé pour définir une minuterie qui exécute une fonction spécifiée après un certain délai, mais il est principalement utilisé pour ralentir l'exécution du code plutôt que pour créer des retards précis.",
      1: "La méthode setTimeout() en JavaScript est utilisée pour accélérer l'exécution du code, en forçant le programme à ignorer tout délai prévu entre les instructions.",
      2: "Cette méthode est utilisée pour mesurer le temps d'exécution d'une fonction en JavaScript, facilitant ainsi l'optimisation des performances du code.",
      3: "La méthode setTimeout() en JavaScript est utilisée pour programmer l'exécution d'une fonction après un délai spécifié, introduisant un délai dans l'exécution du code et permettant ainsi de créer des retards ou de déclencher des actions différées dans une application web."
    },
    answer: 1
  },
  {
    title: "Quelle est la différence entre innerHTML et innerText ?",
    options: {
      0: "La principale différence entre innerHTML et innerText est que innerHTML est utilisé pour manipuler le texte visible à l'écran, tandis que innerText est utilisé pour manipuler le texte qui est stocké en arrière-plan et peut ne pas être visible.",
      1: "innerHTML et innerText sont tous deux utilisés pour manipuler le contenu d'un élément HTML en JavaScript, mais la différence réside dans le fait que innerHTML traite le contenu comme HTML, y compris les balises, tandis que innerText traite le contenu comme du texte brut, ignorant les balises HTML et les rendant sous forme de texte.",
      2: "innerHTML est utilisé pour obtenir ou définir le texte brut à l'intérieur d'un élément, tandis que innerText est utilisé pour manipuler le texte stylisé avec des balises HTML.",
      3: "La différence entre innerHTML et innerText réside dans le fait que innerHTML est utilisé pour manipuler le texte à l'intérieur d'un élément, tandis que innerText est utilisé pour manipuler les balises HTML elles-mêmes à l'intérieur de cet élément."
    },
    answer: 1
  }
];

let indice= 0

const main = document.querySelector('main')

const h2 = document.createElement('h2')
h2.classList.add('title')
h2.textContent = quizz[indice].title
main.appendChild(h2)

//réccupère l'index
const option = quizz[indice].options;

for (const key in option) {
  if (option.hasOwnProperty(key)) {
    const buttons = document.createElement('button');
    buttons.textContent = option[key];
    main.appendChild(buttons);
  }
}

const buttons = document.querySelectorAll('button')
const progressBar = document.querySelector('progress')
const finalWindow = document.querySelector('section')
const points = document.querySelector('span')


let point = 0

buttons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    const answer =  quizz[indice].answer
   
    points.textContent = point

    if (index === answer) {
      button.classList.add('goodAnswer');
      point++
    } else {
      button.classList.add('badAnswer');
    }


    setTimeout(() => {
      indice++;

      button.classList.remove('badAnswer');
      button.classList.remove('goodAnswer');


      if (indice < quizz.length) {
        const option = quizz[indice].options;
        const title = quizz[indice].title
  
        h2.textContent = title
        buttons.forEach((button, index) => {
          button.textContent = option[index];
        });
        progressBar.value += 10

      } else {
        finalWindow.classList.add('finalWindow') 
      }
    }, 1000)
})
})

const reload = document.querySelector('.reload')

reload.addEventListener('click', () => {
  location.reload();
})
