import React, { Component } from 'react';
import Form from './form';
import Table from './table';
class Transportation extends Component {
    state = { 
        table:true,
        routeAdd: false
     }

 
    handleChangeTableBoolean=()=>
    {
        this.setState({table: !this.state.table});
    }
    handleChangeChangeRoute=(value)=>
    {
        this.setState({routeAdd: value});
    }
    handleChangeTableBoolean
    render() { 
       
        return (
        <div className="card mt-4 ml-5 mr-5">
            <div className="card-header card-header-back">
            Transportation
            </div>
            <div className="card-body">
               
                { (this.state.table)?  
                <Table onChangeRoute={this.handleChangeChangeRoute} onChanageView={this.handleChangeTableBoolean}/> : 
                <Form route={this.state.routeAdd} onChanageView={this.handleChangeTableBoolean}/>}
            </div>
      </div> 
      );
    }
}
 
export default Transportation;