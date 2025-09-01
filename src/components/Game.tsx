import '../css/Game.css';
import { useLocation } from 'react-router-dom';


function Game() {
    const location = useLocation();
    const pairs = location.state.pairs;
    const amount = pairs*2;
    return(
        <div>
            <h1>{amount}</h1>
        </div>
    )
}

export default Game;