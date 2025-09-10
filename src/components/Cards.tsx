import { useState } from 'react';
import Card from './Card';

type CardType = {
    id:number,
    icon:string,
    color: string,
    stat:string,
};

type CardsProps = {
    cardsList: Array<CardType>,
    pairs:number,
}

function Cards({cardsList, pairs}:CardsProps){
    const [cards, setCards] = useState(cardsList);
    const [prev, setPrev] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const check = (id:number, index:number) => {
        
        if(prev == id){
            cards[index].stat = ' active correct';
            cards[prevIndex].stat = ' active correct';
            alert(id);
            setPrev(0);
            setPrevIndex(0);
            setCards([...cards]);
        }
        else{
            cards[index].stat = ' active wrong';
            cards[prevIndex].stat = ' active wrong';
            setPrev(0);
            setPrevIndex(0);
            setCards([...cards]);
            setTimeout(() => {
                cards[index].stat = '';
                cards[prevIndex].stat = '';
                setCards([...cards]);
            }, 1000);
        }
    }

    const handleClick = (id:number, index:number) => {
        
        if(prev == 0){
            cards[index].stat = ' active';
            
            setCards([...cards]);
            setPrev(id);
            setPrevIndex(index);
        }
        else{
            check(id, index);
        }
    }
    
    return(
        <div>
            <div id='cards-container'>
                {
                    cards.map((card, index) => (
                        <Card id={card.id} icon={card.icon} color={card.color} stat={card.stat} index={index} handleClick={handleClick}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;