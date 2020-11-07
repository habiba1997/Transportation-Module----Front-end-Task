import React, { Component } from 'react';
import store from '../store/store';
import * as actions from '../store/actions';
import { Spinner } from 'react-bootstrap';
import BusForm from './Bus_Form';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val===undefined && (valid = false);
    });
  
    return valid;
  };
class Form extends Component {

    state = {
        ID:"",
        Name:"",
        Address:"",
        Country:"",
        City:"",
        TelephoneNumber:"",
        ContactPerson_Name:"",
        ContactPerson_TelephoneNumber:"",
        ContactPerson_Email:"",
        TransportationCompanyBuses:[],
        
        formErrors: {
            Name:"",
            Address:"",
            Country:"",
            City:"",
            TelephoneNumber:"",
            ContactPerson_Name:"",
            ContactPerson_TelephoneNumber:"",
            ContactPerson_Email:"",
            TransportationCompanyBuses:"",
          },
          showSpinner:false,
          updateClicked: false,
          updateMessage:"",
          route: ""
    }
  
    componentDidMount()
    {

        setTimeout(() => {
        let { ID,
            Name,
            Address,
            Country,
            City,
            TelephoneNumber,
            ContactPerson_Name,
            ContactPerson_TelephoneNumber,
            ContactPerson_Email,
            TransportationCompanyBuses } = store.getState().records.data;
        
            this.setState({ ID,
            Name,
            Address,
            Country,
            City,
            TelephoneNumber,
            ContactPerson_Name,
            ContactPerson_TelephoneNumber,
            ContactPerson_Email,
            TransportationCompanyBuses,
            route: this.props.route});
        },500);
    }

 
    BusComponentLoop=()=>
    {
        return this.state.TransportationCompanyBuses.map(bus => 
        <BusForm key={bus.ID} 
                 bus={bus}
                 change={this.handleBusChange}
                 valid={formValid}/>); 
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "ContactPerson_Email":
            formErrors[name] = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          default:
            formErrors[name] = value.length <3 ? "minimum 3 characaters required" : "";
            break;
        }
    
