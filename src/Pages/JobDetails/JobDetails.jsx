import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";

export const JobDetails = () => {
  const { user } = useAuth();
  const { data } = useLoaderData();
  const {
    _id,
    job_title,
    todayDate,
    deadline,
    category, photoURL, min_price, max_price, description,
    buyer
  } = data;


  const handleModal = () => {
    if(user?.email === buyer?.email){
      return toast.error("you do not have permission")
    }
    const currentDate = new Date().toLocaleDateString();
    const applicantDeadline = new Date(deadline).toLocaleDateString()
    console.log(currentDate, applicantDeadline)
    if(currentDate > applicantDeadline){
      return toast.error('The Deadline is over')
    }
    document.getElementById("my_modal_3").showModal();
  };

  const handleSubmit = e =>{
    e.preventDefault();
    const form =  e.target;
    const resume = form.resume.value;
    const email = user?.email;
    const name = user?.displayName  ;
    const buyer_email = buyer?.email;
    const jobId = _id;

    const applyData = {
      resume, email, name, buyer_email, jobId, job_title,
      todayDate,
      deadline,
      category, photoURL, min_price, max_price, description
    }
    useAxiosSecure.post(`/jobList`, applyData)
    .then(res=>{
      console.log(res.data)
      if(res?.data?.insertedId){
          toast.success('you have applied successfully');
      }
    })
    
  }
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
              src={photoURL}
              alt=""
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="flex justify-between items-center gap-6">
                <a className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">
                  Post Date : {todayDate}
                </a>
                <a className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">
                  Deadline :{" "}
                  {deadline}
                </a>
              </div>
              <p className="text-xl text-blue-500 uppercase mt-2">{category}</p>
              <a className="block mt-1 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                {job_title}
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
              </p>
              <div className="flex justify-between items-center gap-6">
                <a
                  href="#"
                  className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                >
                  {buyer?.name}
                </a>
                <a
                  href="#"
                  className="inline-block mt-2 text-blue-500  hover:text-blue-400 text-center"
                >
                  ${min_price} - ${max_price} <br />
                  Salary Range
                </a>
              </div>
              <div className="text-end my-5">
                <button
                  onClick={handleModal}
                  className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  href="#"
                >
                  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Apply
                  </span>
                </button>
              </div>
              {/* modal */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleSubmit} className="text-center space-y-2">
                  <h3 className="font-bold text-lg">Apply for Job fill up Now!</h3>
                  <div className="space-y-3">
                  <input type="text" value={user?.displayName} placeholder="Name here" className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="email" value={user?.email} placeholder="Email here" className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="text" name="resume" placeholder="Resume link here" className="input input-bordered input-secondary w-full max-w-xs" />
                  </div>
                  <div>
                   <input type="submit" value="Submit" className="btn btn-secondary"/>
                  </div>
                  </form>
                </div>
              </dialog>

              {/* modal end */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
