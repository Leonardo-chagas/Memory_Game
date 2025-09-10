import '../css/Game.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card';
import Cards from './Cards';

function Game() {
    const location = useLocation();
    const pairs = location.state.pairs;

    const icons = [
        {id: 1, icon: 'python', color: '#F3BE54', stat: ''},
        {id: 2, icon: 'vuejs', color: '#87F0DB', stat: ''},
        {id: 3, icon: 'square-js', color: '#6BACF5', stat: ''},
        {id: 4, icon: 'css3-alt', color: '#B9E672', stat: ''},
        {id: 5, icon: 'java', color: '#FF7777', stat: ''},
        {id: 6, icon: 'angular', color: '#FFAA78', stat: ''},
        {id: 7, icon: 'rust', color: '#9968F3', stat: ''},
        {id: 8, icon: 'golang', color: '#D984DD', stat: ''},
        {id: 9, icon: 'flutter', color: '#EC9A9A', stat: ''},
        {id: 10, icon: 'bootstrap', color: '#DFE69F', stat: ''},
    ];
    let arr = [];

    //get random elements from icons
    for(let i = 0; i < pairs; i++){
        const index = Math.floor(Math.random()*icons.length);
        arr.push({...icons[index]});
        arr.push({...icons[index]});
        icons.splice(index, 1);
    }


    let currentIndex = arr.length;
    //shuffle cards array
    while(currentIndex != 0){
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    /* const [cards, setCards] = useState<CardType[]>([...arr]);
    
    
    const [prev, setPrev] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0); */

    /* const check = (id:number, index:number) => {
        console.log(arr);
        if(prev == id){
            arr[index].stat = ' active correct';
            arr[prevIndex].stat = ' active correct';
            alert(id);
            setPrev(0);
            setPrevIndex(0);
            setCards([...arr]);
        }
        else{
            arr[index].stat = ' active wrong';
            arr[prevIndex].stat = ' active wrong';
            setPrev(0);
            setPrevIndex(0);
            setCards([...arr]);
            setTimeout(() => {
                arr[index].stat = '';
                arr[prevIndex].stat = '';
                setCards([...arr]);
            }, 1000);
        }
    }

    const handleClick = (id:number, index:number) => {
        
        if(prev == 0){
            arr[index].stat = ' active';
            console.log(arr);
            setCards([...arr]);
            setPrev(id);
            setPrevIndex(index);
        }
        else{
            check(id, index);
        }
    } */

    return(
        <div>
            {/* <div id='cards-container'>
                {
                    cards.map((card, index) => (
                        <Card id={card.id} icon={card.icon} color={card.color} stat={card.stat} index={index} handleClick={handleClick}/>
                    ))
                }
            </div> */}
            <Cards cardsList={arr} pairs={pairs}/>
        </div>
    )
}

export default Game;