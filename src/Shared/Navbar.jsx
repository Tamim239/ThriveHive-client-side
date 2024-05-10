import { useState } from "react"
import { Link } from "react-router-dom"
import { MdOutlineClose } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import job from '../assets/job.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container md:px-4 px-1 py-2 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 text-2xl dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            >
              {isOpen ? <MdOutlineClose /> : <RiMenu2Fill />}
            </button>
          </div>
          <img className="w-auto h-8 sm:w-10 sm:h-12" src={job} alt="" />
          <h1 className="text-xl font-bold">THRIVEHIVE</h1>
          </div>
          {/* user can login then show */}
          <div className="md:hidden dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {/* title={user?.displayName} */}
                    <div className="w-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        alt="User Profile Photo"
                        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        //   src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/add-job" className="justify-between">
                        Add Job
                      </Link>
                    </li>
                    <li>
                      <Link to="/applied-jobs">Applied Jobs</Link>
                    </li>
                    <li>
                      <Link to="/my-jobs">My Jobs</Link>
                    </li>
                    <li className="mt-2">
                      <button
                        //   onClick={logOut}
                        className="bg-gray-200 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
          </div>
          
        </div>
        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col-reverse md:flex-row md:mx-6">
            <Link to='/'
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </Link>
            <Link to='/all-jobs'
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              All Jobs
            </Link>
            <Link to="/blogs"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
             Blogs
            </Link>
          </div>
        </div>
        {/* user can login then show */}
        <div className=" max-md:hidden dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {/* title={user?.displayName} */}
                    <div className="w-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        alt="User Profile Photo"
                        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        //   src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/add-job" className="justify-between">
                        Add Job
                      </Link>
                    </li>
                    <li>
                      <Link to="/applied-jobs">Applied Jobs</Link>
                    </li>
                    <li>
                      <Link to="/my-jobs">My Jobs</Link>
                    </li>
                    <li className="mt-2">
                      <button
                        //   onClick={logOut}
                        className="bg-gray-200 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
     </div>
      </div>
    </nav>
  </div>
  )
}
