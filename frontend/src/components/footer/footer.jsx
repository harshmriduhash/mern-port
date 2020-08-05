import React from 'react';
import '../../styles/footer.scss';

const Footer = props => {

    const styles = {
        position: props.position
    };

    const position = styles.position;

    return (
        <div className='footer-wrapper' style={{ position }}>
            <p className='footer-quote'> "The queiter you become, the more you can hear" <br/>
            -Some Hacker
            </p>
        </div>
    )
}

export default Footer;