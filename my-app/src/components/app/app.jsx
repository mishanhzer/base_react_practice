import { Component } from 'react';

import Header from '../header/header';
import Description from '../descrtiption/description';
import SearchPanel from '../search-panel/search-panel';
import CoffeeCards from '../coffee-cards/coffee-cards';
import LinkCoffee from '../link-coffee/link-coffee';
import DividerLogo from '../divider-logo/divider-logo';
import Filter from '../filter/filter';

import './app.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {country: 'Brazil', price: '6.99$', id: 1},
                {country: 'Kenya', price: '4.99$', id: 2},
                {country: 'Columbia', price: '5.99$', id: 3},
                {country: 'Brazil', price: '6.99$', id: 4},
                {country: 'Ethiopia', price: '6.99$', id: 5},
                {country: 'Ethiopia', price: '6.99$', id: 6}
            ],
            str: ''
        }
    }
    

    searchCountry = (data, str) => {
        if (str.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.country.indexOf(str) > -1
        })
    }

    updStateString = (str) => {
        this.setState({str});
    }

    render() {
        const {data, str} = this.state;
        const linkWhite = 1;
        const boolDivider = 1;
        const newData = this.searchCountry(data, str)
        return (
            <div className="app">
                <Header linkWhite={linkWhite} />
                <Description />
                <div className='search-panel'>
                    <SearchPanel updStateString={this.updStateString}/>
                    <Filter />   
                </div>
                <CoffeeCards data={newData}/>
                <LinkCoffee />
                <DividerLogo boolDivider={boolDivider} />
            </div>
        );
    }
}


export default App;