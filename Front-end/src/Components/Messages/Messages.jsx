import UseGetMessages from "../../hooks/UseGetMessages.js";
import Message from "./Message.jsx";
import MessageSkeleton from "../Skeletons/Skeleton.jsx";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {

    const { messages, loading } = UseGetMessages();
    console.log(messages)
    useListenMessages();
    const lastMessageRef = useRef();
    useEffect(() => {
        setTimeout(() => { lastMessageRef.current?.scrollIntoView({ behavior: "smooth" }) }, 3);
    }, [messages])
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id}
                        ref={lastMessageRef}>
                        <Message message={message}></Message>
                    </div>
                ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}></MessageSkeleton>)}

            {!loading && messages.length === 0 && (<p className="text-center text-white">Send message to start te conversation</p>)}
        </div>
    );
};

export default Messages;