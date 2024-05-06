import { useState } from "react";
import useConversation from "../zustand/Useconversation.js";
import toast from "react-hot-toast";

const UseSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    console.log(typeof messages)
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ message })
            })
            const data = await res.json()

            if (data.error) throw new Error(data.error)
            await setMessages([...messages, data])
            console.log(data)
            console.log({ messages })
        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }

    }
    return { sendMessage, loading }
}

export default UseSendMessage;