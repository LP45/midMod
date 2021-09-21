// import React, {useState} from 'react';
// import toDoList from "./data"
// import {Link} from 'react-router-dom'
// import Tasks from './tasks';

// let toDoList = [

//   {

//       "subject": "Groceries",

//       "date": "2/3/21",

//       "notes": "Buy Milk, Bread,Eggs,and water"

//   },

//   {

//       "subject": "Morning Run",

//       "date": "1/4/21",

//       "notes": "3 mile run around the lake"

//   },
//   {

//       "subject": "Meet with Adam",

//       "date": "2/2/20",

//       "notes": "Dicuss future ventures and possible stock options"

//   },

// ]




// const App = () => {
// //use State will work with a state

//  const [toDoList,setToDo] = useState(toDoList)

//   return (
//     <div>
//       <Link to="./App.js">Home</Link>
//       <Link to="./Task">Task</Link>
//       <Link to="./contact">Contact</Link>
//       <data toDoList={toDoList}/>
//     </div>
//   );
// };

// export default App;
// **************************************************************************************
// **************************************************************************************
import React, { Component } from 'react';
import CompletedList from './CompletedList';
import toDoList from './data';
import Weather from './Weather';
import Tasks from './Tasks';
console.table(toDoList)

class App extends Component {

  state = {
    toDoList: toDoList,
    subject: "",
    date: "",
    notes: "",
    newTask: [],
  }

  handleChange = (event) => {
    // console.log("We are in handle change", event.target)

    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()

    const newTask = {
      subject: this.state.subject,
      date: this.state.date,
      notes: this.state.notes,
    }
    this.setState({
      toDoList: [newTask, ...this.state.toDoList],
      subject: "",
      date: " ",
      notes: " ",

    });


  };


  addToTask = (task) => {
    // console.log("We are in the add task function and we clicked on an item inside our taskList componenet and this item is sent back to App.js ", event)
    console.log(task)
    //Whatever item is we are going to add it to CARTITEM STATE
    // let element = event.target
    // console.log("WE are in ELEMENT!!!", element)
    // element.classList.toggle('strike')
    this.setState({
      newTask: [task, ...this.state.newTask]
    });

    let newList = this.state.toDoList.filter(item => item.subject !== task.subject)
    this.setState({
      toDoList:newList
    
    })

  };
  strikeThrough = (event) =>{
        
    
    // delete element
    // element.classList.toggle('strike')
    //I need to allow the strike through to only strike through the element that we clicked on
    //Already kickin on the location. want thatc cto chhnage to the actual value
    
}
  render() {
    return (
      <div className="app"><div className="title"><h2>Welcome to Your Perosnal Reminder App</h2>
            <p>To-Do List!</p></div>
        <div className="container">
          

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="subject">Subject:</label>
              <input type="text" value={this.state.subject} onChange={this.handleChange} id="subject" />
              <br />

              <label htmlFor="date">Date</label>
              <input type="text" id="date" value={this.state.date} onChange={this.handleChange} />
              <br />

              <label htmlFor="notes">Notes</label>
              <input type="text" id="notes" value={this.state.notes}  onChange={this.handleChange} placeholder="Write Notes In" />

              <br />
              <input type="submit" />
            </form>
          </div>
          
          </div>
          <div className="showsTypingOnScreen">
            <h1>New Item being Rendered </h1>
            {this.state.subject}
            {this.state.date}
            {this.state.notes}
          </div>
          <Weather />
          <h3>Task to Complete</h3>
        <div className="container2">
          <div className="list">{
            this.state.toDoList.map((task, index) => {
              // We need a extra param(Index) in the .map

              return (
                // <li>
                //   {product.name} {product.price}
                // </li>
                // Passing data from Parent to Child. PROPS
                // <ProductList  {...this.state.products}/>
                //  Each element in the products array is its own object
                // Every child in an array needs a UNIQUE ID
              
                  <Tasks key={index}  handleAdd={this.addToTask} task={task}  />
              
                
              )
            })
          }
          </div>



          <div className="entry">
            <h3 className="headline">Completed Tasks</h3>

            <ul>
              {
                this.state.newTask.map((item, index) => {
                  return (
                    <CompletedList key={index} item={item} />
                  )
                })
              }


            </ul>
          </div>

        </div>



      </div>

    );
  }
}

export default App;

