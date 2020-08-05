import React, { useEffect } from 'react';
import Prism from '../../../node_modules/prismjs';
import '../../styles/prism.scss';
import '../../styles/welcome.scss'

const Welcome = props => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="welcome-container">
            <div className="border_gradient">
                <img src="/self-pic.png" className="self-pic" alt=''/>
            </div>
            <div className="welcome-pizzaz">
                <div className="name-welcome">
                   Harsh Mriduhash
                </div>
                <pre >
                    <code className="language-javascript">
                        {`
import crypto from 'crypto';

const iv = crypto.createHash('sha256')
                 .update('myHashedIV)
                 .digest();

const cipher = crypto.createCipheriv('aes256', key, iv);
                                `}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default Welcome;