import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.jsx";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handlesubmit = async (e) => {
        e.preventDefault()
        await login(username, password);
    }

    return <div className="flex flex-col items-center justify-center min-w-96 mx-aut0">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-200">
                <span className="text-blue-300 pr-1"> Chat</span>
                Login
            </h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-gray-300" />
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="Enter Username" className="w-full input input-bordered h-10  bg-gray-300" />
                </div>
                <Link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    Don't have an account?
                </Link>
                <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
};

export default Login;

//STARTER CODE FOR LOGIN Page

// export default Login;

// const Login = () => {
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-aut0">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//         bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-900">
//                 <span className="text-blue-600 pr-1"> Chat</span>
//                 Login
//             </h1>
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-gray-300" />
//                     <label className="label p-2">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder="Enter Username" className="w-full input input-bordered h-10  bg-gray-300" />
//                 </div>
//                 <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                     Don't have an account?
//                 </a>
//                 <div className="btn btn-block btn-sm mt-2  bg-gray-500">
//                     <span className="text-gray-300">Login</span>
//                 </div>
//             </form>
//         </div>
//     </div>
// };

// export default Login;