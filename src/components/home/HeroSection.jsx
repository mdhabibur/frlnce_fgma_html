import React from "react";
import heroImage from '../../assets/images/images_hero_sec.jfif'

const HeroSection = () => {
	return (
		<div className="hero max-h-full ">

			<div className="hero-content max-w-[100%] w-[100%] p-0 flex-col sm:flex-row ">

                <div className="sm:w-1/2  mr-6">
                    <img
                        src={heroImage}
                        className="w-full max-h-80 rounded-lg"
                    />

                </div>


				<div className=" flex flex-col items-start justify-center sm:w-1/2 px-4 ">
					<h3 className="my_h2">Invest Crypto Now, to 
                        <span className="gradient-text font-bold px-2">
                        Get Rich
                        </span> In the Future</h3>
					<p className="py-6 text-gray-300">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn_outline_blue_sky_blue">Get Started</button>
				</div>


			</div>
		</div>
	);
};

export default HeroSection;