        this.setState({ formErrors, [name]: value });
      };

    handleBusChange=(state)=>{
        let newStateTransportationArray = [...this.state.TransportationCompanyBuses];
        let index =newStateTransportationArray.findIndex(o => o.ID === state.ID);
        newStateTransportationArray[index] = state;
        this.setState({TransportationCompanyBuses: newStateTransportationArray});
    }
    render() { 
       
        let { ID,
            Name,
            Address,
            Country,
            City,
            TelephoneNumber,
            ContactPerson_Name,
            ContactPerson_TelephoneNumber,
            ContactPerson_Email,
            showSpinner,
            updateClicked,
            updateMessage} = this.state;
            const { formErrors } = this.state;

        return (  
        <div className="mt-1 ml-3 mr-3">
            <div className="card">
                    <div className="container mt-2 mb-2">
                    <label className="title">{(this.state.route)? 
                    <input defaultValue={Name}
                    name="Name"
                    noValidate
                    onChange={this.handleChange}/>: Name}</label>
                    <div className="row">
                        <div className="col-sm">
                            <label >Company ID #</label>
                            <input  type="text" 
                            readOnly={true} 
                            className="form-control" 
                            value={ID} />
                        </div>
                        <div className="col-sm">
                            <label >Company Address </label>
                            <input type="text"
                            defaultValue={Address}
                            name="Address"
                            className={formErrors.Address.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.Address.length > 0 && (
                                <span className="errorMessage">{formErrors.Address}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >Country</label>
                            <input 
                            type="text" 
                            defaultValue={Country}
                            name="Country"
                            className={formErrors.Country.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.Country.length > 0 && (
                                <span className="errorMessage">{formErrors.Country}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >City</label>
                            <input 
                            type="text" 
                            defaultValue={City} 
                            name="City"
                            className={formErrors.City.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.City.length > 0 && (
                                <span className="errorMessage">{formErrors.City}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >Company Telephone Num.</label>
                            <input 
                                type="text" 
                                defaultValue={TelephoneNumber}
                                name="TelephoneNumber"
                                className={formErrors.TelephoneNumber.length > 0 ? "form-control error" : "form-control"} 
                                noValidate
                                onChange={this.handleChange}
                            />
                             {formErrors.TelephoneNumber.length > 0 && (
                                <span className="errorMessage">{formErrors.TelephoneNumber}</span>
                            )}
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col-sm">
                            <label >Contact Person Name</label>
                            <input type="text" 
                            defaultValue={ContactPerson_Name} 
                            name="ContactPerson_Name"
                            className={formErrors.ContactPerson_Name.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}
                            />
                             {formErrors.ContactPerson_Name.length > 0 && (
                                <span className="errorMessage">{formErrors.ContactPerson_Name}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label>Contact Person Tele. Num.</label>
                            <input 
                            type="text"
                            defaultValue={ContactPerson_TelephoneNumber}
                            name="ContactPerson_TelephoneNumber"
                            className={formErrors.ContactPerson_TelephoneNumber.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange} />
                             {formErrors.ContactPerson_TelephoneNumber.length > 0 && (
                                <span className="errorMessage">{formErrors.ContactPerson_TelephoneNumber}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >Contact Person Email</label>
                            <input 
                            type="text"
                            defaultValue={ContactPerson_Email}
                            name="ContactPerson_Email"
                            className={formErrors.ContactPerson_Email.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange} />
                             {formErrors.ContactPerson_Email.length > 0 && (
                                <span className="errorMessage">{formErrors.ContactPerson_Email}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            
                        </div>
                        <div className="col-sm">
                            
                        </div>
                    </div>  
                </div> 
            </div>
            {this.BusComponentLoop()}

           <div className="mt-4">
                <button className="btn-add-transport btn mr-2" onClick={this.props.onChanageView}>
                    Back 
                </button>
                <button type="button" className="btn btn-add-transport mr-2" onClick={this.addTransportation}>
                    +Add Transportation
                </button> 
                <button className="btn-add-transport btn" onClick={this.handleSubmit}>
                        Update   
                </button>  
            </div> 
            
            
            {(showSpinner)? 
            <Spinner animation="border" />: null}
            {(updateClicked)? <span >{updateMessage} </span>: null}
             
             
        </div>  
    );
    }

addTransportation=()=>{
    let len = this.state.TransportationCompanyBuses.length +1;
    let newStateTransportationArray = [...this.state.TransportationCompanyBuses,{ID:len}];
    this.setState({TransportationCompanyBuses: newStateTransportationArray});
}

returnStateObject=()=>{
    let  { ID,
        Name,
        Address,
        Country,
        City,
        TelephoneNumber,
        ContactPerson_Name,
        ContactPerson_TelephoneNumber,
        ContactPerson_Email,
        TransportationCompanyBuses } = this.state;
    return   { ID,
        Name,
        Address,
        Country,
        City,
        TelephoneNumber,
        ContactPerson_Name,
        ContactPerson_TelephoneNumber,
        ContactPerson_Email,
        TransportationCompanyBuses };
    
    
}
handleSubmit = e => {
        e.preventDefault();
        
        
        if (formValid(this.state)) {

          this.setState({showSpinner:true,updateClicked:true});
          

          console.log("state: ", JSON.stringify(this.returnStateObject()));

          if(!this.state.route) store.dispatch(actions.putCompanyTransportation(this.returnStateObject()));
          else store.dispatch(actions.addCompanyTransportation(this.returnStateObject()));
          
          setTimeout(()=>{
            let records = store.getState().records;
            console.log("handlesubmit: ",JSON.stringify(records));
            
            if(records.message==="") this.setState({showSpinner:false,updateMessage:"Data was successfully sent"});
            else this.setState({showSpinner:false,updateMessage:("ERROR: "+records.message)});
        }, 1000);

        } 
        else
        {
            this.setState({updateClicked:true,updateMessage:"FORM INVALID INPUTS"});
        }
        

      };
    
}
 
export default Form;