import React from "react";
import HeroSection from "../components/home/HeroSection";
import ExperienceSection from "../components/home/ExperienceSection";

const Home = () => {
	return (
		<>
        {/* hero sections  */}
			<div
				id="heroSection"
				className="heroSection bg-custom-gradient-ltr section-main-layout text-white"
			>
                <HeroSection />
				
			</div>

            {/* experience sections  */}
			<div
				id="experienceSection"
				className="experienceSection bg-custom-gradient-rtl section-main-layout text-white"
			>
                <ExperienceSection />
				
			</div>



		</>
	);
};

export default Home;
