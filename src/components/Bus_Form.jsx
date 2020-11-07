import React, { Component } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
class Bus_Form extends Component {

    state = {
        ID:"",
        BusTypeID:"",
        Brand:"",
        Number_Of_Seats:"",
        Number_Of_Seats_Per_Raw:"",
        Total_Number_Of_Buses:"",
        Bus_Layout:"",
        Notes:"",
        YearModel:"",
        Description:"",

        formErrors: {
                        ID:"",
                        BusTypeID:"",
                        Brand:"",
                        Number_Of_Seats:"",
                        Number_Of_Seats_Per_Raw:"",
                        Total_Number_Of_Buses:"",
                        Bus_Layout:"",
                        Notes:"",
                        YearModel:"",
                        Description:""
                    }
    }
  
    componentDidMount()
    {

        let { ID,BusTypeID,Brand,Number_Of_Seats,Number_Of_Seats_Per_Raw,Total_Number_Of_Buses,
            Bus_Layout,Notes,YearModel,Description } = this.props.bus;
        
        this.setState({ ID,BusTypeID,Brand,Number_Of_Seats,Number_Of_Seats_Per_Raw,Total_Number_Of_Buses,
                Bus_Layout,Notes,YearModel,Description });
       
    }


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        let formErrors = { ...this.state.formErrors };
        formErrors[name] = value.length < 1 ? "minimum 2 characaters required" : "";
    
        this.setState({ formErrors, [name]: value });

    };

  
    render() { 
       
        let {ID,BusTypeID,Brand,Number_Of_Seats,Number_Of_Seats_Per_Raw,Total_Number_Of_Buses,
            Bus_Layout,Notes,YearModel,Description} = this.state;
        const { formErrors } = this.state;

        return (  
            <div className="card mt-3 mb-3">
                <div className="container mt-2 mb-2">
                    <label className="title">Bus {ID} Data</label>
                    <div className="row">
                        <div className="col-sm">
                            <label >Vehicle Type 1</label>
                            <input  
                            type="text" 
                            name="BusTypeID"
                            className={formErrors.BusTypeID.length > 0 ? "form-control error" : "form-control"} 
                            defaultValue={BusTypeID}
                            onChange={this.handleChange}
                            />
                             {formErrors.BusTypeID.length > 0 && (
                                <span className="errorMessage">{formErrors.BusTypeID}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >Brand</label>
                            <input type="text"
                            defaultValue={Brand}
                            name="Brand"
                            className={formErrors.Brand.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.Brand.length > 0 && (
                                <span className="errorMessage">{formErrors.Brand}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >YearModel</label>
                            <input 
                            type="text" 
                            defaultValue={YearModel}
                            name="YearModel"
                            className={formErrors.YearModel.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.YearModel.length > 0 && (
                                <span className="errorMessage">{formErrors.YearModel}</span>
                            )}
                        </div>
                        <div className="col-sm">
                            <label >Description</label>
                            <input 
                            type="text" 
                            defaultValue={Description} 
                            name="Description"
                            className={formErrors.Description.length > 0 ? "form-control error" : "form-control"} 
                            noValidate
                            onChange={this.handleChange}/>
                            {formErrors.Description.length > 0 && (
                                <span className="errorMessage">{formErrors.Description}</span>
                            )}
                        </div>
                    </div>   
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm">
                                    <label >Total Number of Seats</label>
                                    <input type="text" 
                                    defaultValue={Number_Of_Seats} 
                                    name="Number_Of_Seats"
                                    className={formErrors.Number_Of_Seats.length > 0 ? "form-control error" : "form-control"} 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formErrors.Number_Of_Seats.length > 0 && (
                                        <span className="errorMessage">{formErrors.Number_Of_Seats}</span>
                                    )}
                                </div>

                                <div className="col-sm">
                                    <label >Number of Seats per Row</label>
                                    <input type="text" 
                                    defaultValue={Number_Of_Seats_Per_Raw} 
                                    name="Number_Of_Seats_Per_Raw"
                                    className={formErrors.Number_Of_Seats_Per_Raw.length > 0 ? "form-control error" : "form-control"} 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formErrors.Number_Of_Seats_Per_Raw.length > 0 && (
                                        <span className="errorMessage">{formErrors.Number_Of_Seats_Per_Raw}</span>
                                    )}
                                </div>

                                <div className="col-sm">
                                    <label >Total Number Of Buses</label>
                                    <input type="text" 
                                    defaultValue={Total_Number_Of_Buses} 
                                    name="Total_Number_Of_Buses"
                                    className={formErrors.Total_Number_Of_Buses.length > 0 ? "form-control error" : "form-control"} 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formErrors.Total_Number_Of_Buses.length > 0 && (
                                        <span className="errorMessage">{formErrors.Total_Number_Of_Buses}</span>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm">
                                    <label className="mb-4">Notes</label>
                                    <input type="text" 
                                    defaultValue={Notes} 
                                    name="Notes"
                                    className={formErrors.Notes.length > 0 ? "form-control error" : "form-control"} 
                                    noValidate
                                    onChange={this.handleChange}
                                    />
                                    {formErrors.Notes.length > 0 && (
                                        <span className="errorMessage">{formErrors.Notes}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="container mt-2 mb-2 text-center justify-content-center">
                                    <label> Vehicle Layout</label>
                                    <br/>
                                    <img 
                                    src={Bus_Layout} 
                                    alt="Not Found"/>    
                                    <br/>
                                    <div className="file mt-2 btn btn-sm btn-add-transport uploadDiv">
                                    <FaCloudUploadAlt/> {" "} Upload
                                        <input type="file" name="file" className="inputDiv"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            
                        </div>
                    </div>
                                        
                <button className="justify-content-end btn btn-add-transport"
                    onClick={this.handleSubmit}>
                        Add   
                </button> 
                </div>   
            </div>
          
            
            
            
    );
    }

    returnBus=()=>{

        let { ID,BusTypeID,Brand,Number_Of_Seats,Number_Of_Seats_Per_Raw,Total_Number_Of_Buses,
            Bus_Layout,Notes,YearModel,Description } = this.state;
        return { ID,BusTypeID,Brand,Number_Of_Seats,Number_Of_Seats_Per_Raw,Total_Number_Of_Buses,
            Bus_Layout,Notes,YearModel,Description } ;
    }
    handleSubmit = e => {
        e.preventDefault();
        let Bus_Layout= "No image";        
        if (this.props.valid({...this.state,Bus_Layout})) {
          this.props.change(this.returnBus());
        } 
        else
        {
            alert("FORM INVALID INPUTS");
        }
        
      };
    
}
 
export default Bus_Form;