import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            str: ''
        }
    }

    updStateString = (e) => {
        const str = e.target.value;
        this.setState({str});
        this.props.updStateString(str);
    }
    
    render() {
        return (
            <div>
                <div className='panel__look'>
                    <span className='panel__look_text'>Looking for</span>
                    <input 
                        className='panel__look_input' 
                        type="text" 
                        placeholder='start typing here...' 
                        value={this.state.str}
                        onChange={(e) => this.updStateString(e)} />
                </div>
            </div>
        )
    }
}

export default SearchPanel;