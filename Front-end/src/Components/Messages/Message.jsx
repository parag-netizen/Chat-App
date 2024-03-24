import { extractTime } from "../../../../Back-end/Utils/extractTime";
import { useAuthcontext } from "../../Context/AuthContext";
import useConversation from "../../zustand/Useconversation";



const Message = ({ message }) => {
    const { authUser } = useAuthcontext();
    const { selectedConversation } = useConversation();
    const fromme = message.senderId === authUser._id;
    const formatted = extractTime(message.createdAt)
    const chatClassname = fromme ? 'chat-end' : 'chat-start';
    const profilePic = fromme ? authUser.profilePic : selectedConversation.profilePic
    const bubbleBGcolor = fromme ? 'bg-blue-500' : 'bg-black-500'

    return (
        <div className={`chat ${chatClassname}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic}
                        alt="avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white padding-2 ${bubbleBGcolor}`}>{message.message}</div>
            <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">{formatted}</div>
        </div>
    );
};

export default Message;