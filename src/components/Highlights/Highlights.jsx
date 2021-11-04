import React from 'react';
import './Highlights.css';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CarRentalRoundedIcon from '@mui/icons-material/CarRentalRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import AssistantRoundedIcon from '@mui/icons-material/AssistantRounded';
import ModeStandbyRoundedIcon from '@mui/icons-material/ModeStandbyRounded';

const Highlights = () => {
    return (
        <>
        <div className="highlights">
            <h1 id="heading">Token Highlights</h1>
        </div>
        <div className="token-container">
            <div className="token-items1">
                <div className="token-item">
                    <MonetizationOnRoundedIcon className="icon"/>
                    <h1> Capped Max Supply </h1>
                    <p> Max Supply capped to 1 billion $BOIT Tokens</p>

                </div>
                <div className="token-item">
                    <FlashOnRoundedIcon/>
                    <h1> Deflationary </h1>
                    <p> Burned on usage to reduce token supply, making tokens worth more over time</p>

                </div>
                <div className="token-item">
                    <VisibilityOffRoundedIcon/>
                    <h1> Staking </h1>
                    <p> Stake Tokens for rewards & gain governance powers </p>

                </div>
                <div className="token-item">
                    <AssistantRoundedIcon/>
                    <h1> DEX </h1>
                    <p> Swap , Farm or Pool tokens and earn $BOIT </p>

                </div>
                </div>
                <div className="token-items2">
                <div className="token-item">
                    <CarRentalRoundedIcon/>
                    <h1> Utility </h1>
                    <p> The Real-World-Assets(RWA) protocol enables the tokens to have a vast utility across rentals of supercars, Private Jets and yachts , NFT's and Internal Defi Protocol</p>

                </div>
                <div className="token-item">
                    <ContentCopyRoundedIcon/>
                    <h1> NFT </h1>
                    <p> Use tokens to buy/sell NFT's. Boit's Supercar NFT Trump cards collection coming soon</p>

                </div>
                <div className="token-item">
                    <ModeStandbyRoundedIcon/>
                    <h1> No Pump and Dump </h1>
                    <p> We vouch to never be listed on centralised exchanges leaving us to vulnerable to whale manipulation. This is a community token and only be procured on a DEX</p>

                </div>
                </div>
            
        </div>
        </>
    )
}

export default Highlights
