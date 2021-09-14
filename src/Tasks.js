import React, { Component } from 'react';
import './App.css';

class Tasks extends Component {

    state = {
        inTaskList: false
    }
    // toggleTask = () => {
    //     //update our shopping Cart from true to false
    //     //This.SETSTATE is alREADY in STATE!
    //     this.setState({
    //         inTaskList: !this.state.inTaskList
    //     })

    // }
    strikeThrough = (event) =>{
        let element = event.target
        element.classList.toggle('strike')
    }

    render() {
        console.log("We are in Task this is our props", this.props)
        return (


            <li onClick={() => this.props.handleAdd(this.props.task)}>
                <div onClick={this.strikeThrough}>
                    {this.props.task.subject} {this.props.task.date} {this.props.task.notes}
                </div>
            </li>
        );
    }
}

export default Tasks;