import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChercherUnLivre() {

    const [searchTerm,setSeachTerm] = useState('')

    const dispatch = useDispatch('')

    const searchResults = useSelector((state) => state.livre.searchResults);

    function handleSearch(e){
        e.preventDefault()
        dispatch({
            type:'chercher',
            payload: searchTerm,
        })
        setSeachTerm('')
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center text-secondary">Chercher un Livre</h1>
            <form className="w-50 mx-auto mt-4" onSubmit={handleSearch}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Entrez le titre ou l'auteur"
                        value={searchTerm}
                        onChange={(e) => setSeachTerm(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Rechercher</button>
            </form>

            <div className="mt-5">
                <h3>Résultats de la recherche :</h3>
                {searchResults && searchResults.length > 0 ? (
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titre</th>
                                <th>Auteur</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((livre) => (
                                <tr key={livre.titre}>
                                    <td>-</td>
                                    <td>{livre.titre}</td>
                                    <td>{livre.auteur}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center mt-3 text-muted">Aucun livre trouvé.</p>
                )}
            </div>
        </div>
    );
}
