import React from 'react'
import './Tokenomics.css'
import Pie from '../../images/Pie Chart Allocation.png';

const Tokenomics = () => {
    return (
        <div className="tokenomics">
            <h1> Tokenomics </h1>
            <img src={Pie} alt="Piechart" />
            
        </div>
    )
}

export default Tokenomics
