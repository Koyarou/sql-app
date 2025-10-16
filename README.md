# SQL App — DB Designer (Chat → Schéma → SQL → .db)

App front (HTML/JS) pour concevoir une base de données à partir d’un brief :
- Chat IA → propose tables, champs, relations (1–1 / 1–N / N–N) + explication.
- Édition manuelle du schéma.
- Génération DDL SQL.
- Création d’un fichier **SQLite `.db`** côté navigateur (sql.js).
- Diagramme ER (Mermaid).
- Export **schema.sql** et **database.db** (downloads).

## Démo
- GitHub Pages : https://koyarou.github.io/sql-app/

## Utilisation
1) Cliquer “Proposer un schéma”, décrire le besoin (ex: e-commerce…).
2) Éditer tables/champs/relations si nécessaire.
3) Onglet **SQL** → prévisualiser le DDL.
4) Onglet **Build** → “Créer le .db” puis **Télécharger**.

## Clé OpenAI
- Entrer sa clé dans le champ dédié (stockée **localement** via localStorage).
- Modèle par défaut : `gpt-4.1-mini` (modifiez dans `index.html` si besoin).

## Tech
- **sql.js** (SQLite WASM), **Mermaid** (ERD), HTML/JS vanilla.
- 100% client-side (privacy). Aucun backend requis.

## Déploiement GitHub Pages
- Settings → Pages → Deploy from a branch → `main` / `/(root)`.

## Licence
MIT
