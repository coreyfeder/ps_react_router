import "./box404.css";

import { useParams } from "react-router-dom";


export default () => {
    const params = useParams();
    return <div className="box404 page">
        <h1>Nothing there.</h1>
    </div>;
}
