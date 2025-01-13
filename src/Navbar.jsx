import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome cart icon
import "./Style/Navbar.css"

export default function Navbar() {
    const panier = useSelector((state) => state.panier.panier); 


    const totalBooks = panier.reduce((total, livre) => total + livre.quantite, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Gestion Clients
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ajouter-un-livre" className="nav-link">
                                Ajouter un livre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/liste-des-livres" className="nav-link">
                                Liste des livres
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chercher-un-livre" className="nav-link">
                                Chercher un livre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/panier" className="nav-link">
                                <FaShoppingCart />
                                {totalBooks > 0 && (
                                    <span className="badge bg-warning text-dark ms-2">
                                        {totalBooks}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
