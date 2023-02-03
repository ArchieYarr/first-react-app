import {React, useState, useEffect} from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import live1 from "../../../Images/BBCImg/liveSlider/LiveSliderImg1.png"
import live2 from "../../../Images/BBCImg/liveSlider/LiveSliderImg2.png"
import live3 from "../../../Images/BBCImg/liveSlider/LiveSliderImg3.png"


function LiveSlider(){
    //putting imports into array 
    const slides = [
        
        {
            url:live1
        },
        {
            url:live2
        },
        {
            url:live3
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

        <div className = "h-[57.875rem] w-[26.75rem]  m-auto relative group pr-px">

            <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}} className = "w-full h-full rounded-l-2xl bg-center bg-contain duration-500"></div>
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

export default LiveSlider