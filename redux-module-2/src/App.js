import { Provider } from "react-redux";
import Counter from "./components/Counter";
import CounterWithDynamicHooks from "./components/CounterWithDynamicHooks";
import CounterWithHooks from "./components/CounterWithHooks";
import storeCounter from "./redux/store";


export default function App() {
    return (
        <Provider store={storeCounter}>
            <div>
                <CounterWithHooks></CounterWithHooks>
                <CounterWithDynamicHooks></CounterWithDynamicHooks>
            </div>
        </Provider>

    );
}
