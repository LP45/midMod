import React, { Component } from 'react';
const lat = 42.361145
const lon = -71.057083

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const api = "da6e6c86218ce008759316044bf839e6"



class Weather extends Component {
    state = {
        data: '',
        days:[1,2,3,4,5,6,7]
    }
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.data.daily)
        const renderData = this.state.data ?  this.state.data.daily.slice(1,8).map((day,index) => {
            console.log("We are in Weather" , day)
            return (
                <div key={index}>
                    
                <h3>{this.state.days[index]}</h3>: {day.weather[0].main}
                
                </div>
            )
        }):null
        return (

            <div>
                {renderData}
            </div>
        );
    }
}


export default Weather;