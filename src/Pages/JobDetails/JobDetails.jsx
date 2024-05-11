import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const JobDetails = () => {
  const { user } = useAuth();
  const { data } = useLoaderData();
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return toast.error("You have to login first");
    }
  }, [user, navigate]);

  const {
    image,
    description,
    applicationDeadline,
    category,
    jobPostingDate,
    jobTitle,
    name,
    salaryRange,
  } = data;

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog Details
          </h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={image}
              alt=""
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="flex justify-between items-center gap-6">
                <a className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">
                  Post Date : {new Date(jobPostingDate).toLocaleDateString()}
                </a>
                <a className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">
                  Deadline :{" "}
                  {new Date(applicationDeadline).toLocaleDateString()}
                </a>
              </div>
              <p className="text-xl text-blue-500 uppercase mt-2">{category}</p>
              <a className="block mt-1 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                {jobTitle}
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
              </p>
              <div className="flex justify-between items-center gap-6">
                <a
                  href="#"
                  className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                >
                  {name}
                </a>
                <a
                  href="#"
                  className="inline-block mt-2 text-blue-500  hover:text-blue-400 text-center"
                >
                  {salaryRange} <br />
                  Salary Range
                </a>
              </div>
              <div className="text-end my-5">
                <button
                  className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  href="#"
                >
                  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Apply
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
