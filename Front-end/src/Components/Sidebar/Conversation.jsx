import useConversation from "../../zustand/Useconversation";

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    return <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-400" : ""}`
        }
            onClick={() => setSelectedConversation(conversation)}>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={conversation.profilepic} alt="user avatar" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">{conversation.fullname}</p>
                    <span className="text-xl">G</span>
                </div>
            </div>
        </div >
        {!lastIdx && <div className="divider my-0 py-0 h-1" />
        }

    </>
}

export default Conversation;

// STARTER CODE
// const Conversation = () => {

//     return <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//             <div className="avatar online">
//                 <div className="w-12 rounded-full">
//                     <img src="" alt="user avatar" />
//                 </div>
//             </div>
//             <div className="flex flex-col flex-1">
//                 <div className="flex gap-3 justify-between">
//                     <p className="font-bold text-gray-200">John doe</p>
//                     <span className="text-xl">G</span>
//                 </div>
//             </div>
//         </div>
//         <div className="divider my-0 py-0 h-1" />
//     </>
// }

// export default Conversation;