
import * as actions from '../actionTypes';


export default function reducer(state={}, action) {

	switch (action.type) {
		case actions.apiCallSuccess:
			return {
				data: action.payload.Data,
				message: action.payload.Message
			  };

		case actions.apiCallFailed:
			return {
					data: action.payload.Data,
					message: action.payload.Message
				  };

		case actions.clearTransportation:
			return { data: action.payload};
		default:
			return {...state};
	}
}