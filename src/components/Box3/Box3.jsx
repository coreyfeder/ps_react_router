import "./box3.css";

import { useParams } from "react-router-dom";


export default () => {
    const params = useParams();
    return <div className="box3 page">
        {params.id}
    </div>;
}
