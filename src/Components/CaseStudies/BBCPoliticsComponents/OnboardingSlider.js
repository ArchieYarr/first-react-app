import {React, useState} from "react"
import Background1 from "../../../Images/BBCImg/BBCPoliticsLogo.PNG";
import Background2 from "../../../Images/BBCImg/Onboarding 1.PNG";
import Background3 from "../../../Images/BBCImg/Onboarding 2.PNG";
import Background4 from "../../../Images/BBCImg/Onboarding 3.PNG";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"


function OnboardingSlider(){
    
    const slides = [
        {
            url: "../../../Images/BBCImg/BBCPoliticsLogo.PNG"
        },
        {
            url:"../../../Images/BBCImg/Onboarding 1.PNG"
        },
        {
            url:"../../../Images/BBCImg/Onboarding 2.PNG"
        },
        {
            url:"../../../Images/BBCImg/Onboarding 3.PNG"
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    return(

        <div className = "max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">

            <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}} className = "w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
            {/* left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30}/>
            </div>

        </div>
    )
}

export default OnboardingSlider