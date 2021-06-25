import React from 'react'
import StatCard from './StatCard'

const HouseStats = (props) => {
    const houseData = props.houseData
    return(
        <div className="houseStats-container">
            <ul className="houseStats-list">
                <li>
                    {houseData.houseType ? <h4>{`House Type: ${houseData.houseType}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.housePopulation ? <h4>{`Population: ${houseData.housePopulation}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.cases ? <h4>{`Cases: ${houseData.cases}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.active ? <h4>{`Active: ${houseData.active}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.recovered ? <h4>{`Recovered: ${houseData.recovered}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.deaths ? <h4>{`Deaths: ${houseData.deaths}`}</h4> : <div></div>}
                </li>
                <li>
                    {houseData.vaccinated ? <h4>{`Vaccinated: ${houseData.vaccinated}`}</h4> : <div></div>}
                </li>
            </ul>
        </div>
    )
}

export default HouseStats