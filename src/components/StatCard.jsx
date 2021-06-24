import React from 'react'

const StatCard = (props) => {
    const statCardClass = () => {
        if (props.cardTitle === "Population") return 'statcard totalPopulation-card'
        if (props.cardTitle === "Total Cases") return 'statcard totalCases-card'
        if (props.cardTitle === "Active") return 'statcard totalActive-card'
        if (props.cardTitle === "Recovered") return 'statcard totalRecovered-card'
        if (props.cardTitle === "Deaths") return 'statcard totalDeaths-card'
        if (props.cardTitle === "Vaccinated") return 'statcard totalVaccinated-card'
    }
    return(
        <div className={statCardClass()}>
            <h2>{props.cardTitle}</h2>
            <p>{props.cardStat}</p>
        </div>
    )
}

export default StatCard