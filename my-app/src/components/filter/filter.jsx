import './filter.scss';

const Filter = () => {
    const btnsData = [
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'},
    ];

    const btns = btnsData.map(({name, label}) => {
        return (
            <button className='filter__button' key={name}>{label}</button>
        )
    })

    return (
        <div className='filter'>
            <span className='filter__text'>Or filter</span>
            <div className='filter__buttons'>
                {btns}
            </div>
        </div>
    )
}

export default Filter;