// Define the initial state
const initialState = {
    counters: [0, 0, 0,0,0],
  };
  
  // Define the actions
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  
  // Define the action creators
  const incrementCounter = (index) => ({
    type: INCREMENT,
    index,
  });
  
  const decrementCounter = (index) => ({
    type: DECREMENT,
    index,
  });
  
  // Define the reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          counters: state.counters.map((counter, index) =>
            index === action.index ? counter + 5 : counter
          ),
        };
      case DECREMENT:
        return {
          ...state,
          counters: state.counters.map((counter, index) =>
            index === action.index ? counter - 5 : counter
          ),
        };
      default:
        return state;
    }
  };
  
  // Create the store
  const store = Redux.createStore(reducer);
  
  // Update the UI whenever the state changes
  const updateUI = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter, index) => {
      counter.innerText = store.getState().counters[index];
    });
  };
  
  store.subscribe(updateUI);
  updateUI();
  
  // Handle button clicks
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('increment-btn')) {
        store.dispatch(incrementCounter(index));
      } else if (button.classList.contains('decrement-btn')) {
        store.dispatch(decrementCounter(index));
      }
    });
  });
  


//   ------------------



const counters = document.querySelectorAll('.counter');
    counters.forEach((counter, index) => {
    //   counter.innerText = store.getState().counters[index];
    // console.log(counter, index);

    // counter.innerText = 5
    });