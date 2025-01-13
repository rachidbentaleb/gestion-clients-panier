import LesLivres from "../Composants-des-livres/Livres";

const initialState = {
    livres: LesLivres,
    searchResults: []
}

export default function LivreReducer(state = initialState, action) {
    switch (action.type) {
        case 'ajouter':
            return {
                ...state,
                livres: [...state.livres, action.payload]
            }
        
        case 'supprimer':
            return {
                ...state,
                livres: state.livres.filter((livre) => livre.titre !== action.payload)
            }

        case 'chercher':
            return {
                ...state,
                searchResults: state.livres.filter((livre) =>
                    livre.titre.toLowerCase().includes(action.payload.toLowerCase()) ||
                    livre.auteur.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
            
            
        default:
            return state
    }
}