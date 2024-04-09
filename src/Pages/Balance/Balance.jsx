import { Link, useParams } from 'react-router-dom';
import './Balance.css'

function Balance() {
    const {id}= useParams()
    console.log(id);

    return (
        <div className="balance">
            <Link to='/'>LINK to main {id}</Link>
        </div>
    )
}

export default Balance;