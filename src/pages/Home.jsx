import React from "react";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
	return (
		<>
        {/* hero sections  */}
			<div
				id="heroSection"
				className="heroSection bg-custom-gradient-rtl section-main-layout text-white"
			>
                <HeroSection />
				
			</div>
		</>
	);
};

export default Home;
