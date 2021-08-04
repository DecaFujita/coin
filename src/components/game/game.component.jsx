import React from  'react';

import Coin from '../coin/coin.component'; 
import Button from '../button/button.component';

import { coinSide } from '../../helpers';

import './game.styles.css';


class Game extends React.Component {
    static defaultProps = {
        coins: [
            {side: "heads", urlImage: "https://researchmaniacs.com/Random/Images/Quarter-Heads.png"},
            {side: "tails", urlImage: "https://researchmaniacs.com/Random/Images/Quarter-Tails.png"}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
        }
    }

    flipCoin = () => {
        let newCoin = coinSide(this.props.coins);
        this.setState(st => {
            return({
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0), 
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),   
            }
            )
        })
    }

    handleClick = (e) => {
        this.flipCoin();
    }
    
    render() {
        let img;
        if (this.state.currCoin == null) {
            img = "";
        } else {
            img = this.state.currCoin.urlImage;
        }
        
        return(
            <div>
                <h2>Let's flip a coin!</h2>
                <Coin img={img}/>
                <Button handleClick={this.handleClick} text='Flip it!' />
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
};

export default Game;