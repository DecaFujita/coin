import React from 'react';

import './coin.styles.css';

const Coin = props => (
    <div className='coin'>
        <img className='coin-img' src={props.img} alt=""/>
    </div>
)

export default Coin;