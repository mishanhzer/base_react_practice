import './description.scss';

import DividerLogo from '../divider-logo/divider-logo';

const Description = () => {
    return (
        <div className='description'>
            <div className='description__flex'>
                <div className='description__img'></div>
                <div className='description__about'>
                    <h2 className='description__header'>About our beans</h2>
                        <DividerLogo />
                    <div className='description__text'>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br></br>
                        <br></br>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br></br>
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className='description__footer-divider'></div>
        </div>
    )
}

export default Description;