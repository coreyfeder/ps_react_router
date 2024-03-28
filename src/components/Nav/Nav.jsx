import './nav.css';
import { Link } from 'react-router-dom';


export default () => {
    return <nav>
        <Link to="/one">page one</Link>
        <Link to="/two">page two</Link>
        <Link to="/three">page three</Link>
    </nav>;
}
