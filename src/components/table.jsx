import React, { Component } from 'react';
import { connect } from "react-redux";
import {getCompanyList} from '../store/actions';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa'
import store from '../store/store';
import * as actions from '../store/actions';

class Table extends Component {
    state = {         
        records: [],
    }
    
    constructor(props)
    {
        super(props);
        props.getCompanyList();
    }
    UNSAFE_componentWillReceiveProps(nextProps)
    {


        this.setState({
            records : nextProps.records.data, 
           
        });
    }
     
    dispatchGetCompany= async id=>{
        await store.dispatch(actions.getCompanyById(id));
        this.props.onChangeRoute(false);
        this.props.onChanageView();
    }
     trLoop=()=>
     {
   
         return(  
            this.state.records.map(item => 
            <tr key={item.ID}>
                <td>
                    <input className="checkbox" type="checkbox"/>
                </td>
                <td className="ml-3">{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.TotalFleet}</td>
                <td>
                    <button className="btn btn-sm edit"
                        onClick={()=>this.dispatchGetCompany(item.ID)}>
                            Edit 
                    </button>
                </td>
            </tr>
            )
        );
     }
    
     AddTransportation=()=>{
        store.dispatch(actions.clearTransportation());
        this.props.onChangeRoute(true);
        this.props.onChanageView();
     }
    
    render() { 
        
        return ( 
        <div>
            <button className="btn btn-add-transport" 
            onClick={this.AddTransportation}> 
                    + Add Transportations
            </button>
            <table  className="mt-3 table table-striped">
                    <thead>
                        <tr>
                            <th className="th-col" scope="col">
                                <input type="checkbox" className="checkbox" />
                            </th>
                            <th className="ml-3 th-col" scope="col">company ID #</th>
                            <th className="th-col" scope="col">Company Name</th>
                            <th className="th-col" scope="col">Total Fleet</th>
                            <th className="th-col" scope="col"><FaCog/></th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.trLoop()}
                    </tbody>
            </table>
           
        </div> );
    }
}
Table.propTypes = {
    getCompanyList: PropTypes.func.isRequired,
    records: PropTypes.object.isRequired
}



const mapDispatchToProps =(state)=> {
    return ({
        records: state.records
      });
};
export default connect(mapDispatchToProps,{ getCompanyList })(Table);
  

  