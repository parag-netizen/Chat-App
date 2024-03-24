import "./App.css";
import Home from "./Pages/Home/Hom_e.jsx";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import { Toaster } from 'react-hot-toast'
import { useAuthcontext } from "./Context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthcontext();
  return (<div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />}></Route>
      <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />}></Route>
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />}></Route>

    </Routes>
    <Toaster />
  </div>
  )
};

export default App;
