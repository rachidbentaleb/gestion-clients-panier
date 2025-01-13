import { useDispatch, useSelector } from "react-redux";

export default function Panier() {
    const panier = useSelector((state) => state.panier.panier);
    const dispatch = useDispatch();

    function handleUpdateQuantite(livreTitre, nouvelleQuantite) {
        dispatch({
            type: 'UPDATE_QUANTITE',
            payload: { livreTitre, nouvelleQuantite },
        });
    }

    function handleDelete(titre){
        dispatch({
            type:'supprimer_du_panier',
            payload:titre
        })
    }

    if (panier.length === 0) {
        return (
            <div className="container mt-5">
                <h1 className="text-center mb-4">Mon panier</h1>
                <p className="text-center">Votre panier est vide</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Mon panier</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Prix unitaire</th>
                            <th>Quantité choisie</th>
                            <th>Total par livre</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panier.map((livre) => (
                            <tr key={livre.titre}>
                                <td>{livre.titre}</td>
                                <td>{livre.auteur}</td>
                                <td>{livre.prix} DH</td>
                                <td>
                                    <input
                                        type="number"
                                        value={livre.quantite}
                                        min="1"
                                        className="form-control"
                                        onChange={(e) =>
                                            handleUpdateQuantite(
                                                livre.titre,
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                </td>
                                <td>{(livre.prix * livre.quantite).toFixed(2)} DH</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(livre.titre)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <h3>Total : 
                    {panier.reduce((total, livre) => total + livre.prix * livre.quantite, 0).toFixed(2)} DH
                </h3>
                <button className="btn btn-success">Valider la commande</button>
            </div>
        </div>
    );
}
