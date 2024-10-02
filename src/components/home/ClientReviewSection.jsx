import React from 'react'
import { FaStar } from "react-icons/fa6";
import Avatar from './Avatar';
import { BsDot } from "react-icons/bs";



const ClientReviewSection = () => {
  return (
    <div className="hero max-h-full py-6">
    <div className="hero-content max-w-[100%] w-[100%] p-0  flex-col sm:flex-row gap-4 justify-start items-center py-8 ">

        <div className=" flex flex-col items-center justify-center w-[100%] gap-3 ">

            <h3 className="my_h2  text-center">
                What
                <span className="gradient-text font-bold px-2">Our Client Says</span>
                
            </h3>

            <p className=' items-center text-center text-[12px] w-[60%]  text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. tam vero alias  deserunt incidunt beatae!</p>


           <div className='flex flex-col sm:flex-row gap-3 items-center justify-center my-6'>

                <div className='btn_outline_blue_sky_blue border-[1px] rounded-[12px] sm:w-1/2 flex flex-col gap-3 p-4  '>

                <div className='pb-3 border-b-[1px] border-b-gray-500 flex flex-col sm:flex-row gap-3 items-center justify-start'>
                    
                    <Avatar />

                    <div className='flex flex-col gap-1  items-center justify-center'>
                        <h5 className='my_h5'>Robert Mersilo</h5>

                        <div className='flex flex-row gap-1'>
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />

                        </div>


                    </div>



                </div>

                <h5 className='my_h5 text-blue-500'>Life Insurance</h5>
                <p className='text-[11px] w-[70%] font-semibold text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste suscipit assumenda dicta pariatur delectus quis.</p>

                </div>


                <div className='btn_outline_blue_sky_blue border-[1px] rounded-[12px] sm:w-1/2 flex flex-col gap-3 p-4  '>

                <div className='pb-3 border-b-[1px] border-b-gray-500 flex flex-col sm:flex-row gap-3 items-center justify-start'>
                    
                    <Avatar />

                    <div className='flex flex-col gap-1  items-center justify-center'>
                        <h5 className='my_h5'>Robert Mersilo</h5>

                        <div className='flex flex-row gap-1'>
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />
                            <FaStar className='w-3 h-3 text-yellow-400' />

                        </div>


                    </div>



                </div>

                <h5 className='my_h5 text-blue-500'>Life Insurance</h5>
                <p className='text-[11px] w-[70%] font-semibold text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste suscipit assumenda dicta pariatur delectus quis.</p>

                </div>



           </div>

            <div className='flex flex-row'>
            <BsDot className='w-5 h-5 text-blue-500'/>
            <BsDot className='w-5 h-5 text-gray-400'/>
            <BsDot className='w-5 h-5 text-gray-400'/>

            </div>



        </div>






    </div>
</div>
  )
}

export default ClientReviewSection