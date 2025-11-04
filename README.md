# SQL App — DB Designer (Chat → Schéma → SQL)

Une mini-web-app (HTML/JS) qui génère un **schéma de base de données** à partir d’un **brief en langage naturel**  
(ex. *« base de données pour une asso de basket »*), l’affiche en **cartes**, et propose le **téléchargement** du
schéma en **JSON** et du **DDL SQL**.

👉 Démo : https://koyarou.github.io/sql-app/

---

## ✨ Fonctionnalités

- **Chat libre** : décris ton besoin (RH, e-commerce, asso de basket, etc.).
- **Génération de schéma** : tables, champs, premiers liens logiques.
- **Aperçus** : JSON du schéma + SQL (DDL) auto-généré.
- **Téléchargements** : `schema.json` et `schema.sql`.
- **Thème clair/sombre** (persistant).

> Remarque : l’app fonctionne **sans clé API** et **sans backend**.  
> Elle intègre un mode “démo” fiable pour que tout marche chez tout le monde, y compris RH non techniques.

---

## 🚀 Utilisation

1. Ouvre la démo (ou ta page GitHub Pages).
2. Clique sur un **exemple** ou saisis ton **brief** (ex. *« asso de basket : équipes, joueurs, matchs, cotisations »*).
3. Clique **Proposer un schéma**.
4. Parcours les **cartes** générées.
5. Ouvre “Voir le JSON” / “Voir le SQL” si besoin.
6. Télécharge **JSON** ou **SQL** via les boutons en haut à droite.

---

## 🧠 Comment ça marche ?

- Le script repère quelques **mots-clés** (RH, e-commerce, sport/asso, etc.) et construit un **schéma type** adapté.
- Le **SQL (DDL)** est produit automatiquement (clés primaires, unicité, FK implicites pour `*_id`, etc.).
- Tout est **côté navigateur** (HTML/JS pur). Aucun envoi de données.

---

## 📦 Déploiement (GitHub Pages)

1. Repo public → **Settings → Pages**
2. **Source** : *Deploy from a branch*
3. **Branch** : `main` – **Folder** : `/ (root)`
4. Attends le build puis ouvre : `https://<ton-user>.github.io/sql-app/`

---

## 🛠️ Développement

- Fichier unique : `index.html`
- Aucune dépendance obligatoire.
- Pour éditer : modifie le bloc `<script>` et les styles dans `<style>`.

---

## 🔮 Roadmap (idées)

- ✏️ Édition manuelle du schéma (ajout/suppression de champs/relations).
- 🗺️ ERD visuel (Mermaid).
- 💾 Export **SQLite `.db`** côté client (sql.js).
- 🤖 Option **IA locale** (WebLLM/WebGPU) quand compatible, avec **fallback démo**.

---

## ❓ Dépannage rapide

- La page s’affiche mais rien ne se passe : fais un **hard refresh** (Ctrl/Cmd + Shift + R).
- Les téléchargements ne partent pas : vérifie que le **schéma** a bien été généré (un message “🧠 …” apparaît dans le chat).
- Pour la future IA locale (facultatif) : utiliser **Chrome/Edge Desktop** avec **WebGPU** activé.

---

## 📝 Licence

MIT
