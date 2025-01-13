import { useDispatch, useSelector } from "react-redux";

export default function ListeDesLivres() {

    const livres = useSelector((state) => state.livre.livres);

    const dispatch = useDispatch();

    function handleDelete(titre) {
        dispatch({
            type: 'supprimer',
            payload: titre
        });
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center text-info">Liste des Livres</h1>
            <table className="table table-striped table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Prix</th>
                        <th>Quantite</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {livres.map((livre) => (
                        <tr key={livre.titre}>
                            <td>{livres.indexOf(livre) + 1}</td>
                            <td>{livre.titre}</td>
                            <td>{livre.auteur}</td>
                            <td>{livre.prix}</td>
                            <td>{livre.quantite}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(livre.titre)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
