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
    const counterElement = document.createElement('div');
    counterElement.className = 'counter';
  
    const decrementButton = document.createElement('button');
    decrementButton.className = 'decrement';
    decrementButton.innerHTML = '-';
    decrementButton.addEventListener('click', onDecrement);
    counterElement.appendChild(decrementButton);
  
    const valueElement = document.createElement('span');
    valueElement.className = 'value';
    valueElement.innerHTML = value;
    counterElement.appendChild(valueElement);
  
    const incrementButton = document.createElement('button');
    incrementButton.className = 'increment';
    incrementButton.innerHTML = '+';
    incrementButton.addEventListener('click', onIncrement);
    counterElement.appendChild(incrementButton);
  
    return counterElement;
  }
  
  // Define counters component
  function Counters({ counters }) {
    const countersElement = document.createElement('div');
    counters.forEach((value, index) => {
      const counter = Counter({
        value,
        onIncrement: () => store.dispatch(incrementCounter(index)),
        onDecrement: () => store.dispatch(decrementCounter(index))
      });
      countersElement.appendChild(counter);
    });
    return countersElement;
  }
  
  // Render app
  function render() {
    const state = store.getState();
    const countersElement = document.getElementById('counters');
    countersElement.innerHTML = '';
    const counters = Counters({ counters: state.counters });
    countersElement.appendChild(counters);
  }
  
  store.subscribe(render);
  render();
  