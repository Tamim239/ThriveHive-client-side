import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useAuth } from '../../Hook/useAuth'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


export const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date())
    const {user} = useAuth()

 const handleFormSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const job_title = form.job_title.value;
    const todayDate = form.todayDate.value;
    const deadline = new Date(startDate).toLocaleDateString();
    const category = form.category.value;
    const photoURL = form.photo.value;
    const min_price = parseFloat(form.min_price.value)
    const max_price = parseFloat(form.max_price.value)
    const description = form.description.value;

    const jobData = {
        job_title,
        todayDate,
        deadline,
        category, photoURL, min_price, max_price, description,
        buyer: {
            email: user?.email,
            name: user?.displayName,
          },
          application_count: 0,
    }
    console.log(jobData)

    axios.post(`${import.meta.env.VITE_API_URL}/postJobs`, jobData)
    .then(data =>{
        console.log(data.data)
        if(data?.data?.insertedId){
            toast.success('create job successfully')
            form.reset()
        }
    })
 }

  return (
    <div>
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Post a Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4'>
          <div className='col-span-2'>
              <label className='text-gray-700 ' htmlFor='Name'>
                Name
              </label>
              <input
                id='Name'
                name='name'
                type='text'
                disabled
                value={user?.displayName}
                className='grid-cols-2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='col-span-2'>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='col-span-3'>
              <label className='text-gray-700 ' htmlFor='photoURL'>
                PhotoURL
              </label>
              <input
                id='photoURL'
                name='photo'
                type='text'
                placeholder='photoURL link here'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='Today_Date'>
                Posting Date
              </label>
              <input
                id='Today_Date'
                name='todayDate'
                type='text'
                disabled
                value={new Date().toLocaleDateString()}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='col-span-1 sm:col-span-2 '>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                type='text'
              
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>


            <div className='flex flex-col gap-2 col-span-1'>
              <label className='text-gray-700'>Deadline</label>
              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='On Site'>On Site</option>
                <option value='Remote'>Remote</option>
                <option value='Part-Time'> Part-Time</option>
                <option value='Hybrid'> Hybrid</option>
              </select>
            </div>
            <div className='col-span-1 sm:col-span-2 '>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='col-span-1 sm:col-span-2 '>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
    </div>
  )
}
