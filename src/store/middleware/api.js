import axios from "axios";
import  * as actionTypes from '../actionTypes';
import  * as actions from '../actions';


const api = ({dispatch}) => next => async action =>{

    if(action.type!== actionTypes.apiCallRequest)
    {
        return next(action);
    }

    const { url, method, data, headers } = action.payload;

  
    try
    {
        let responce = await axios.request({
            baseURL: "http://23.254.228.118:8080/API",
            url,
            method,
            data,
            headers
        });

        
        dispatch(actions.apiCallSuccess(responce.data));

    }
    catch(error)
    {        

        dispatch(actions.apiCallFailed(error));
    }
};

export default api;
