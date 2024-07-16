import './coffee-cards-items.scss';

const CoffeeCardsItems = ({country, price}) => {
    return (
        <div className='coffee-cards-items'>
            <div className='coffee-cards-items__wrapper'>
                <div className='coffee-cards-items__img'></div>
                <div className='coffee-cards-items__descr'>
                    <div className='coffee-cards-items__name'>AROMISTICO Coffee 1 kg</div>
                    <div className='coffee-cards-items__country'>{country}</div>
                    <div className='coffee-cards-items__salary'>{price}</div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCardsItems;