import './header.scss';
import '../../img/coffee-logo.png';

import LinkCoffee from '../link-coffee/link-coffee';

const Header = ({linkWhite}) => {
    return (
        <div className='header'>
            <LinkCoffee linkWhite={linkWhite}/>
            <h2 className='header__text'>Our Coffee</h2>
        </div>
    )
}

export default Header;