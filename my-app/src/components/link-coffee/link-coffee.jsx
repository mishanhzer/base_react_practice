import './link-coffee.scss';

const LinkCoffee = ({styleLink, linkWhite}) => {;
    let classNames = '';
    let newStyled = '';
    if (linkWhite) {
        newStyled = 'link-coffee';
        classNames = 'link-coffee__first-elem_img';
    } else {
        newStyled = 'link-coffee-black';
        classNames = 'link-coffee__first-elem_img2';
    }
    return (
        <nav className={newStyled}>
            <div className='link-coffee__first-elem'>
                <div className={classNames}></div>
                <a style={styleLink} href="https://www.peets.com">Coffee house</a>
            </div>
            <a style={styleLink} href="https://www.peets.com">Our coffee</a>
            <a style={styleLink} href="https://www.peets.com">Fan your pleasure</a>
        </nav>
    )
}

export default LinkCoffee;