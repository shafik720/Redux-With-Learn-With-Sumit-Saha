import { useSelector } from "react-redux";
import { useGetConverSationsQuery } from "../../features/conversations/conversationApi";
import Error from "../ui/Error";
import ChatItem from "./ChatItem";
import moment from 'moment'
import getParticipant from "../../utils/getParticipant";
import gravatarUrl from 'gravatar-url';
import { Link, useNavigate } from "react-router-dom";

export default function ChatItems() {
    const authState = useSelector(state => state.auth);
    const { email } = authState.user;
    const navigates = useNavigate();

    const { data: conversation, isLoading, isError, error } = useGetConverSationsQuery(email);

    let content = null;
    if (isLoading && !isError) {
        content = <p>Loading...</p>
    }
    if (!isLoading && isError) {
        content = <Error message={error?.data}></Error>
    }
    if (!isLoading && !isError && conversation.length === 0) {
        content = <p>No Conversation found</p>
    }
    if (!isLoading && !isError && conversation.length > 0) {
        // console.log(conversation);
        content = conversation.map(chat => {
            const { name, email: partnerEmail } = getParticipant(chat?.users, email);

            const { message, id, timestamp } = chat;
            const navigate = () => {
                navigates(`/inbox/${id}`);
            }
            return (
                <li key={id} onClick={navigate}>
                    <ChatItem
                            avatar={gravatarUrl(partnerEmail, {
                                size: 80
                            })}
                            name={name}
                            lastMessage={message}
                            lastTime={moment(timestamp).fromNow()}
                            key={chat?.id}
                        />
                </li>
            )
        })
    }
    return (
        <ul>
            {content}
        </ul>
    );
}
