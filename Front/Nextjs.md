# Context
Un context en React permet de transmettre des données (généralement de state) à travers l'arborescence des composants sans avoir besoin de les transmettre explicitement via les props à chaque niveau. C'est une sorte de gestion global du state. On y place donc généralement des données utiles dans toute l'appli, comme des données d'authentification, des paramètres de thème, ..

# 1. Creer le context
On créé le contexte avec la fonction createContext de React. On pense à l'exporter car il faudra l'importer pour récuperer la valeur qu'il contient.

import React from 'react';

const MyContext = React.createContext();

export default MyContext; Lorsqu'on créé le context, on doit lui passer une valeur par défaut dans le cas où aucun context provider ne serait défini. Mais techniquement, les données par défaut ne seront jamais utilisées car on va toujours définir un context provider donc on met ici undefined en valeur par défaut. Et si on est en typescript il faut alors fournir en généric le futur type du contexte :

const MyContext = React.createContext<undefined | boolean>(undefined);

# 2. Mise à dispo du context
On englobe tous les composants qui auront besoin du context avec le Context.Provider. Le contexte sera disponible dans les composants englobés et dans toute leur descendance (enfants, petits enfants, ...) Le Provider prend une propriété value qui contient les données à partager.

<MyContext.Provider value={/* valeur du context à partager /}> {/ arbre de composants providés */} </MyContext.Provider> Une bonne idée est de créer un custom composant pour contenir ce code :

interface ProviderProps { children: ReactNode; } function MyContextProvider({children}: ProviderProps) { const [isZen, setIsZen] = useState(false);

<MyContext.Provider value={isZen}> {children} </MyContext.Provider> }

# 3. Utilisation du context
De n'importe quel composant faisant parti de l'arbre englobé par le provider on accède "directement" à la valeur contenue dans le context avec le hook useContext. Et si la valeur du context change, le composant refera son rendu.

// on importe le hook import { useContext } from 'react'; // on importe le context import MyContext from './MyContext';

function Composant() { const isZen = useContext(MyContext);

// on peut ensuite utiliser la value et le setter... }

Next React n'est pas un framework, il y a plein de façon de l'utiliser, on peut ajouter un framework par dessus :

Next
Remix Gatsby : utilisé pour les site statique, il génère toutes les pages html Expo : pour les app natives (mobile) On va utiliser Next !

Next nous apporte :

un systeme de routage basé sur l'organisation des fichiers le rendu coté server Creer un projet avec next On tape la commande : npx create-next-app@latest Ca nous pose des questions donc on répond :

✔ What is your project named? … mon-super-projet-next ✔ Would you like to use TypeScript? Yes ✔ Would you like to use ESLint? Yes ✔ Would you like to use Tailwind CSS? Yes ✔ Would you like to use src/ directory? Yes -> on veut mettre notre code dans un dossier src pour pas le mélanger avec les fichiers de config

✔ Would you like to use App Router? (recommended) Yes -> on va utiliser App Router au lieu de Page Router

✔ Would you like to customize the default import alias (@/*)? No Ca nous génère un dossier avec toute la config, et un premier composant !

Pages Vous remarquez que y'a pas de index.html, c'est parce que les pages seront fabriquées coté serveur !

Chaque fichier nommé page.tsx sera une page, celle qui est à la racine du dossier app sera la page correspondante à l'url /

Chaque page va prendre pour squelette html le fichier layout.tsx le plus proche.

Si on veut faire une autre page, il faut la mettre dans un autre dossier, le nom du dossier correspondra à un segment de l'url.

Par exemple si on créé un fichier page.tsx contenant un composant Home dans un dossier nommé about, le composant Home sera rendu sur l'URL /about

Page avec url avec segment dynamique On met le nom du dossier entre crochets pour que ce soit un segment dynamique.

Par exemple : si on a un page.tsx dans le dossier : App > city > [city] il sera affiché pour l'url /city/paris

Pour recuperer la valeur du segment dynamique de l'url on le reçoit en props dans une props nommée params

Links Pour changer l'URL (sans recharger la page) comme avec react-router-dom, on utilise un composant Link, il faut l'importer : import Link from 'next/link'; et l'utiliser à la place des balises

About us Server components Next.js propose par défaut le SSR (Server Side Rendering, Rendu côté serveur) et considère tous nos composants comme des Server components. Les server components sont éxécutés coté serveur puis le HTML est envoyé au client. Les console.log des server components se font dans la console coté server : le terminal !
[différence SSR/CSR] https://www.youtube.com/watch?v=KHRwgK2dnFc

Si on veut specifier qu'un composant soit rendu coté client il faut ajouter une instruction tout en haut du fichier :

"use client"; SSR ou CSR ? En gros, on utilisera un Client component quand on voudra utiliser :

les interactions → onClick, onChange un état → useState, useReducer un effet → useEffect
