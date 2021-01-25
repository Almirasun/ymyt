import React from 'react';
import * as ReactRedux from 'react-redux';

import './index.css';

export const AboutUs = () => {
    const strings = ReactRedux.useSelector(state => state.strings);
    const lang = ReactRedux.useSelector(state => state.lang);

    return (
        <div id='aboutUs' className='container' style={{ marginTop: 100 }}>
            <div className='row align-items-center'>
                <h3 className='col-3'> 
                   {strings[lang]['who-we-are-title']}
                </h3>
                <div className='col-9 infos'>
                    <p className='info-1'>
                        {strings[lang]['who-we-are-info1']}
                    </p>
                    <p className='info-2'>
                        {strings[lang]['who-we-are-info2']}
                    </p>
                </div>
            </div>
        </div>
    )
}

