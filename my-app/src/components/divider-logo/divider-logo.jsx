import './divider-logo.scss';

const DividerLogo = ({styleWrapperDiv}) => {
    return (
        <div style={styleWrapperDiv} className='divider'>
            <div className='divider__stick'></div>
            <div className='divider__logo'></div>
            <div className='divider__stick'></div>
    </div>
    )
}

export default DividerLogo;