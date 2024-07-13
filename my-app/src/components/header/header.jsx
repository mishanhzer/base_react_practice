import './header.css';
import '../../img/coffee-logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-group'>
                <div className='header-first-elem'>
                    <div></div>
                    <div>Coffee house</div>
                </div>
                <div>Our coffee</div>
                <div>Fan your pleasure</div>
            </div>
            <h2 className='header-text'>Our Coffee</h2>
        </div>
    )
}

export default Header;