import Header from '../header/header';
import Description from '../descrtiption/description';
import SearchPanel from '../search-panel/search-panel';
import CoffeeCards from '../coffee-cards/coffee-cards';
import LinkCoffee from '../link-coffee/link-coffee';
import DividerLogo from '../divider-logo/divider-logo';

import './app.scss';

function App() {
    const data = [
        {country: 'Brazil', price: '6.99$', id: 1},
        {country: 'Kenya', price: '4.99$', id: 2},
        {country: 'Columbia', price: '5.99$', id: 3},
        {country: 'Brazil', price: '6.99$', id: 4},
        {country: 'Brazil', price: '6.99$', id: 5},
        {country: 'Brazil', price: '6.99$', id: 6}
    ];
    const linkWhite = 1;
    const boolDivider = 1;
    return (
        <div className="app">
            <Header linkWhite={linkWhite} />
            <Description />
            <SearchPanel />
            <CoffeeCards data={data}/>
            <LinkCoffee />
            <DividerLogo boolDivider={boolDivider} />
        </div>
    );
}

export default App;