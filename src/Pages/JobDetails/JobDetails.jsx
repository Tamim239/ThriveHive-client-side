import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";


export const JobDetails = () => {
  const {user} = useAuth()
  const { data } = useLoaderData();
  const navigate = useNavigate()

  console.log(data);

  useEffect(()=>{
    if(!user){
     navigate('/login')
     return toast.error("You have to login first")
    }

  },[user, navigate])



  const {
    applicationDeadline,
    category,
    jobPostingDate,
    jobTitle,
    name,
    salaryRange,
  } = data;

  return (
    <div>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Posting Date : {jobPostingDate}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabIndex="0"
            role="button"
          >
            {category}
          </a>
        </div>

        <div className="mt-2">
          <a
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex="0"
            role="link"
          >
            {jobTitle}
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Salary Range : {salaryRange}
          </p>
        </div>

        <div className="flex flex-row-reverse items-center justify-between mt-4">
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            Deadline {applicationDeadline}
          </a>

          <div className="flex items-center">
            <a
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              Job Posted : {name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
