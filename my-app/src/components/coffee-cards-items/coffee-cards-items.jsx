import './coffee-cards-items.css';

const CoffeeCardsItems = ({country, price}) => {
    return (
        <div className='coffee-cards-items'>
            <div className='coffee-cards-items-wrapper'>
                <div className='coffee-cards-items-img'></div>
                <div className='coffee-cards-items-descr'>
                    <div className='coffee-cards-items-name'>AROMISTICO Coffee 1 kg</div>
                    <div className='coffee-cards-items-country'>{country}</div>
                    <div className='coffee-cards-items-salary'>{price}</div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCardsItems;