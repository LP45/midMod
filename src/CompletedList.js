// import React from 'react';

// const CompletedList = (props) => {
//    console.log("We are inside Completed List! Props", props)   
//     return (
      
//         <div>
//             {props.item.subject} {props.item.date}{props.item.notes}
//         </div>
//     );
// };

// export default CompletedList;

import React, { Component } from 'react';

class CompletedList extends Component {
    
    render() {
        // console.log("We are inside Completed List!")
        return (
            
            <div>
                
                {this.props.item.subject}{this.props.item.date}{this.props.item.notes}
            </div>
            
            // <li>{this.state.newTask.subject}</li>



        );
    }
}

export default CompletedList;