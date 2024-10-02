import React from "react";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";
import { BsArrowLeftCircle,  BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";



const ServicesSection = () => {
	return (


		<div className=" flex flex-col items-start justify-center gap-7 py-8 ">

            <h3 className="my_h3">The <span className="gradient-text font-bold px-2">Best Service </span> <br/> We Provide</h3>

            <div className=" w-[80%] flex flex-col sm:flex-row gap-3 justify-between ">

                  <p className="sm:w-[40%] text-sm">Lorem ipsum dolor sit amet conse. Neque ullam Non, deleniti!</p>

                  <div className=" flex flex-row gap-5 items-center justify-start cursor-pointer">

                  <BsArrowLeftCircle  className="w-7 h-7" />
                  <BsArrowRightCircle className="w-7 h-7 bg-custom-button-bg-gradient rounded-full" />



                  </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

                  <div className="border btn_outline_blue_sky_blue rounded-[12px] flex flex-col items-start justify-center sm:w-[20%] px-3 py-5 gap-3 font-semibold">

                  <MdOutlineContactPhone className="w-14 h-14 border rounded-full p-2 text-blue-500 border-blue-600" />

                  <h2 className="small_card_title">Invest Payment Make Easy</h2>
                  <p className="small_card_des text-gray-300 w-[50%]">Lorem ipsum dolor sit amet consequuntur libero dolorum fuga similique molestiae officiis atque consequatur recusandae.</p>

                  </div>


                  <div className="border btn_outline_blue_sky_blue rounded-[12px] flex flex-col items-start justify-center sm:w-[20%] px-3 py-5 gap-3 font-semibold">

                  <MdOutlineContactPhone className="w-14 h-14 border rounded-full p-2 text-blue-500 border-blue-600" />

                  <h2 className="small_card_title">Invest Payment Make Easy</h2>
                  <p className="small_card_des text-gray-300 w-[50%]">Lorem ipsum dolor sit amet consequuntur libero dolorum fuga similique molestiae officiis atque consequatur recusandae.</p>

                  </div>

                  <div className="border btn_outline_blue_sky_blue rounded-[12px] flex flex-col items-start justify-center sm:w-[20%] px-3 py-5 gap-3 font-semibold">

                  <MdOutlineContactPhone className="w-14 h-14 border rounded-full p-2 text-blue-500 border-blue-600" />

                  <h2 className="small_card_title">Invest Payment Make Easy</h2>
                  <p className="small_card_des text-gray-300 w-[50%]">Lorem ipsum dolor sit amet consequuntur libero dolorum fuga similique molestiae officiis atque consequatur recusandae.</p>

                  </div>

                  <div className="border btn_outline_blue_sky_blue rounded-[12px] flex flex-col items-start justify-center sm:w-[20%] px-3 py-5 gap-3 font-semibold">

                  <MdOutlineContactPhone className="w-14 h-14 border rounded-full p-2 text-blue-500 border-blue-600" />

                  <h2 className="small_card_title">Invest Payment Make Easy</h2>
                  <p className="small_card_des text-gray-300 w-[50%]">Lorem ipsum dolor sit amet consequuntur libero dolorum fuga similique molestiae officiis atque consequatur recusandae.</p>

                  </div>


            </div>







		</div>
	);
};

export default ServicesSection;
