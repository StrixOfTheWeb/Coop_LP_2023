# coop

This is a school project, so it's of no use for anyone that stumbled here on accident/curiosity.
Et pour vous monsieur, j'espère que l'absence d'historique de version ne vous possera pas de soucis.

  Au niveau des "bugs", mes tests n'en ont pas levé que je n'ai pas résolu... Cepandant;

Déjà même si c'est un bug que j'ai fixé, je sais que la manière dont je l'ai fixé n'est que partielle (pour économiser un peu le serveur) mais du coup si jamais vous cherchez à obtenir la liste des noms d'utilisateurs en dehors d'une pages qui en a critquement besoin (ou en tout cas en dehors d'une page où il n'est pas neccesaire de passer par la liste des messages d'une conversation ou la liste des utilisateurs, deux endroits où la liste des noms est mise en place)... Et bien je ne peux pas prommettre son fonctionnement dans ces cas là. Ce qui si vous ne bidouillez pas à la ligne de commande ne devrais pas arriver mais je tenais à le signaler car c'est un bug que j'ai fixer d'une manière un peu barbare donc on sait jamais que vous trouviez un moyen de le réenclencher...
Mon deuxième "bug" n'est pas vraimment un bug, mais plus une fonctionnalité qui a été assez recament modifié (âout de l'année dernière) par le framework vue js directement ! Cette fonctionnalité étant les paramètres (je vous ai expliqué les détails aujourd'hui avant que vous ne partiez). Mais en concrêt cela rend mon interface de modification des conversations moins commode à utiliser car les anciennes valeurs ne parviennent pas à être transmis pour être mise par défaut dans les champs concernés.

  Après hormis cela aucun bug à signaler, juste que j'ai clairement pas fait toute les annexes. (mais normalement toute les fonctionnalités clés ont été réalisés.)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
