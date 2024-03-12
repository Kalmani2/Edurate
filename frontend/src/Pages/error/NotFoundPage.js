import { Link } from "react-router-dom";
import './notFoundStyle.css';

export default function NotFoundPage(){
    return <div className="not-found-container">
        <h1>404</h1>
        <h1>Sorry, page not found</h1>
        <Link to="/">Home</Link>
    </div>;
};