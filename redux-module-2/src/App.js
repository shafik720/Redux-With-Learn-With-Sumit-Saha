import { Provider } from "react-redux";
import Counter from "./components/Counter";
import CounterWithHooks from "./components/CounterWithHooks";
import storeCounter from "./redux/store";


export default function App() {
    return (
        <Provider store={storeCounter}>
            <div>
                <Counter />
                <CounterWithHooks></CounterWithHooks>
            </div>
        </Provider>

    );
}
