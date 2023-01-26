import {React, useState, useEffect} from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import bBC from "../../../Images/BBCImg/BBCPoliticsLogo.PNG";
import onboarding1 from "../../../Images/BBCImg/Onboarding1.PNG"
import onboarding2 from "../../../Images/BBCImg/Onboarding2.PNG"
import onboarding3 from "../../../Images/BBCImg/Onboarding3.PNG"


function OnboardingSlider(){
    //putting imports into array 
    const slides = [
        
        {
            url:onboarding1
        },
        {
            url:onboarding2
        },
        {
            url:onboarding3
        },

    ];

    //allow the slides to be tracked for use in switching between slides in return()
    const [currentIndex, setCurrentIndex] = useState(0);

    //turn on or off autoscroll and set the interval time to x milliseconds
    const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  // Functions for moving between slides or indexes 
    function prevSlide(){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);


    }

    function nextSlide(){
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ?0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }


    //functions for autoscroll functionality
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
      useEffect(() => {
        setCurrentIndex(0);
      }, []);
    
      useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [currentIndex]);
    


    return(

        <div className = " h-96 w-96 m-auto relative group pr-px">

            <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}} className = "inset-0 w-full h-full rounded-l-2xl bg-center  duration-500"></div>
            {/* left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick = {prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick = {nextSlide} size={30}/>
            </div>

        </div>
    )
}

export default OnboardingSlider