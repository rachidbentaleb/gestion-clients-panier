const initialStatePanier = {
    panier: [], 
};

export default function PanierReducer(state = initialStatePanier, action) {
    switch (action.type) {
        case 'ajouter_au_panier':{
            const livreExistant = state.panier.find((livre) => livre.titre === action.payload.titre);

            if (livreExistant) {
                // Si le livre existe déjà, on augmente la quantité
                return {
                    ...state,
                    panier: state.panier.map((livre) =>
                        livre.titre === action.payload.titre
                            ? { ...livre, quantite: livre.quantite + 1 }
                            : livre
                    ),
                };
            } else {
                // Sinon, on ajoute le livre au panier avec une quantité de 1
                return {
                    ...state,
                    panier: [...state.panier, { ...action.payload, quantite: 1 }],
                };
            }
        }
        case 'supprimer_du_panier':
            return {
                ...state,
                panier: state.panier.filter((livre) => livre.titre !== action.payload),
            };

        case 'UPDATE_QUANTITE':
            return {
                ...state,
                panier: state.panier.map((livre) =>
                    livre.titre === action.payload.livreTitre
                        ? { ...livre, quantite: action.payload.nouvelleQuantite }
                        : livre
                ),
            };

        default:
            return state;
    }
}
