const logger = store => next => action =>{
    // console.log(JSON.stringify(action.payload));
    // console.log("store: ", store);
    // console.log("next: ", next);
    // console.log("action: ", action);
    next(action);

};

export default logger;
