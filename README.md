# Gestion Clients - Panier

Ce projet est une application de gestion de panier d'achat en ligne pour une boutique de livres. Il permet aux utilisateurs d'ajouter des livres à leur panier, de visualiser la quantité de chaque livre choisi, de mettre à jour la quantité et de supprimer des livres du panier. Le prix total est recalculé automatiquement en fonction des quantités choisies. L'application utilise **React** pour l'interface utilisateur et **Redux** pour la gestion de l'état du panier.

## Fonctionnalités principales et étapes de fonctionnement :

1. **Ajouter des livres**
   - **Description** : L'utilisateur peut ajouter de nouveaux livres à la bibliothèque en renseignant les informations suivantes : titre, auteur, genre, prix, quantité disponible.
   - **Étapes** : 
     - Un formulaire avec les champs nécessaires (titre, auteur, genre, prix, quantité) est affiché.
     - Lorsque l'utilisateur soumet le formulaire, les informations sont enregistrées dans la liste des livres.
     - La liste des livres est mise à jour et affichée dynamiquement.

2. **Rechercher des livres**
   - **Description** : Permettre aux utilisateurs de rechercher des livres par titre ou auteur.
   - **Étapes** : 
     - Une barre de recherche est affichée.
     - Lorsque l'utilisateur saisit un terme (par exemple, "Orwell"), les livres correspondants sont filtrés et affichés.

3. **Voir les détails d’un livre**
   - **Description** : Lorsque l'utilisateur clique sur un livre dans la liste, il peut voir des détails complets, tels que la description complète, auteur, genre, prix et quantité disponible.
   - **Étapes** :
     - Une section "Détails du livre" est affichée ou une page/modale dédiée s'ouvre.
     - Lorsque l'utilisateur clique sur un livre, les détails sont affichés.

4. **Supprimer des livres**
   - **Description** : L'utilisateur peut supprimer un livre de la bibliothèque.
   - **Étapes** : 
     - Un bouton "Supprimer" est ajouté à côté de chaque livre dans la liste.
     - Lorsqu'un utilisateur clique sur "Supprimer", une confirmation est affichée (par exemple, via une modale).
     - Une fois confirmé, le livre est retiré de la liste.

## Fonctionnalités déjà mises en place :
- Affichage des livres dans le panier avec le prix unitaire, la quantité choisie et le total par livre.
- Possibilité de modifier la quantité de chaque livre dans le panier, avec mise à jour automatique du total.
- Option de suppression de livres du panier.
- Calcul du prix total du panier en temps réel.

## Fonctionnalités à venir :
- Ajout d'un formulaire d'information de livraison pour finaliser la commande.
- Intégration de la gestion des informations de paiement (par exemple, carte de crédit, PayPal).
- Résumé de la commande avant de confirmer.
- Envoi d'un e-mail de confirmation après la commande.
- Ajout d'une page de confirmation avec les détails de la commande.
- Historique des commandes pour les utilisateurs connectés.

## Technologies utilisées :
- **React** pour le front-end.
- **Redux** pour la gestion de l'état global de l'application.
- **Bootstrap** pour le design réactif de l'interface.

---

N'hésitez pas à me contacter pour toute question ou suggestion d'amélioration ! 😊

