


const delayMiddleWare = (store)=>(next)=>(action)=> {
    if(action.type == 'todos/added'){
        console.log('delaying here');
        setTimeout(() => {
            return next(action);
        }, 3000);
        return ; 
    }
    return next(action);
}


module.exports = {
    delayMiddleWare
}