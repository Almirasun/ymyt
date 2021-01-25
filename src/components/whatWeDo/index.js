import React from 'react';
import * as ReactRedux from 'react-redux';

import './index.css';

export const WhatWeDo = () => {
    const strings = ReactRedux.useSelector(state => state.strings);
    const lang = ReactRedux.useSelector(state => state.lang);

    return (
        <div id='whatWeDo' className='container' style={{ marginTop: 50 }}>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
                <h3 className='info-1'>
                    {strings[lang]['what-we-do-title']}
                </h3>
                <p className='info-2'>
                    {strings[lang]['what-we-do-info']}
                </p>
            </div>
            <div className='activities '>
                <div className="row"  style={{ marginTop: 50 }}>
                    <div className="col ">
                        <div className="item-1 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-education']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-education-info']} </div>                        
                    </div>
                    <div className="col ">
                        <div className="item-2 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-health-care']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-health-care-info']} </div>                        
                    </div>
                    <div className="col ">
                        <div className="item-3 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-culture']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-culture-info']} </div>
                    </div>
                    <div className="col ">
                        <div className="item-4 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-eco']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-eco-info']} </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="col ">
                        <div className="item-5 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-science']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-science-info']} </div>
                    </div>
                    <div className="col ">
                        <div className="item-6 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-economy']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-economy-info']} </div>
                    </div>
                    <div className="col ">
                        <div className="item-7 activities__icon">  </div>
                        <div className="activities__title"> {strings[lang]['what-we-do-rights']} </div>
                        <div className="activities__description"> {strings[lang]['what-we-do-rights-info']} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

