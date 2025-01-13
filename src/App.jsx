import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Accueil from "./Accueil";
import AjouterUnLivre from "./Composants-des-livres/AjouterUnLivre";
import ListeDesLivres from "./Composants-des-livres/ListeDesLivres";
import ChercherUnLivre from "./Composants-des-livres/ChercherUnLivre";
import Details from "./Composants-sur-le-panier/Details";
import Panier from "./Composants-sur-le-panier/Panier";

export default function App (){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="ajouter-un-livre" element={<AjouterUnLivre />} />
        <Route path="liste-des-livres" element={<ListeDesLivres />} />
        <Route path="chercher-un-livre" element={<ChercherUnLivre />} />
        <Route path="/details/:titre" element={<Details />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </BrowserRouter>
  )
}