import gravatarUrl from "gravatar-url";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetConverSationQuery } from "../../features/conversation/conversationApi";
import { getParticipantInfo } from "../../utils/getParticipant";
import Error from "../ui/Error";
import ChatItem from "./ChatItem";

export default function ChatItems() {
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth);
    // console.log(authState);
    const { data, isLoading, isError, error } = useGetConverSationQuery(authState.user.email);
    // console.log(data);



    let content = null;
    if (isLoading && !isError) {
        content = <h2>Loading...</h2>
    }
    if (!isLoading && isError) {
        console.log(error);
        content = <Error message={error.data}></Error>;
    }
    if (!isLoading && !isError && data.length === 0) {
        content = <h2>No Conversation Yet</h2>
    }
    if (!isLoading && !isError && data.length > 0) {

        content = data.map(conversation => {
            const { id, timestamp } = conversation;
            const { email, name } = getParticipantInfo(conversation.users, authState.user.email);
            const times = moment(timestamp).fromNow();
            const gravatars = gravatarUrl(email, { size: 80 })
            const navigation = () => {
                navigate(`/inbox/${id}`);
            }

            return <li onClick={navigation}
                key={conversation.id}>
                <ChatItem
                    avatar={gravatars}
                    name={name}
                    lastMessage={conversation.message}
                    lastTime={times}
                />
            </li>
        })
    }
    return (
        <ul>
            {content}
        </ul>
    );
}
