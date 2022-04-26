```mermaid 
sequenceDiagram
trouver-une-entreprise->>Token BonneBoite: récupération du token
Token BonneBoite->>trouver-une-entreprise: envoi du token

trouver-une-entreprise ->>Entreprises BonneBoite: récupération des entreprises
Entreprises BonneBoite ->> trouver-une-entreprise: Envoi des entreprises
```
### pouser le code sur heroku
git push heroku