import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({ messages }) {
    const authState = useSelector(state => state.auth);
    const {email} = authState.user ; 
    return (
        <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">
                {messages.slice().sort((a,b)=>a.timestamp-b.timestamp).map(message => {
                    const {sender, receiver} = message ; 
                    const justify = sender.email === email ? 'end' : 'start' ; 
                    // console.log(message);
                    return (
                        <Message key={message.id} justify={justify} message={message.message} />
                    )
                })}
            </ul>
        </div>
    );
}
