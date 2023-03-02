
const delayMiddleWare = (store) => (next) => (action) =>{
    if(action.type === 'todo/added'){
        console.log('delaying here')

        setTimeout(() => {
            return next(action);
        }, 3000);

        return;
    }
    return next(action);
}

module.exports = {
    delayMiddleWare
}