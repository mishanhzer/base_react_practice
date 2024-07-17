import './coffee-cards.scss';

import CoffeeCardsItems from '../coffee-cards-items/coffee-cards-items';

const CoffeeCards = ({data}) => {
    const elements = data.map(item => {
        const {id, ...otherProps} = item;
        return (
            <CoffeeCardsItems key={id} {...otherProps} />
        )
    })
    
    return (
        <ul className='coffee-cards'>   
            {elements}
        </ul>
    )
}

export default CoffeeCards;