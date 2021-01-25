import React from 'react';
import * as ReactRedux from 'react-redux';

import './index.css';

export const Donate = () => {
    const strings = ReactRedux.useSelector(state => state.strings);
    const lang = ReactRedux.useSelector(state => state.lang);

    return (
        <div id='donate' className=''>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col' />
                        <div className='col bg-image'>
                            <div className='arrow' />
                        </div>
                </div>
            </div>
            <div className='container donate-text'>
                <div className='row' style={{ height: 300 }}>
                    <div className='col d-flex flex-column justify-content-center align-items-start'>
                        <div className='h4'>
                            {strings[lang]['donate-now']}
                        </div>
                        <div className='lead'>
                            {strings[lang]['donate-now-info']}
                        </div>
                        <button className='btn btn-success mt-4 mb-4'>
                            {strings[lang]['donate-button']}
                        </button>
                    </div>
                    <div className='col' />
                </div>
            </div>
        </div>
    )
}