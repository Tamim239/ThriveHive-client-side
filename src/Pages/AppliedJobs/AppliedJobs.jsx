import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hook/useAuth";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import axios from "axios";


export const AppliedJobs = () => {
  const { user } = useAuth();
  const [jobData, setJobData] = useState([]);
  console.log(user.email);
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["apply", user?.email],
    queryFn: async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobList/${user?.email}`,{
          withCredentials: true
        })
            return data;
        }
    });
    console.log(data)
    useEffect(()=>{
      setJobData(data)
    },[data])

   const handleDropDown= (e)=>{
    e.preventDefault()
    const value = e.target.value;
    console.log(value)
    const remaining = data.filter(item =>  item?.category === value);
        setJobData(remaining)
   }

   if(isPending){
    return (
    <div className="flex justify-center h-96 items-center">
          <InfinitySpin visible={true} width="200" color="#4fa94d" />
        </div>
        )
   }

  if (isLoading) {
    return (
      <div className="flex justify-center h-96 items-center">
        <InfinitySpin visible={true} width="200" color="#4fa94d" />
      </div>
    )
  }


  return (
    <div className="px-6 mx-auto">
         <div className="relative w-72 max-w-full mx-auto my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select onChange={handleDropDown} className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <option defaultValue="please selected"></option>
        <option value="On Site">On Site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Part-Time">Part-Time</option>
      </select>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {
        jobData?.map(item => <article key={item._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt=""
          src={item?.photoURL}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <div className="flex items-center justify-between">
          <time  className="block text-xs text-red-500">
            Posted Date : {item?.todayDate}
          </time>
          <time  className="block text-xs text-red-500">
             Deadline : {item?.deadline}
          </time>
          </div>

          <div>
            <h3 className="mt-0.5 text-lg text-gray-900">
             {item?.job_title} ({item?.category})
            </h3>
          </div>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {item?.description}
          </p>
          <div className="flex items-center justify-between">
          <p  className="block text-xs text-red-400">
            Buyer_Email : {item?.buyer_email}
          </p>
          <p  className="block text-xs text-center">
          <span className="">${item?.min_price} - ${item?.max_price}</span> <br /> salary Range 
          </p>
          </div>
        </div>
      </article>)
     }
    </div>
    <div>
    </div>
    </div>
  );
};
