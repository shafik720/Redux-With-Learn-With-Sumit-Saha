// Define initial state
const initialState = {
    counters: [0, 0, 0] // Array of three counters, each starting at 0
  };
  
  // Define reducer function
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counters: [
            ...state.counters.slice(0, action.index),
            state.counters[action.index] + 1,
            ...state.counters.slice(action.index + 1)
          ]
        };
      case 'DECREMENT':
        return {
          ...state,
          counters: [
            ...state.counters.slice(0, action.index),
            state.counters[action.index] - 1,
            ...state.counters.slice(action.index + 1)
          ]
        };
      default:
        return state;
    }
  }
  
  // Create store
  const store = Redux.createStore(counterReducer);
  
  // Define action creators
  function incrementCounter(index) {
    return { type: 'INCREMENT', index };
  }
  
  function decrementCounter(index) {
    return { type: 'DECREMENT', index };
  }
  
  // Define counter component
  function Counter({ value, onIncrement, onDecrement }) {
    return (
      <div class="counter">
        <button class="decrement" onClick={onDecrement}>-</button>
        <span class="value">{value}</span>
        <button class="increment" onClick={onIncrement}>+</button>
      </div>
    );
  }
  
  // Define counters component
  function Counters({ counters }) {
    return (
      <div>
        {counters.map((value, index) =>
          <Counter
            key={index}
            value={value}
            onIncrement={() => store.dispatch(incrementCounter(index))}
            onDecrement={() => store.dispatch(decrementCounter(index))}
          />
        )}
      </div>
    );
  }
  
  // Render app
  function render() {
    const state = store.getState();
    const countersElement = document.getElementById('counters');
    countersElement.innerHTML = '';
    ReactDOM.render(<Counters counters={state.counters} />, countersElement);
  }
  
  store.subscribe(render);
  render();
  