import { useState } from "react";
import { BsSend } from "react-icons/bs";
import UseSendMessage from "../../hooks/UseSendMessage.js";
import toast from "react-hot-toast";

const MessageInpu = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = UseSendMessage();

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message)
        setMessage("");
    }
    return (
        <form className="px-4 my-3" onSubmit={handlesubmit}>
            <div className="relative w-full">
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600
                text-white"
                    placeholder="Type Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className="absolute inset-y-0 text-white end-0 flex items-center pe-3 mt-0">
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
                </button>
            </div>
        </form>
    );

};

export default MessageInpu;

//STARTER CODE

// return (
//     <form className="px-4 my-3">
//         <div className="w-full">
//             <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600
//             text-white"
//                 placeholder="Type Message..." />
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//                 <BsSend></BsSend>
//             </button>
//         </div>
//     </form>
// );

// };