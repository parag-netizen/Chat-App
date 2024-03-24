import { useEffect, useState } from "react"
import useConversation from "../zustand/Useconversation";
import toast from "react-hot-toast";

const UseGetMessages = () => {
    const [loading, setloading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setloading(true)
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`)
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                await setMessages(data)

            } catch (error) {
                toast.error(error.message)
            } finally {
                setloading(false)
            }
        }

        if (selectedConversation?._id) getMessages();
    }, [messages, selectedConversation?._id])

    return { messages, loading };
}

export default UseGetMessages;