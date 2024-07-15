import './coffee-cards.css';

import CoffeeCardsItems from '../coffee-cards-items/coffee-cards-items';

const CoffeeCards = ({data}) => {
    const elements = data.map(item => {
        const {id, ...otherProps} = item;
        return (
            <CoffeeCardsItems key={id} {...otherProps} />
        )
    })
    return (
        <div className='coffee-cards'>   
            {elements}
        </div>
    )
}

export default CoffeeCards;