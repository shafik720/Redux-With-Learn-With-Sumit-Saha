import { Provider } from "react-redux";
import Counter from "./components/Counter";
import storeCounter from "./redux/store";


export default function App() {
    return (
        <Provider store={storeCounter}>
            <div>
                    <Counter />
                </div>
        </Provider>

    );
}
