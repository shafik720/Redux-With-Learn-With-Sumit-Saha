// import Blank from "./Blank";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useGetSingleMessagesQuery } from "../../../features/messages/messagesApi";
import Error from "../../ui/Error";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody() {
    const params = useParams();
    const { id } = params;

    const { data, isLoading, isError, error } = useGetSingleMessagesQuery(id);

    let content = null;
    if (isLoading && !isError) {
        content = <p>Loading...</p>
    }
    if (!isLoading && isError) {
        content = <Error message={error?.data}></Error>
        console.log(error);
    }
    if (!isLoading && !isError && data.length === 0) {
        content = <p>No messages found</p>
    }
    if (!isLoading && !isError && data.length > 0) {
        content = (
            <div className="w-full grid conversation-row-grid">
                <ChatHead messages = {data[0]} />
                <Messages messages = {data} />
                <Options />
                {/* <Blank /> */}
            </div>
        );

    }

    return (
        <div className="w-full lg:col-span-2 lg:block">
            {content}
        </div>
    );
}
