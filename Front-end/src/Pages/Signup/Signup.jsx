import { Link } from "react-router-dom";
import Gender from "./Gender.jsx";
import { useState } from "react";
import UseSignup from "../../hooks/UseSignup.jsx";

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmpassword: "",
        gender: "",
    })

    const { loading, SignUp } = UseSignup();

    const handleCheckboxChange = (Gender_) => {
        setInput({ ...input, gender: Gender_ })
    }

    const handleSubmit = async (element) => {
        element.preventDefault();
        await SignUp(input);
    }

    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 founded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-200">
                <span className="text-blue-300 pr-1">Chat</span>Signup
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">FullName</span>
                    </label>
                    <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10"
                        value={input.fullname}
                        onChange={(e) => setInput({ ...input, fullname: e.target.value })} />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="w-full input input-bordered h-10"
                        value={input.username}
                        onChange={(e) => setInput({ ...input, username: e.target.value })} />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">ConfirmPassword</span>
                    </label>
                    <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10"
                        value={input.conirmpassword}
                        onChange={(e) => setInput({ ...input, confirmpassword: e.target.value })} />
                </div>
                <Gender onCheckBoxChange={handleCheckboxChange} selectedgender={input.gender} />
                <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    Already have an account?
                </Link>
                <div>
                    <button className="btn btn-block btn-sm mt-2  bg-gray-500"
                        disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </div>
            </form>

        </div>
    </div>
};

export default Signup;

// Starter CODE
// const Signup = () => {
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 founded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//         bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-200">
//                 <span className="text-blue-300 pr-1"> Chat</span>
//                 Signup
//             </h1>
//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
//                 </div>
//                 <Gender />
//                 <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                     Already have an account?
//                 </a>
//                 <div className="btn btn-block btn-sm mt-2  bg-gray-500">
//                     <span className="text-gray-300">Signup</span>
//                 </div>
//             </form>

//         </div>
//     </div>
// }

// export default Signup;