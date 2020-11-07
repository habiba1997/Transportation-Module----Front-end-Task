import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 

class BusForm extends Component {

    state = {
        ID:1,
        BusTypeID:1,
        Brand:"Mercedes",
        Number_Of_Seats:50,
        Number_Of_Seats_Per_Raw:4,
        Total_Number_Of_Buses:1,
        Bus_Layout:"https://thegateapis.azurewebsites.net/Images\\90a9b443-54a1-4769-9174-c9c6e1508888.jpg",
        Notes:"Very Good Bus",
        YearModel:2019,
        Description:"Mercedes"
    }
  
  componentDidMount()
  {
      console.log("this.props.bus: ", this.props.bus);
  }
  handleChange=(event)=> {    
    this.setState({value: event.target.value});  
   }
  
   handleSubmit=(event)=> {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
    
    }

 
export default reduxForm({
    form: 'BusForm',
})(BusForm);