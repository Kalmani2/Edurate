import { Link } from "react-router-dom";
import react_logo from '../../components/react_logo.png';
import './notFoundStyle.css';

const NotFoundPage = () => {
    return (
        <div>
            <div className="not-found-container">
                <div className="error404">404</div>
                <h1>PAGE NOT FOUND</h1>
                <div className="return-container">
                    <Link to="/" className="return-button">GO HOME</Link>
                </div>
            </div>
            <div className="logo-container">
                <img src={react_logo} alt="Logo" className="error-logo"/>
            </div>
        </div>

    );
}

export default NotFoundPage;