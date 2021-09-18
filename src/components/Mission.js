import React from "react";
import founder2 from './founder2.jpg';
import founder3 from './founder3.jpg';
import founder4 from './founder4.jpg';
import founder5 from './founder5.jpg';


const Mission = () => {
    return(
<div>
        <h1 className="text-left, pl-3 pt-4">The Mission</h1>
        <p className="pl-3 md:container md:mx-auto break-words text-left flex items-center">
        Our mission is to allow our users to strive to meet their weight goals. Get Fit Fast attempts to provide a friendly and <br />
        helpful environment by encouraging fitness through a simple yet effective daily routine, ranging from meals to exercise. <br />
        Founded in 2011, CEO Oxford-San observed the amount of chungus people in the world, which inspired him to change that      <br />
        and promote healthy living. He also enjoys the benefits of being mega buff, such as looking very attractive and impressing <br />
        the opposite gender.
        </p>
    <h2 className="pl-3 pr-3">
        Our Founders:<br />
    </h2>
    <br />
        <div className="pl-6 pr-8 flex">
        <img src={founder2} alt="f2" className= "w-3/12 l-3/12"></img>
        <img src={founder3} alt="f3" className= "w-3/12 l-3/12 ml-1"></img>
        <img src={founder4} alt="f4" className=" w-3/12 l-3/12 ml-1"></img>
        <img src={founder5} alt="f5" className=" w-3/12 l-3/12 ml-1"></img>
        </div>

        <div className="block">
        <h4 className="pl-6 pt-3">
        CEO <br />
        </h4>
        <h5 className="pl-6 pt-2 text-gray-500">
        Imposter-San   
        </h5>
        <h6 className="pl-6">
        The man with the orange juice. 
        </h6>
        

        <h4 className="pl-6 pt-3">
        Co-Founder <br />
        </h4>
        <h5 className="pl-6 pt-2 text-gray-500">
        Ye   
        </h5>
        <h6 className="pl-6">
        The man who sings. 
        </h6>
        </div>
</div>
    
    );
}

export default Mission