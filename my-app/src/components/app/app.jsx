import Header from '../header/header';
import Description from '../descrtiption/description';
import SearchPanel from '../search-panel/search-panel';
import CoffeeCards from '../coffee-cards/coffee-cards';
import LinkCoffee from '../link-coffee/link-coffee';
import DividerLogo from '../divider-logo/divider-logo';

import './app.css';

function App() {
    const data = [
        {country: 'Brazil', price: '6.99$', id: 1},
        {country: 'Kenya', price: '4.99$', id: 2},
        {country: 'Columbia', price: '5.99$', id: 3},
        {country: 'Brazil', price: '6.99$', id: 4},
        {country: 'Brazil', price: '6.99$', id: 5},
        {country: 'Brazil', price: '6.99$', id: 6}
    ];
    return (
        <div className="app">
            <Header />
            <Description />
            <SearchPanel />
            <CoffeeCards data={data}/>
        </div>
    );
}

export default App;