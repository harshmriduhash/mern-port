import React from 'react';
import '../../styles/modal.scss'

class VisitorModal extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='visitor-modal-container'>
                <div className='visitor-modal-welcome'>
                    Welcome
                </div>
                <div className='visitor-modal-content'>
                    <div className='modal-description'>
                        Please state what kind of visitor you are. 
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        )
    };
}

export default VisitorModal;