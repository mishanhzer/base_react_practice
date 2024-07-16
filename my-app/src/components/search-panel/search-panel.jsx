import './search-panel.scss';

const SearchPanel = () => {
    const btnsData = [
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'},
    ];
    const btns = btnsData.map(({name, label}) => {
        return (
            <button className='search-panel__filter_button' key={name}>{label}</button>
        )
    })
    return (
        <div className='search-panel'>
            <div className='search-panel__look'>
                <span className='search-panel__look_text'>Looking for</span>
                <input className='search-panel__look_input' type="text" placeholder='start typing here...'/>
            </div>

            <div className='search-panel__filter'>
                <span className='search-panel__filter_text'>Or filter</span>
                <div className='search-panel__filter_buttons'>
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default SearchPanel;