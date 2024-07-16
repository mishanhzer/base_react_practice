import './link-coffee.scss';

const LinkCoffee = ({styleWrapper, styleLink, styleImg}) => {;
    return (
        <nav style={styleWrapper} className='link-coffee'>
            <div className='link-coffee__first-elem'>
                <div style={styleImg} className='link-coffee__first-elem_img'></div>
                <a style={styleLink} href="https://www.peets.com">Coffee house</a>
            </div>
            <a style={styleLink} href="https://www.peets.com">Our coffee</a>
            <a style={styleLink} href="https://www.peets.com">Fan your pleasure</a>
        </nav>
    )
}

export default LinkCoffee;