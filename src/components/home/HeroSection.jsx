import React from "react";
import heroImage from '../../assets/images/images_hero_sec.jfif'

const HeroSection = () => {
	return (
		<div className="hero max-h-screen border">
			<div className="hero-content flex-col sm:flex-row gap-4">

                <div className=" flex flex-row items-center justify-center w-1/2 px-4">
                    <img
                        src={heroImage}
                        className="w-full max-h-80 rounded-lg shadow-2xl"
                    />

                </div>


				<div className=" flex flex-col items-start justify-center w-1/2 px-4">
					<h1 className="text-5xl font-semibold">Invest Crypto Now, to 
                        <span className="text-blue-700 px-2">
                        Get Rich
                        </span> In the Future</h1>
					<p className="py-6">
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
