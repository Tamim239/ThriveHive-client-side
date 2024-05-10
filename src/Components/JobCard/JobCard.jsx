import { Link } from "react-router-dom";

export const JobCard = () => {
  return (
    <div>
      <Link className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-4">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <span className="bg-[#F16E1E] p-2 px-4 rounded-full text-white absolute top-0 left-0 font-bold">5</span>
        <div className="sm:flex sm:justify-between sm:gap-4 pt-8">
          <div className="text-start">
            <div className="flex justify-between gap-2">
              <h1>Posted : Acme industries</h1>
              <h2>20/05/2024</h2>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h3>
          </div>
        </div>
        <div className="mt-4 flex gap-4 sm:gap-6 justify-between">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Salary Range</dt>
            <dd className="text-sm text-gray-800">$18 - $22 per hour</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Deadline</dt>
            <dd className="text-base text-gray-800">31st June, 2021</dd>
          </div>
          <div>
            <Link className="relative inline-flex items-center justify-center p-1 px-3 py-2 overflow-hidden font-medium text-[#F16E1E] transition duration-300 ease-out border-b-2 border-[#F16E1E] rounded-sm shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#F16E1E] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#F16E1E] transition-all duration-300 transform group-hover:translate-x-full ease">
                View Details
              </span>
              <span className="relative invisible">View Details</span>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};
