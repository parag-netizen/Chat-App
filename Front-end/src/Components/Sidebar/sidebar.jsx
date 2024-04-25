import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import Logout from "./Logout.jsx";

const Sidebar = () => {
    return <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput></SearchInput>
        <div className="divider px-3"></div>
        <Conversations></Conversations>
        <Logout></Logout>
    </div>
};

export default Sidebar;