import React from "react";
import HeroSection from "../components/home/HeroSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ServicesSection from "../components/home/ServicesSection";
import DealsSection from "../components/home/DealsSection";
import InvestmentSection from "../components/home/InvestmentSection";
import StartInvestSection from "../components/home/StartInvestSection";
import ClientReviewSection from "../components/home/ClientReviewSection";

const Home = () => {
	return (
		<>
        {/* hero sections  */}
			<div
				id="heroSection"
				className="heroSection bg-custom-gradient-ltr section-main-layout text-white "
			>
                <HeroSection />
				
			</div>

            {/* experience sections  */}
			<div
				id="experienceSection"
				className="experienceSection bg-custom-gradient-rtl section-main-layout text-white "
			>
                <ExperienceSection />
				
			</div>


           {/* services sections  */}
			<div
				id="servicesSection"
				className="servicesSection bg-custom-gradient-ltr section-main-layout text-white "
			>
                <ServicesSection />
				
			</div>


           {/* Deals sections  */}
			<div
				id="dealsSection"
				className="dealsSection bg-custom-gradient-rtl section-main-layout text-white "
			>
                <DealsSection />
				
			</div>


           {/* Investment sections  */}
			<div
				id="investSection"
				className="investSection bg-custom-gradient-ltr section-main-layout text-white "
			>
                <InvestmentSection />
				
			</div>



			{/*client review sections  */}

			<div
			id="clientReviewSection"
			className="clientReviewSection bg-custom-gradient-rtl section-main-layout text-white "
			>
                <ClientReviewSection />
				
			</div>



           {/*start Investment sections  */}
		   <div
				id="startInvestSection"
				className="startInvestSection bg-custom-gradient-ltr section-main-layout text-white "
			>
                <StartInvestSection />
				
			</div>







            



		</>
	);
};

export default Home;
