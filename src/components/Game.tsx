import '../css/Game.css';
import { useLocation } from 'react-router-dom';
import Card from './Card';


function Game() {
    const location = useLocation();
    const pairs = location.state.pairs;

    const icons = [
        {icon: 'python', color: '#F3BE54'},
        {icon: 'vuejs', color: '#87F0DB'},
        {icon: 'square-js', color: '#6BACF5'},
        {icon: 'css3-alt', color: '#B9E672'},
        {icon: 'java', color: '#FF7777'},
        {icon: 'angular', color: '#FFAA78'},
        {icon: 'rust', color: '#9968F3'},
        {icon: 'golang', color: '#D984DD'},
        {icon: 'flutter', color: '#EC9A9A'},
        {icon: 'bootstrap', color: '#DFE69F'},
    ];
    let cards = [];

    //get random elements from icons
    for(let i = 0; i < pairs; i++){
        const index = Math.floor(Math.random()*icons.length);
        cards.push(icons[index]);
        cards.push(icons[index]);
        icons.splice(index, 1);
    }

    console.log(cards);

    let currentIndex = cards.length;
    //shuffle cards array
    while(currentIndex != 0){
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    return(
        <div>
            <div id='cards-container'>
                {
                    cards.map((card) => (
                        <Card icon={card.icon} color={card.color}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Game;