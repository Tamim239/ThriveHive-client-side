import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { JobCard } from "../../JobCard/JobCard";

export const JobCategory = () => {
  return (
    <div className="my-5 mx-6">
        <div className="mb-5 space-y-3">
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>Explore Jobs by Category</h1>
            <p className='max-w-2xl mx-auto text-center text-gray-500 '>Discover a variety of jobs across different industries with our convenient browse-by-category feature.</p>
        </div>
      <div className="text-center">
        <Tabs>
          <TabList>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>

          <TabPanel>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <JobCard></JobCard>
           </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
