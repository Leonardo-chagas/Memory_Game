import '../css/Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadIcons } from "../icons";
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type CardProps = {
 id: number,
 icon: string,
 color: string,
 stat: string,
 index: number,
 handleClick: Function,
};

function Card({id, icon, color, stat, index, handleClick}:CardProps){
    loadIcons();
    // @ts-ignore
    const myIcon : IconProp = 'fa-brands fa-'+icon;
    let iconStat = stat ? 'active' : '';
    
    return(
        <div className={'card' + stat} onClick={() => handleClick(id, index)}>
            <FontAwesomeIcon icon={myIcon} size='2x' style={{color:color}} className={'icon' + iconStat}/>
        </div>
    )
}

export default Card;