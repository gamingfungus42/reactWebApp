import React from "react";
import "./services.css";

let services = [
   {
      title: "Bronze",
      price: 20,
      description: "At $120 per month, the Bronze  Plan provides the cheapest and allows access to our amazing features",
      features: ["Dieting", "Gym Coach", "Stretching Hell"]
   },
   {
      title: "Gold",
      price: 50,
      description: "At $120 per month, the Platinum Plan provides the value and allows access to our most premium features",
      features: ["dietieng", "gym coach", "protein packs", "yoga"]
   },
   {
      title: "Platinum",
      price: 120,
      description: "At $120 per month, the Platinum Plan provides the most value and allows access to our most premium features",
      features: ["dietieng", "gym coach", "protein packs", "yoga", "stretching hell"]
   },

]

const Services = () => {
   return (
      <div id="cardsline" className="flex flex-row flex-wrap w">

         {services.map((details) => {
            <h1>teststteststteststteststteststteststteststteststteststteststteststteststteststtestst</h1>
         })}
         <div className="mt-20" id="card2">
            <h1>Bronze</h1>
            <p class="price">$20/month</p>
            <p>At $20 per month, the Bronze Plan <br /> provides access to a simple yet effective <br /> plan:
               <br /> Stretching Hell</p>
            <p><button>Purchase</button></p>
         </div>
      </div>
   )
}

function Card({ details }) {

}

export default Services