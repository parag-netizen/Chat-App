import Messages from "./Messages.jsx";
import MessageInpu from "./MessageInput.jsx";
import { TiMessages } from 'react-icons/ti';
import useConversation from "../../zustand/Useconversation.js";
import { useEffect } from "react";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (<NoChatSelected />
            ) : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>
                        <span className="text-gray-900 font-bold">{selectedConversation.username}</span>
                    </div>
                    <Messages>

                    </Messages>
                    <MessageInpu></MessageInpu>
                </>
            )}
        </div>
    )
}

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
            items-center gap-2">
                <p>Welcome John Doe.</p>
                <p>Hi, select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"></TiMessages>
            </div>
        </div>
    )
}

// STARTER CODE SNIPPET

// const MessageContainer = () => {
//     return (
//         <div className="md:min-w-[450px] flex flex-col">
//             <>
//                 <div className="bg-slate-500 px-4 py-2 mb-2">
//                     <span className="label-text">To:</span>
//                     <span className="text-gray-900 font-bold">John Doe</span>
//                 </div>
//                 <Messages>

//                 </Messages>
//                 <MessageInpu></MessageInpu>
//             </>
//         </div>
//     )
// }

// export default MessageContainer;