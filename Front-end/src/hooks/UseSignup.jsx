import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthcontext } from "../Context/AuthContext";

const UseSignup = () => {
    const [loading, setloading] = useState(false);
    const { setAuthUser } = useAuthcontext();
    const SignUp = async ({ username, fullname, password, confirmpassword, gender }) => {
        const success = handleInputErrors({ username, fullname, password, confirmpassword, gender })
        if (!success) return;
        setloading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, fullname, password, confirmpassword, gender }),
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);
        }

        catch (error) {
            toast.error(error.message);
            console.log(error.message);
        } finally {
            setloading(false);
        }
    };
    return { loading, SignUp };
}

function handleInputErrors({ fullname, username, password, confirmpassword, gender }) {
    console.log(username);
    console.log(fullname);
    console.log(password);
    console.log(confirmpassword);
    console.log(gender);
    if (fullname === '' || username === '' || password === '' || confirmpassword === '' || gender === '') {
        toast.error("Pls fill all the fields");
        return false;
    }

    if (password !== confirmpassword) {
        toast.error('Pswd and cnfPswd do not match');
        return false;
    }
    if (password.length < 6) {
        toast.error('Pswd must be atleast 6 characters');
        return false;
    }

    return true;
}

export default UseSignup;