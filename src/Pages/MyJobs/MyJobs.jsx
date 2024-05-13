import { Link } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2";
import { useAuth } from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { InfinitySpin } from "react-loader-spinner";


export const MyJobs = () => {
    const {user} = useAuth()


      const{data = [], isLoading, refetch } = useQuery({
      queryKey: ['jobEmail', user?.email],
       queryFn: async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobEmail/${user?.email}`,{
            withCredentials: true
        })
        return data
        }
      })

   console.log(data)
  

    const handleDelete = (id) =>{
        console.log('yes', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/postJobs/${id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res?.data?.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      })
                    //    toast.success("you have successfully deleted")
                       refetch()
                    }
                })
            }
          });
       
       
    }

    if(isLoading){
        return <div className="flex justify-center h-96 items-center"><InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        /></div>
    }

  return (
    <div className="my-5">
        
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <Link to="/add-job"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add More
                    </Link>
                </div>
            </div>
            <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Job Title</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Post Date</th>
                            <th className="py-3 px-6">Deadline</th>
                            <th className="py-3 px-6">Minimum Price</th>
                            <th className="py-3 px-6">Maximum Price</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            data?.map((item) => (
                                <tr key={item?._id}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item?.photoURL} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item?.job_title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item?.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item?.todayDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item?.deadline}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item?.min_price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item?.max_price}</td>
                                    
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <Link to={`/update/${item?._id}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Update
                                        </Link>
                                        <button onClick={()=>handleDelete(item?._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
