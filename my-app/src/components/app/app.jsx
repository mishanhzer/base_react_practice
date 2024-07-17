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
                {country: 'Columbia', price: '6.99$', id: 5},
                {country: 'Columbia', price: '6.99$', id: 6}
            ],
            str: '',
            filter: ''
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

    filterCountry = (data, filter) => {
        switch(filter) {
            case 'Brazil': 
                return data.filter(item => item.country === 'Brazil');
            case 'Kenya':   
                return data.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return data.filter(item => item.country === 'Columbia');
            default:
                return data;
        }   
    }

    updStateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, str, filter} = this.state;
        const linkWhite = 1;
        const boolDivider = 1;
        const newData =  this.filterCountry(this.searchCountry(data, str), filter)
        return (
            <div className="app">
                <Header linkWhite={linkWhite} />
                <Description />
                <div className='search-panel'>
                    <SearchPanel updStateString={this.updStateString}/>
                    <Filter     
                        updStateFilter={this.updStateFilter} 
                        filter={filter}/>   
                </div>
                <CoffeeCards data={newData}/>
                <LinkCoffee />
                <DividerLogo boolDivider={boolDivider} />
            </div>
        );
    }
}


export default App;