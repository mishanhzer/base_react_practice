import Header from '../header/header';
import Description from '../descrtiption/description';
import SearchPanel from '../search-panel/search-panel';
import CoffeeCards from '../coffee-cards/coffee-cards';

import './app.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Description />
            <SearchPanel />
            <CoffeeCards />
        </div>
    );
}

export default App;