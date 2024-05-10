import { MdAddAPhoto } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";





const Register = () => {
    return (
        <div className="pt-24 mb-24">
            <div className="font-[sans-serif] bg-white text-white md:h-screen lg:max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 h-full p-4">
          <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-[#003C43] dark:bg-[#222831] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-400">Create an account</h3>
            </div>
            <div>
              <label className="text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter name" />
                <IoIosPersonAdd className="w-[18px] h-[18px] absolute right-2"></IoIosPersonAdd>
                
              </div>
            </div>
            <div>
              <label className="text-xs block mb-2 mt-10">Photo</label>
              <div className="relative flex items-center">
                <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Photo URL" />
                <MdAddAPhoto className="w-[18px] h-[18px] absolute right-2"></MdAddAPhoto>
                
              </div>
            </div>
            <div className="mt-10">
              <label className="text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input name="email" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter email" />
                <MdEmail className="w-[18px] h-[18px] absolute right-2"></MdEmail>
                
              </div>
            </div>
            <div className="mt-10">
              <label className="text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter password" />
                <FaRegEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></FaRegEye>
                
              </div>
            </div>
            
            <div className="mt-12">
              <button type="button" className="w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-yellow-400 border border-yellow-400 focus:outline-none">
                Register
              </button>
              <p className="text-sm mt-8">Already have an account? <Link to='/login'>
              <span  className="text-yellow-400 font-semibold hover:underline ml-1">Login here</span>
              </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;