import './divider-logo.scss';

const DividerLogo = ({boolDivider}) => {
    let classNames = '';
    if (boolDivider) {
        classNames = 'divider2'
    } else {
        classNames = 'divider';
    }
    return (
        <div className={classNames}>
            <div className='divider__stick'></div>
            <div className='divider__logo'></div>
            <div className='divider__stick'></div>
    </div>
    )
}

export default DividerLogo;