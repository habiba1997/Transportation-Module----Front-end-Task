import * as actions from './actionTypes';
import {createAction} from '@reduxjs/toolkit'

export const getCompanyList =  () => {
	console.log("action dispatched - getCompanyList");
		return ({
			type: actions.apiCallRequest,
			payload: {
				url: "/api/TransportationCompany/All",
				onSuccess: "callSuccess", 
				onError: "callFailed",
				headers:  {'Content-Type':  'application/json','Access-Control-Allow-Origin' :'*'}
			  }
		});
};


export const getCompanyById =  (id) => {
	console.log("action dispatched - getCompanyById");

		return ({
			type: actions.apiCallRequest,
			payload: {
				url: "/api/TransportationCompany/GetById?id="+id,
				onSuccess: "callSuccess", 
				onError: "callFailed",
				headers:  {'Content-Type':  'application/json','Access-Control-Allow-Origin' :'*'}
			  }
		});
};

export const putCompanyTransportation =  (data) => {
	console.log("action dispatched - putCompanyTransportation");
		return ({
			type: actions.apiCallRequest,
			payload: {
				url: "/api/TransportationCompany/Update",
				method:"PUT",
				data: data,
				headers:  {'Content-Type':  'application/json',
				'Access-Control-Allow-Origin' :'*'},
				onSuccess: "callSuccess", 
				onError: "callFailed",

			  }
		});
};


export const addCompanyTransportation =  (data) => {
	console.log("action dispatched - addCompanyTransportation");
		return ({
			type: actions.apiCallRequest,
			payload: {
				url: "/api/TransportationCompany/Add",
				method:"POST",
				data: data,
				headers:  {'Content-Type':  'application/json',
				'Access-Control-Allow-Origin' :'*'},
				onSuccess: "callSuccess", 
				onError: "callFailed",

			  }
		});
};

export const apiCallSuccess = createAction(actions.apiCallSuccess);
export const apiCallFailed = createAction(actions.apiCallFailed);

 
  
export const clearTransportation = () =>{
	console.log("action dispatched - clearTransportation");

	return ({
		type: actions.clearTransportation,
		payload: {
			ID:"ID",
			Name:"Company Name",
			Address:"",
			Country:"",
			City:"",
			TelephoneNumber:"",
			ContactPerson_Name:"",
			ContactPerson_TelephoneNumber:"",
			ContactPerson_Email:"",
			TransportationCompanyBuses:[]
		}
	});
};


