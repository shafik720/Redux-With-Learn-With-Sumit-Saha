import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthCheck } from "./components/hooks/useAuthCheck";
import Inbox from "./pages/Conversation";
import Conversation from "./pages/Conversation";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import PublicRoute from "./pages/PublicRoute/PublicRoute";
import Register from "./pages/Register";

function App() {
    const authCheck = useAuthCheck();
    
    return !authCheck ? <div><h2>Checking Authentication...</h2></div> : (<Router>
        <Routes>
            <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/inbox" element={<PrivateRoute><Conversation /></PrivateRoute>} />
            <Route path="/inbox/:id" element={<PrivateRoute><Inbox></Inbox></PrivateRoute>} />
        </Routes>
    </Router>)
}

export default App;
