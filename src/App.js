import React, { Component } from 'react';
import CompletedList from './CompletedList';
import to_Do_List from './data';
import Tasks from './Tasks';
console.table(to_Do_List)

class App extends Component {

  state = {
    to_Do_List: to_Do_List,
    subject: "",
    date: "",
    notes: "Write Notes In",
    newTask: [],
  }

  handleChange = (event) => {
    console.log("We are in handle change", event.target)

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
      to_Do_List: [newTask, ...this.state.to_Do_List],
      subject: "",
      date: " ",
      notes: " ",

    });


  };


  addToTask = (task) => {
    console.log("We are in the add task function and we clicked on an item inside our taskList componenet and this item is sent back to App.js ", task)
    //Whatever item is we are going to add it to CARTITEM STATE
    this.setState({
      newTask: [task, ...this.state.newTask]
    });



  };

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
              <input type="text" id="notes" value={this.state.notes} onClick={() => this.setState({ notes: ' ' })} onChange={this.handleChange} />

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
        <div className="container2">
          <div className="list">{
            this.state.to_Do_List.map((task, index) => {
              // We need a extra param(Index) in the .map
              return (
                // <li>
                //   {product.name} {product.price}
                // </li>
                // Passing data from Parent to Child. PROPS
                // <ProductList  {...this.state.products}/>
                //  Each element in the products array is its own object
                // Every child in an array needs a UNIQUE ID
                <Tasks key={index} task={task} handleAdd={this.addToTask} />
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