/* eslint-disable react/no-unescaped-entities */

import job from '../assets/job.png'
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {

  const footerNavs = [
    {
        id: 1,
        name: 'About'
    },
    {
        id: 2,
        name: 'Blogs'
    },
    {
        id: 3,
        name: 'Team'
    },
    {
        id: 4,
        name: 'Careers'
    },
    {
        id: 5,
        name: 'Support'
    }
]

  return (
    <footer className="text-gray-500 bg-white px-4 border-t-2 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
              <div>
              <img src={job} className="w-16 sm:mx-auto" alt='Job logo' />
           <h1 className="text-xl font-bold">THRIVEHIVE</h1>
              </div>
                {/* <img src={job} className="w-16 sm:mx-auto" /> */}
                <p className="leading-relaxed mt-2 text-[15px]">
                The footer includes navigation links, contact info, copyright notice, and social media links. It enhances website accessibility, provides legal information, and encourages user engagement.
                </p>
            </div>
            <ul className="flex items-center justify-center mt-8 space-x-4 ">
                {
                    footerNavs.map((item) => (
                        <li className=" hover:text-gray-800" key={item?.id}>
                            <p>
                                { item.name }
                            </p>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024  All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <IoLogoTwitter className='size-6 text-blue-500'/>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <FaFacebookF className='size-5 text-blue-700'/>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                           <FaGithub className='size-6 text-black'/>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                         <FaInstagram className='size-6 text-red-500'/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}
