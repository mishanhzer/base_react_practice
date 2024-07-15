import './search-panel.css';

const SearchPanel = () => {
    const btnsData = [
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'},
    ];
    const btns = btnsData.map(({name, label}) => {
        return (
                <button className='search-panel-filter-button' key={name}>{label}</button>
        )
    })
    return (
        <div className='search-panel'>
            <div className='search-panel-look'>
                <span className='search-panel-look-text'>Looking for</span>
                <input className='search-panel-look-input' type="text" placeholder='start typing here...'/>
            </div>

            <div className='search-panel-filter'>
                <span className='search-panel-look-text'>Or filter</span>
                <div className='search-panel-filter-buttons'>
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default SearchPanel;