import * as actions from './actionTypes';
import {createAction} from '@reduxjs/toolkit'

export const getCompanyList =  () => {
	console.log("action dispatched - getCompanyList");
		return ({
			type: actions.apiCallRequest,
			payload: {
				url: "/api/TransportationCompany/All",
				onSuccess: "callSuccess", 
				onError: "callFailed"
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
			TransportationCompanyBuses:[{}]
		}
	});
};


// {"ID":1,"Name":"شركة البركة للنقل الدولى","Address":"Jeddah","Country":198,"City":116,"TelephoneNumber":"966787813","ContactPerson_Name":"Mohammed","ContactPerson_TelephoneNumber":"966544698742","ContactPerson_Email":"mohamed@bluebus.com","TransportationCompanyBuses":[{"ID":1,"BusTypeID":1,"Brand":"Mercedes","Number_Of_Seats":50,"Number_Of_Seats_Per_Raw":4,"Total_Number_Of_Buses":1,"Bus_Layout":"https://thegateapis.azurewebsites.net/Images\\90a9b443-54a1-4769-9174-c9c6e1508888.jpg","Notes":"Very Good Bus","YearModel":2019,"Description":"Mercedes"}],"formErrors":{"Name":"","Address":"","Country":"","City":"","TelephoneNumber":"","ContactPerson_Name":"","ContactPerson_TelephoneNumber":"","ContactPerson_Email":"","TransportationCompanyBuses":""}},