import React from "react";
import Founder from './founder2.jpg';



const Mission = () => {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-6">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={Founder}
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Mission</h1>
                        <p>
                            Our mission is to allow our users to strive to meet their weight goals. Get Fit Fast attempts <br />to provide a friendly and
                            helpful environment by encouraging fitness through a simple yet <br /> effective daily routine, ranging from meals to exercise.
                            Founded in 2011, CEO Oxford-San <br /> observed the amount of chungus people in the world, which inspired him to change that <br />
                            by instead, promoting healthy living. He also enjoys the benefits of being mega buff, such <br /> as looking very attractive and impressing
                            the opposite gender.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ml-24">
                <h4 className="ml-6">
                    CEO <br />
                </h4>
                <h5 className="ml-6 mt-2 text-gray-500">
                    Oxford-San
                </h5>
                <h6 className="ml-6">
                    The man with the orange juice.
                </h6>
            </div>
        </div>
    );
}


export default Mission


