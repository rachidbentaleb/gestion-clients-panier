import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AjouterUnLivre() {

    const [livre,setLivre]=useState({
        titre:'',
        auteur:'',
        genre:'',
        prix:'',
        quantite:'',
    })

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        if (livre.titre  
            && livre.auteur
            && livre.genre
            && livre.prix
            && livre.quantite
        ){
            dispatch({
                type:'ajouter',
                payload:{
                    titre:livre.titre ,
                    auteur:livre.auteur ,
                    genre:livre.genre ,
                    prix:livre.prix ,
                    quantite:livre.quantite ,
                }
            })
            setLivre({
                titre:'',
                auteur:'',
                genre:'',
                prix:'',
                quantite:'',
            });
        }
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center text-success">Ajouter un Livre</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Titre du Livre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Entrez le titre" 
                        value={livre.titre}
                        onChange={(e)=>setLivre({...livre, titre: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Auteur</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Entrez l'auteur" 
                        value={livre.auteur}
                        onChange={(e)=>setLivre({...livre, auteur: e.target.value})}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Entrez le genre" 
                        value={livre.genre}
                        onChange={(e)=>setLivre({...livre, genre: e.target.value})}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Prix</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Entrez le prix"
                        value={livre.prix}
                        onChange={(e)=>setLivre({...livre, prix: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantite</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Entrez la quantite" 
                        value={livre.quantite}
                        onChange={(e)=>setLivre({...livre, quantite: e.target.value})}
                        />
                </div>
                <button type="submit" className="btn btn-primary w-100">Ajouter</button>
            </form>
        </div>
    );
}
