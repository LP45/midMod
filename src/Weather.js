import React, { Component } from 'react';
const lat = 42.361145
const lon = -71.057083

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const api = "da6e6c86218ce008759316044bf839e6"



class Weather extends Component {
    state = {
        data: '',
        days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    }
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.data.daily)
        const renderData = this.state.data ?  this.state.data.daily.`slice(1,8).map((day,index) => {
            console.log("We are in Weather" , day)
            if (day.weather[0].main =="cloudy") {
                <img src="./photos/cloudy.jpg"></img>
            } else if(day.weather[0].main =="sunny") {
                
            }
            else if(day.weather[0].main =="rain") {
                
            }
            else if(day.weather[0].main =="clear") {
                
            }
            return (
                <div key={index}>

                <h3>{this.state.days[index]}</h3>: {day.weather[0].main}
                
                </div>
            )
        }):null
        return (

            <div className="container3">
                
                {renderData}
            </div>
        );
    }
}


export default Weather;