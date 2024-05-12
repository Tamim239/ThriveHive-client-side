import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export const JobCard = ({ job }) => {

     
  const {
    _id,
    job_title,
        todayDate,
        deadline,
        category, min_price, max_price,
        buyer,
        application_count
  } = job;


  return (
    <div>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-4">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <span className="bg-[#F16E1E] p-2 px-4 rounded-full text-white absolute top-0 left-0 font-bold">
          {application_count || 0}
        </span>
        <div className="sm:flex sm:justify-between sm:gap-4 pt-8 space-y-3">
          <div className="text-start w-full">
            <div className="flex items-center justify-between  gap-5">
              <h1>Posted : {buyer?.name}</h1>
              <h2>{todayDate}</h2>
            </div>
            <h3 className="text-xl font-bold text-gray-900 h-12">
              {job_title} ({category})
            </h3>
          </div>
        </div>
        <div className="mt-4 flex gap-4 sm:gap-6 justify-between">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Salary Range</dt>
            <dd className="text-sm text-gray-800">${min_price} - ${max_price}</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Deadline</dt>
            <dd className="text-base text-gray-800">{deadline}</dd>
          </div>
          <div>
            <Link to={`/jobDetails/${_id}`} className="relative inline-flex items-center justify-center p-1 px-3 py-2 overflow-hidden font-medium text-[#F16E1E] transition duration-300 ease-out border-b-2 border-[#F16E1E] rounded-sm shadow-md group">
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
      </div>
    </div>
  );
};

JobCard.propTypes ={
  job: PropTypes.object
}