import { useState } from "react";
import '../css/Menu.css';
import { Link } from "react-router-dom";


function Menu() {
    const [pairs, setPairs] = useState(4);

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPairs(parseInt(e.target.value));
    }

    return(
        <div id="menu-container">
            <h1>Memory Game</h1>
            
            <div id="input-container">
                <span id="warning" style={{visibility: pairs <= 1 || pairs > 10 ? 'visible' : 'hidden'}}>Number of pairs must be an even number, below 10 and bigger than 2</span>
                <div id="input-row">
                    <span>pairs</span>
                    <input type="number" value={pairs} onChange={handlechange}></input>
                </div>
                {/* {
                    pairs <= 1 || pairs > 10 ?
                    <span id="warning">Number of pairs must be an even number, below 10 and bigger than 2</span> :
                    null
                } */}
            </div>
            <Link to='/game' state={{pairs: pairs}}>Jogar</Link>
        </div>
    )
}

export default Menu;