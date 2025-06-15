import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Login = () => {

  const [pass, setPass] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center bg-green-950 h-[100vh]">
        <div className="bg-white max-w-sm py-5 px-7 space-y-4">
          <h2 className="text-green-950 font-bold  text-center text-2xl"> Login </h2>
          <form className="space-y-4">
            <input
              className="w-full border-1 px-4 py-2 rounded focus:ring-2 focus:ring-green-950 focus:border-0"
              type="email"
              placeholder="Email"
              name=""
              id=""
              required
            />
            {/* Only Password */}
            <div className="relative flex items-center">
              <input
                type={pass ? 'text' : 'password'}
                className="w-full border-1 px-4 py-2 rounded focus:ring-2 focus:ring-green-950 focus:border-0"
                placeholder="Password"
                name=""
                id=""
                required
              />
              {
                pass ? <IoEyeOff onClick={() => setPass(!pass)} className="absolute right-3 cursor-pointer"/> 
                : 
                <IoEye onClick={() => setPass(!pass)} className="absolute right-3 cursor-pointer"/>
              }
            </div>

            <p className="text-right font-medium cursor-pointer hover:text-green-950 hover:underline">
              Forget Password
            </p>

            <button
              type="submit"
              className="w-full bg-green-900 text-white rounded py-2 font-medium cursor-pointer hover:bg-green-950"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-gray-950"></div>
            <span className="text-gray-950 text-sm font-semibold px-4"> OR </span>
            <div className="flex-grow h-px bg-gray-950"></div>
          </div>

          <div className="flex flex-col space-y-3">
            <button className="w-full bg-blue-900 text-white rounded py-2 px-2 font-medium cursor-pointer hover:bg-blue-950 flex items-center justify-center gap-3">
             <FcGoogle className="text-xl"/> Login with Google
            </button>

            <button className="w-full bg-gray-900 text-white rounded py-2 px-2 font-medium cursor-pointer hover:bg-gray-950 flex items-center justify-center gap-3">
              <FaSquareGithub className="text-xl" /> Login with Github
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?  
              <Link 
                to='/register'
                className="px-2 font-bold hover:text-green-950 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
