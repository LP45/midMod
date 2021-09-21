import React, { Component } from 'react';
import './App.css';
import toDoList from './data';

class Tasks extends Component {

    state = {
        list: toDoList
    }
    // toggleTask = () => {
    //     //update our shopping Cart from true to false
    //     //This.SETSTATE is alREADY in STATE!
    //     this.setState({
    //         inTaskList: !this.state.inTaskList
    //     })

    // }
    // deleteElement = (event) =>{
        
    // }

    
//    removeFromList = () =>{
//         this.props.task = undefined

//         this.setState({
//            this.propstask:undefined
//         })
//     }
   
    render() {
        // console.log("We are in Task this is our props", this.props)
        return (

            //In order for the completed app to be complete what are the series of steps that I need?
            //What do you want your action to do?
            //When I add a new Task to the list after crossing out most the top task I would like that to NOT be crossed out.
            //When I cross out a task I want to be able to un-cross it without the completed side to re RENDER the same THING. 
            //Get rid of LI tag, use the parent elemet to go 1 up, 
            
                <div id="element" onClick={()=>this.props.handleAdd(this.props.task)} >
                    {this.props.task.subject} {this.props.task.date} {this.props.task.notes}

                </div>
            
        );
    }
}

//  const handleRemoveItem = (e) => {
//     const name = e.target.getAttribute("name")
//     updateList(list.filter(item => item.name !== name));
//   };

export default Tasks;