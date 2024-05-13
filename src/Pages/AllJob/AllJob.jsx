import { Link } from "react-router-dom"
import { usePostJobs } from "../../Hook/usePostJobs"
import { useState } from "react"

export const AllJob = () => {
    
    const {data} = usePostJobs()
    console.log(data)
    const [searchValue, setSearchValue] = useState(data)

    const handleSearch = e =>{
        e.preventDefault()
        const form = e.target;
        const search = form.search.value;
        const searchLower = search.toLowerCase()
        console.log(searchLower)
        const remaining = data?.filter(item => item.jobTitle.toLowerCase().includes(searchLower))
        console.log(remaining)
        setSearchValue(remaining)
    }

    
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <form
            onSubmit={handleSearch} 
            className="max-w-md px-4 mx-auto mt-12">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by Job Title "
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr className="divide-x">
                    <th className="py-3 px-6">Job Title</th>
                    <th className="py-3 px-6">Job Posting Date</th>
                    <th className="py-3 px-6">Application Deadline</th>
                    <th className="py-3 px-6">Salary range</th>
                    <th className="py-3 px-6"></th>
                </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
                {
                    searchValue?.map((item, idx) => (
                        <tr key={item?._id} className="divide-x">
                            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                <span>{idx + 1}</span>
                                {item?.job_title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.todayDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item?.deadline}</td>
                            <td className="px-6 py-4 whitespace-nowrap">${item?.min_price} - ${item?.max_price}</td>
                            <Link to={`/jobDetails/${item?._id}`} className="relative inline-flex items-center justify-center p-1 px-3 py-2 overflow-hidden font-medium text-[#F16E1E] transition duration-300 ease-out border-b-2 border-[#F16E1E] rounded-sm shadow-md group">
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>
  )
}
