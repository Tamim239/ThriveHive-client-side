import { Link, useLocation, useNavigate } from "react-router-dom";
import job from "../../assets/job.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../../Hook/useAuth";
import toast from "react-hot-toast";
import axios from 'axios'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser, googleLogin, githubLogin} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        const { data } =  axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: res?.user?.email,
          },
          { withCredentials: true }
        )
        console.log(data)
        navigate(location?.state ? location.state :'/')
      })
      .catch(() =>{
        toast.error("email and password combination is incorrect")
      } );
  };

  const handleGoogleLogin =() =>{
    googleLogin()
    .then((res) =>{
     console.log(res.user)
    //  get token from server using email
     const { data } = axios.post(
       `${import.meta.env.VITE_API_URL}/jwt`,
       {
         email: res?.user?.email,
       },
       { withCredentials: true }
     )
     console.log(data)
     navigate(location?.state ? location.state :'/')
    })
    .catch(() =>{
     toast.error("email and password combination is incorrect")
    })
   };

   const handleGithubLogin = () =>{
    githubLogin()
    .then((res) =>{
     console.log(res)
     navigate(location?.state ? location.state :'/')
    })
    .catch(() => toast.error("Email and Password is incorrect"))
   }
 


  return (
    <div>
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            <section className="w-full max-w-xl py-6">
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold">
                  <img
                    src={job}
                    alt=""
                    className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 dark:text-blue-500"
                  />
                  <span>THRIVEHIVE</span>
                </h1>
                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Welcome, please sign in
                </h2>
              </header>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1 relative">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                      <span
                        className="absolute text-black right-0 top-1/2 mr-2 text-xl"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <IoMdEyeOff></IoMdEyeOff>
                        ) : (
                          <IoMdEye></IoMdEye>
                        )}
                      </span>
                    </div>
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember_me"
                            name="remember_me"
                            className="size-4 rounded border border-gray-200 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500"
                          />
                          <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a
                          href="#"
                          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                      >
                        <svg
                          className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Sign In</span>
                      </button>

                      <div className="my-5 flex items-center">
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                        />
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          or sign in with
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                        />
                      </div>
                      {/* END Divider: With Label */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                        onClick={handleGoogleLogin}
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                        >
                          <FcGoogle />

                          <span>Google</span>
                        </button>
                        <button
                        onClick={handleGithubLogin}
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                        >
                          <FaGithub className="bi bi-twitter-x inline-block size-4" />
                          <span>Github</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="grow bg-gray-50 p-5 text-center text-sm dark:bg-gray-700/50 md:px-16">
                  Don’t have an account yet?
                  <Link
                    to="/signUp"
                    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
