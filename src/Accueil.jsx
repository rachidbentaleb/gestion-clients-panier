import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Accueil() {

    const LesLivres = useSelector((state) => state.livre.livres);

    const dispatch = useDispatch()

    function handleAjoutAupanier(livre){
        dispatch({
            type:'ajouter_au_panier',
            payload:livre
        })
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Bienvenue à la bibliothèque</h1>
            <div className="row">
                {LesLivres.map((livre) => (
                    <div className="col-md-3 mb-4" key={livre.titre}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{livre.titre}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{livre.auteur}</h6>
                                <p className="card-text">
                                    Prix : {livre.prix} DH<br />
                                    Quantité disponible : {livre.quantite}
                                </p>
                                <p><Link to={`/details/${livre.titre}`} >Détails</Link></p>
                                <button className="btn btn-primary mt-auto" onClick={()=>handleAjoutAupanier(livre)}>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
