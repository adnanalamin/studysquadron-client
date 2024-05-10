import { MdAddAPhoto } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {createUser, updateUserProfile, user, setUser} = useContext(AuthContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const {name, photoURL, email, password} = data;
    createUser(email, password)
    .then(() => {
      updateUserProfile(name, photoURL)
      .then(() => {
        setUser({ ...user?.user, photoURL: photoURL, displayName: name })
        toast.success('Register Successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: 'Bounce',
          });
          navigate(location?.state || '/')
      })
    })
  };
  return (
    <div className="pt-24 mb-24 ">
      <div className="font-[sans-serif] bg-white text-white md:h-screen lg:max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 h-full p-4">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>
          <div className="flex items-center md:p-8 p-6 bg-[#003C43] dark:bg-[#222831] h-full lg:w-11/12 lg:ml-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-lg w-full mx-auto"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-yellow-400">
                  Create an account
                </h3>
              </div>
              <div>
                <label className="text-xs block mb-1">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    name="name"
                    type="text"
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter name"
                  />
                  <IoIosPersonAdd className="w-[18px] h-[18px] absolute right-2"></IoIosPersonAdd>
                </div>
                {errors.name?.type === "required" && (
                  <p role="alert">Name is required</p>
                )}
              </div>
              <div>
                <label className="text-xs block  mt-8">Photo</label>
                <div className="relative flex items-center">
                  <input
                    {...register("photoURL", { required: true })}
                    aria-invalid={errors.photoURL ? "true" : "false"}
                    name="photoURL"
                    type="text"
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter Photo URL"
                  />
                  <MdAddAPhoto className="w-[18px] h-[18px] absolute right-2"></MdAddAPhoto>
                </div>
                {errors.photoURL?.type === "required" && (
                  <p role="alert">photoURL is required</p>
                )}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-1">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  <MdEmail className="w-[18px] h-[18px] absolute right-2"></MdEmail>
                </div>
                {errors.email?.type === "required" && (
                  <p role="alert">E-mail is required</p>
                )}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-1">Password</label>
                <div className="relative flex items-center">
                  <input
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                    name="password"
                    type="password"
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                  <FaRegEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></FaRegEye>
                </div>
                {errors.password && <p role="alert"> at least 1 uppercase letter, 1 lowercase letter and 1 number</p>}
              </div>

              <div className="mt-8">
                <button className="btn w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-yellow-400 border border-yellow-400 focus:outline-none">
                  Register
                </button>
                <p className="text-sm mt-6">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-yellow-400 font-semibold hover:underline ml-1">
                      Login here
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
