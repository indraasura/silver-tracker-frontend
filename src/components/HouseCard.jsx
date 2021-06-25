import React from 'react'

const HouseCard = (props) => {
    return(
        <div className="houseCard" onClick={props.handleClick}>
            <img className="houseIcon" src={props.houseIcon} alt="house type image" />
            <h4>{props.houseType}</h4>
        </div>
    )
}

export default HouseCard