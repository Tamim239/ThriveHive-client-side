/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"
import image1 from '../../../assets/image4.jpg'
import { FaCloudflare } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandLaravel } from "react-icons/tb";
import { FaDigitalOcean } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Banner = () => {

    return (
        <div>
          <section className="py-10">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 200 successful deals
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Find the perfect launchpad for your career
                        </h2>
                        <p>
                        ThriveHive is your one-stop platform for igniting your career potential and finding the perfect opportunity. We connect ambitious job seekers like you with exciting employers, guiding you on your journey towards a fulfilling career.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to='/' className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </Link>
                            <Link to='/' className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={image1}
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-xl text-gray-700 font-semibold">Trusted by the best companies</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                    <Marquee loop='infinite' speed={100} className="space-x-9">
                       <div className="mx-10">
                       <p className="flex items-center gap-1 text-3xl"><TbBrandLaravel className="size-14"/>Laravel</p>
                       
                       </div>
                        <div className="mx-10">
                        <p className="flex items-center gap-1 text-3xl"><IoLogoVercel className="size-12"/>Vercel</p>
                        </div>
                        <div className="mx-10">
                      <p className="flex items-center gap-1 text-3xl"><FaCloudflare className="size-16"/> CloudFlare </p>    
                        </div>
                        <div className="mx-10">
                        <p className="flex items-center gap-1 text-3xl"><FaDigitalOcean className="size-12"/> Digital Ocean </p>
                        
                        </div>
                 
                        <div className="mx-10">
                        <p className="flex items-center gap-1 text-3xl"><FaDropbox className="size-12"/> Dropbox </p>
                        </div>

                      <div className="mx-10">
                      <p className="flex items-center gap-1 text-3xl"><FaGithub className="size-12"/> Github</p>
                      </div>
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    )
}
