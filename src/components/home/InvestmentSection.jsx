import React from "react";
import heroImage from '../../assets/images/images_hero_sec.jfif'
import { TiTick } from "react-icons/ti";


const InvestmentSection = () => {
	return (
		<div className="hero max-h-full py-6">
			<div className="hero-content flex-col sm:flex-row gap-4 ">

                <div className=" flex flex-row items-center justify-center w-1/2 px-4">
					<img
						src={heroImage}
						className="w-full max-h-80 rounded-lg shadow-2xl"
					/>
				</div>


				<div className=" flex flex-col items-start justify-start w-1/2">
					<h3 className="my_h2">
						Super
						<span className="gradient-text font-bold px-2">Safe Guarding</span>
						For Crypto investments
					</h3>
					<p className="py-5 text-[13px]">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>

                    <div className=" flex flex-col gap-3 items-center">
                        {/* row 1  */}
                        <div className=" flex flex-col sm:flex-row gap-3 items-center justify-between">

                            <div className=" flex gap-3 items-center justify-center">

                            <TiTick className="w-6 h-6 bg-custom-button-bg-gradient rounded-full"/>
                            <p className="text-[13px]">
                            Lorem ipsum dolor, sit amet c Eveniet, dolores. 1</p>

                            </div>

                            <div className=" flex gap-3 items-center justify-center">

                            <TiTick className="w-6 h-6 bg-custom-button-bg-gradient rounded-full"/>
                            <p className="text-[13px]">
                            Lorem ipsum dolor, sit amet c Eveniet, dolores. 2</p>

                            </div>

                        

                        </div>

                        {/* row 2 */}
                        <div className=" flex flex-col sm:flex-row gap-3 items-center justify-between">


                        <div className=" flex gap-3 items-center justify-center">

                        <TiTick className="w-6 h-6 bg-custom-button-bg-gradient rounded-full"/>
                        <p className="text-[13px]">
                        Lorem ipsum dolor, sit amet c Eveniet, dolores. 1</p>

                        </div>


                        <div className=" flex gap-3 items-center justify-center">

                        <TiTick className="w-6 h-6 bg-custom-button-bg-gradient rounded-full"/>
                        <p className="text-[13px]">
                        Lorem ipsum dolor, sit amet c Eveniet, dolores. 2</p>

                        </div>


                        

                        </div>




                    </div>



				</div>



			</div>
		</div>
	);
};

export default InvestmentSection;
