import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 

const submit = (values) =>{
    console.log("submit vamues inside form", values);
}
const renderField = ({type, label,input, meta: {touched, error}})=>{
    return (
        <div className="col-sm">
            <label >{label}</label>
            <input  {...input}
                    type={type}
                    className="form-control"
                    value= {undefined}  
                    defaultValue={label}
                     />
            {touched && error && 
            <span className="error">{error}</span>}
            </div>
)
}

const handleChange=(e)=> {  

    e.preventDefault();
    const { name, value } = e.target;

    // let formErrors = { ...this.state.formErrors };
    // formErrors[name] = value.length <3 ? "minimum 3 characaters required" : "";
     
    // this.setState({ formErrors, [name]: value });
   }

   const required = value => {
       console.log("required");
      if(!value|| value==='')
      {
          return "This field is required";
      }
      return undefined;
  }
const BusForm = ({handleSubmit})=> {  
  
    return (
      <form className="card mt-2 mb-2" onSubmit={handleSubmit(submit)}>
            <div className="container mt-2 mb-2" >
                <label className="title">Bus </label>
                    <div className="row">
                           
                            <Field 
                            name="address" 
                            label="address"
                            component={renderField}
                            type="text"/>
                            
                    </div>
                <button className="btn-block btn-lg btn-primary" type="submit"></button>
            </div>
      </form>
    );

}

 
export default reduxForm({
    form: 'BusForm'
})(BusForm);