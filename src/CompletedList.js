import React, { Component } from 'react';

class CompletedList extends Component {
    
    render() {
        console.log("We are inside Completed List!")
        return (
            
            <div>
                
                {this.props.item.subject}{this.props.item.date}{this.props.item.notes}
            </div>
            
            // <li>{this.state.newTask.subject}</li>



        );
    }
}

export default CompletedList;