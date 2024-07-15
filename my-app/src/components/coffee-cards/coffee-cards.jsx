import './coffee-cards.css';

import CoffeeCardsItems from '../coffee-cards-items/coffee-cards-items';

const CoffeeCards = () => {
    const data = [
        
    ];
    return (
        <div className='coffee-cards'>   
            <CoffeeCardsItems />
            <CoffeeCardsItems />
            <CoffeeCardsItems />
            <CoffeeCardsItems />
            <CoffeeCardsItems /> 
            <CoffeeCardsItems /> 
        </div>
    )
}

export default CoffeeCards;