import React from 'react'
import './Roadmap.css'
import roadmap1 from '../../images/Roadmap 2021.png'
import roadmap2 from '../../images/Roadmap 2022.png'
import roadmap3 from '../../images/Roadmap 2023.png'
import roadmap4 from '../../images/Roadmap 2024.png'

const Roadmap = () => {
    return (
        <div className = "roadmap">
            <h1> RoadMap </h1>
            <img  id="roadmap" src={roadmap1} alt=" Roadmap 2021" />
            <img id="roadmap"  src={roadmap2} alt=" Roadmap 2022" />
            <img id="roadmap"  src={roadmap3} alt=" Roadmap 2023" />
            <img id ="roadmap"  src={roadmap4} alt=" Roadmap 2024" />

        </div>
    )
}

export default Roadmap
