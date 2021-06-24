import React, { Component } from 'react';
import axios from 'axios'
import StatCard from './components/StatCard'
import './static/css/landing.css'

class App extends Component {
  state = {
    societyData: {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/allData')
      .then(result => { return result.data })
      .then(data => {
        console.log(data)
        this.setState({
          societyData: data[0]
        })
        console.log(this.state.societyData)
      })
  }

  render() {
    const societyData = { ...this.state.societyData }
    const { totalPopulation, totalCases, totalActive, totalRecovered, totalDeaths, totalVaccinated } = societyData

    return (
      <div className="landing-wrapper">
        <div className="statcard-container">
          <StatCard cardTitle="Population" cardStat={totalPopulation} />
          <StatCard cardTitle="Total Cases" cardStat={totalCases || 0} />
          <StatCard cardTitle="Active" cardStat={totalActive || 0} />
          <StatCard cardTitle="Recovered" cardStat={totalRecovered || 0} />
          <StatCard cardTitle="Deaths" cardStat={totalDeaths || 0} />
          <StatCard cardTitle="Vaccinated" cardStat={totalVaccinated || 0} />
        </div>
      </div>
    );
  }
}

export default App;