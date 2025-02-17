import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form"
import loginImg from "../../assets/images/login.jpg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";




const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const {userSignIn, googleLogin, githubLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  

  const onSubmit = async(data) => {
    const {email, password} = data;
    try {
      const result = await userSignIn(email, password)
      await axios.post(
        'https://studysquadron-server.vercel.app/jwt',
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      
      toast.success('Login Successfull')
      navigate(location?.state || '/')
    } catch (err) {
      toast.error(err?.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleLogin()
      await axios.post(
        'https://studysquadron-server.vercel.app/jwt',
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      toast.success('Signin Successful')
      navigate(location?.state || '/')
    } catch (err) {
      toast.error(err?.message)
    }
  }

  const handleGithubSignIn = async () => {
    try {
      const result = await githubLogin()
      await axios.post(
        'https://studysquadron-server.vercel.app/jwt',
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      toast.success('Signin Successful')
      navigate(location?.state || '/')
    } catch (err) {
      toast.error(err?.message)
    }
  }
    return (
        <div className="pt-14">
            <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full sm:px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold">Log in</h3>
                <p className="text-sm mt-4 ">Don not have an account <Link to='/register'><span className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</span></Link></p>
              </div>
              <div>
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                   name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter email" />
                  <MdEmail className="w-[18px] h-[18px] absolute right-2"></MdEmail>
                  
                </div>
                {errors.email?.type === "required" && (
                  <p role="alert">E-mail is required</p>
                )}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                   name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter password" />
                  <FaRegEye  className="w-[18px] h-[18px] absolute right-2"></FaRegEye>
                </div>
                {errors.password && <p role="alert"> at least 1 uppercase letter, 1 lowercase letter and 1 number</p>}
              </div>
              
              <div className="mt-12">
                <button  className="btn w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#135D66] hover:bg-[#003C43] focus:outline-none">
                  Log in
                </button>
              </div>
              <p className="my-8 text-sm text-gray-400 text-center">or continue with</p>
              <div className="space-x-8 flex justify-center">
                <button onClick={handleGoogleSignIn} type="button"
                  className="border-none outline-none">
                  <BsGoogle className="text-3xl text-[#77B0AA]"></BsGoogle>
                </button>
                <button onClick={handleGithubSignIn} type="button"
                  className="border-none outline-none">
                  <FaGithub  className="text-3xl text-[#77B0AA]"></FaGithub>
                </button>
                <button type="button"
                  className="border-none outline-none">
                  <FaTwitter  className="text-3xl text-[#77B0AA]"></FaTwitter>
                </button>
              </div>
            </form>
          </div>
          <div className="md:h-full max-md:mt-10  rounded-xl lg:p-12 p-8">
            <img src={loginImg} className="w-full h-full object-contain" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={true}
/>
        </div>
    );
};

export default Login;