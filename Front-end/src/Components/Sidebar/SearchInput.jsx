import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useConversation from "../../zustand/Useconversation";
import useGetConversations from "../../hooks/usegetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState(``);
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 1) {
            return toast.error('search term must be at least 3 characters long')
        }

        const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('')
        } else {
            toast.error('No such user found')
        }
    }
    return <form onSubmit={handlesubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <BsSearch />
        </button>

    </form>

};

export default SearchInput;