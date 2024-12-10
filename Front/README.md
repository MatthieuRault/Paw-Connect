# Paw-connect-front

## Installation



## Installez les dépendances :
pnpm install


### Configuration de Biome
Biome est déjà configuré dans ce projet. Voici les étapes pour vérifier et utiliser la configuration :

### Assurez-vous que le fichier biome.json est présent à la racine du projet. S'il n'existe pas, créez-le avec le contenu suivant :
```json     
  {
    "$schema": "https://biomejs.dev/schemas/1.5.2/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedVariables": "warn"
      },
      "suspicious": {
        "noExplicitAny": "warn"
      },
      "style": {
        "useConst": "warn"
      },
      "a11y": {
        "useKeyWithClickEvents": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "trailingComma": "es5"
    }
  }
}

```

### Vérifiez que les scripts suivants sont présents dans votre package.json :

```json
"scripts": {
  "lint": "biome lint .",
  "lint:fix": "biome lint . --apply",
  "format": "biome format . --write"
}

```


### Utilisation

#### Pour utiliser Biome dans votre workflow de développement :


#### Intégration avec l'éditeur
Si vous utilisez Visual Studio Code :

Installez l'extension Biome depuis le marketplace de VS Code.

Ajoutez les paramètres suivants à votre settings.json de VS Code :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}

```


Ces paramètres activeront le formatage automatique avec Biome lors de la sauvegarde des fichiers.