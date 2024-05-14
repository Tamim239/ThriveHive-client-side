import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { JobCard } from "../../JobCard/JobCard";
import { usePostJobs } from "../../../Hook/usePostJobs";
import { InfinitySpin } from "react-loader-spinner";


export const JobCategory = () => {
  const {data, isLoading} = usePostJobs()
  if(isLoading) return <div className="flex justify-center h-96 items-center"><InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  /></div>
  console.log(data)


  return (
    <div className="my-5 md:mx-6">
        <div className="mb-5 space-y-3">
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-gray-400'>Explore Jobs by Category</h1>
            <p className='max-w-2xl mx-auto text-center text-gray-500 '>Discover a variety of jobs across different industries with our convenient browse-by-category feature.</p>
        </div>
      <div className="text-center">
        <Tabs>
          <TabList className="max-sm:text-sm mb-5">
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>

          <TabPanel>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              data?.filter(onsite => onsite?.category === 'On Site')?.map(job => <JobCard  key={job?._id} job={job}></JobCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              data?.filter(onsite => onsite?.category === 'Remote')?.map(job => <JobCard  key={job?._id} job={job}></JobCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              data?.filter(onsite => onsite?.category === 'Hybrid')?.map(job => <JobCard  key={job?._id} job={job}></JobCard>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              data?.filter(onsite => onsite?.category === 'Part-Time')?.map(job => <JobCard  key={job?._id} job={job}></JobCard>)
            }
           </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
