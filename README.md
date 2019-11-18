## Documentation
Ce projet est une simple page qui affiche des messages. On peut poster un nouveau message et les filtrer par visibilité (public ou privé). Pour les besoins de cet exercice, aucune base n'a été mise en place. Les nouveaux mesages sont donc temporairement stockés dans le store Redux, et disparaissent donc dès qu'on recharge la page.

### Lancer le projet

- Cloner le projet dans un répertoire.
- Aller dans ce répertoire et exécuter la commande *npm install* afin de télécharger les dépendances.
- Exécuter la commande *npm start*

### Structure du code
En partant du dossier *src*, ci-dessous la description des sous-dossiers principaux :
- assets : ressources à afficher dans le navigateur, ici les images
- components : composants React et leur *container Redux* associé
- store : actions, reducers et store Redux

### Principales librairies utilisées

**Redux**  
[Redux](https://redux.js.org/) a été utilisé afin de gérer l'état global de l'application et de simuler les appels à une API.

**Styled components**  
[Styled components](https://www.styled-components.com/) permet de gérer les styles directement au sein des composants React. Cette librairie combine CSS et Javascript afin de créer des composants visuels modulables. Donc pas de fichiers CSS, le code qui gère l'aspect visuel des composants est placé directement dans le JSX.

**Formik**  
Afin de ne pas réinventer la roue, j'ai préféré utiliser [Formik](https://jaredpalmer.com/formik/) pour la gestion du formulaire. J'ai eu l'occasion de tester sa puissance dans d'autres projets.
