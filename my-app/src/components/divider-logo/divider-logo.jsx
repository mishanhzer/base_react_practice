import './divider-logo.css';

const DividerLogo = ({styleWrapperDiv}) => {
    return (
        <div style={styleWrapperDiv} className='divider'>
            <div className='divider-stick'></div>
            <div className='divider-logo'></div>
            <div className='divider-stick'></div>
    </div>
    )
}

export default DividerLogo;