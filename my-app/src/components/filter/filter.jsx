import './filter.scss';

const Filter = (props) => {
    const btnsData = [
        {name: 'All'},
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ];

    const onFilter = (e) => {
        const filter = e.target.name;
        props.updStateFilter(filter);
    }

    const btns = btnsData.map(({name}) => {
        const active = props.filter === name;
        const clazz = active ? 'filter__button_active' : 'filter__button';
        return (
            <button onClick={(e) => onFilter(e)} className={clazz} name={name} key={name}>{name}</button>
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