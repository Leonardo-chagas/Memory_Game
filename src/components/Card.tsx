import '../css/Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadIcons } from "../icons";
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type CardProps = {
 icon: string,
 color: string
};

function Card({icon, color}:CardProps){
    loadIcons();
    // @ts-ignore
    const myIcon : IconProp = 'fa-brands fa-'+icon;
    
    return(
        <div className='card'>
            <FontAwesomeIcon icon={myIcon} size='2x' style={{color:color}} className='icon'/>
        </div>
    )
}

export default Card;