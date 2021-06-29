import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header'
import StatCard from './components/StatCard'
import HouseCard from './components/HouseCard'
import HouseStats from './components/HouseStats'
import './static/css/landing.css'

const BUILDINGS = 'https://tripleoak.pt/assets/building.png'
const ONYX = 'https://image.flaticon.com/icons/png/512/18/18625.png'
const TOPAZ = 'https://www.pngrepo.com/png/45960/512/duplex.png'
const EMERALD = 'https://image.flaticon.com/icons/png/512/98/98521.png'

class App extends Component {
  state = {
    societyData: {},
    buildingData: {},
    onyxData: {},
    topazData: {},
    emeraldData: {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/allData')
      .then(result => { return result.data })
      .then(data => {
        console.log(data)
        this.setState({
          societyData: data[0]
        })
        console.log('STATE', this.state.societyData)
      })
  }

  getBuildingData = () => {
    axios.get(`http://localhost:5000/api/allData/buildings`)
      .then(result => { return result.data })
      .then(data => {
        //console.log(data)
        this.setState({
          buildingData: data[data.length - 1] // Grab last object as it is updated one. 
        })
        console.log('STATE', this.state.buildingData)
      })
  }

  getOnyxData = () => {
    axios.get(`http://localhost:5000/api/allData/Onyx`)
      .then(result => { return result.data })
      .then(data => {
        //console.log(data)
        this.setState({
          onyxData: data[data.length - 1] // Grab last object as it is updated one. 
        })
        console.log(this.state.onyxData)
      })
  }

  getTopazData = () => {
    axios.get(`http://localhost:5000/api/allData/Topaz`)
      .then(result => { return result.data })
      .then(data => {
        //console.log(data)
        this.setState({
          topazData: data[data.length - 1] // Grab last object as it is updated one. 
        })
        console.log(this.state.topazData)
      })
  }

  getEmeraldData = () => {
    axios.get(`http://localhost:5000/api/allData/Emerald`)
      .then(result => { return result.data })
      .then(data => {
        //console.log(data)
        this.setState({
          emeraldData: data[data.length - 1] // Grab last object as it is updated one. 
        })
        console.log(this.state.emeraldData)
      })
  }

  render() {
    const societyData = { ...this.state.societyData }
    const { totalPopulation, totalCases, totalActive, totalRecovered, totalDeaths, totalVaccinated } = societyData
    const buildingData = { ...this.state.buildingData }
    const onyxData = { ...this.state.onyxData }
    const topazData = { ...this.state.topazData }
    const emeraldData = { ...this.state.emeraldData }
    return (
      <div className="landing-wrapper">
        <div className="header-container">
          <Header />
        </div>
        <div className="society-data-container">
          <h1>Society Data</h1>
          <div className="statcard-container">
            <StatCard cardTitle="Population" cardStat={totalPopulation} />
            <StatCard cardTitle="Total Cases" cardStat={totalCases || 0} />
            <StatCard cardTitle="Active" cardStat={totalActive || 0} />
            <StatCard cardTitle="Recovered" cardStat={totalRecovered || 0} />
            <StatCard cardTitle="Deaths" cardStat={totalDeaths || 0} />
            <StatCard cardTitle="Vaccinated" cardStat={totalVaccinated || 0} />
          </div>
        </div>

        <div className="house-data-wrapper">
          <h1>House Data</h1>
          <ul className="house-data-list">
            <li>
            <HouseCard houseType="Buildings" houseIcon={BUILDINGS} handleClick={this.getBuildingData}/>
            </li>
            <li>
            <HouseCard houseType="Onyx" houseIcon={ONYX} handleClick={this.getOnyxData}/>
            </li>
            <li>
            <HouseCard houseType="Topaz" houseIcon={TOPAZ} handleClick={this.getTopazData}/>
            </li>
            <li>
            <HouseCard houseType="Emerald" houseIcon={EMERALD} handleClick={this.getEmeraldData}/>
            </li>
          </ul>
          <div className="houseStat-wrapper">
            <HouseStats houseData={buildingData}/>
            <HouseStats houseData={onyxData}/>
            <HouseStats houseData={topazData}/>
            <HouseStats houseData={emeraldData}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;