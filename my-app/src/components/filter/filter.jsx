import './filter.scss';

const Filter = ({updStateFilter, filter}) => {
    const btnsData = [
        {name: 'All'},
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ];


    const btns = btnsData.map(({name}) => {
        const active = filter === name;
        const clazz = active ? 'filter__button_active' : 'filter__button';
        return (
            <button onClick={() => updStateFilter(name)} className={clazz} key={name}>{name}</button>
        )
    });

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