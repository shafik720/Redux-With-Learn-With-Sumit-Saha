import { useSelector } from "react-redux";
import gravatarUrl from 'gravatar-url';

export default function ChatHead({messages}) {
    const authState = useSelector(state => state.auth) ; 
    const {email} = authState.user ; 

    const {sender, receiver} = messages ;
    const receiverName = sender.email === email ? receiver.name : sender.name ;  
    const receiverEmail = sender.email === email ? receiver.email: sender.email ;  
    // console.log(receiverName) ;  
    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={gravatarUrl(receiverEmail, {size:80})}
                alt={receiverName}
            />
            <span className="block ml-2 font-bold text-gray-600">{receiverName}</span>
        </div>
    );
}
