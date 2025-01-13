import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DetailsLivre() {
    const { titre } = useParams(); // Récupérer le titre du livre depuis l'URL
    const livres = useSelector((state) => state.livre.livres);

    // Trouver le livre correspondant
    const livreDetail = livres.find((livre) => livre.titre === titre);

    if (!livreDetail) {
        return <p>Le livre n a pas été trouvé.</p>;
    }

    return (
        <div className="container mt-5">
            <h1>Détails du livre</h1>
            <div className="card mb-4">
                <div className="card-body">
                    <h2>{livreDetail.titre}</h2>
                    <h4 className="text-muted">{livreDetail.auteur}</h4>
                    <p><strong>Prix : </strong>{livreDetail.prix} DH</p>
                    <p><strong>Quantité disponible : </strong>{livreDetail.quantite}</p>
                    <p><strong>Genre : </strong>{livreDetail.genre}</p>
                    <p><strong>Description :</strong> Un résumé du livre ou des informations supplémentaires.</p>
                    <button className="btn btn-primary">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}
