import React, { Component } from 'react';


class Input extends Component{
    
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
    render(){
    return (
      <div className="input-row">
        <input type={this.props.type} {...this.props}  onChange={this.props.valuechange} noValidate/>
        {this.props.touched && this.props.error && <span className="error">{this.props.error}</span>}
      </div>
    )
  }
}
export default Input;