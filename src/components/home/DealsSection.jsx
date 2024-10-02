import React from 'react'
import heroImage from '../../assets/images/images_hero_sec.jfif'

const DealsSection = () => {
  return (
    <div className="hero max-h-full py-6 ">
    <div className="hero-content max-w-[100%] w-[100%] p-0 flex-col sm:flex-row gap-4 ">


        <div className=" flex flex-col items-start justify-start sm:w-1/2 mr-6">
            <h3 className="my_h2">We 
                <span className="gradient-text font-bold px-2">
                Work Hard
                </span> 
                You Get the 
                <span className="gradient-text font-bold px-2">
                Best Deals
                </span> 
                </h3>
            <p className="py-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
            </p>

            <p className="pb-3">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
            </p>


        </div>

        <div className=" flex flex-row items-center justify-center sm:w-1/2">
            <img
                src={heroImage}
                className="w-full max-h-80 rounded-lg shadow-2xl"
            />

        </div>


    </div>
</div>
  )
}

export default DealsSection