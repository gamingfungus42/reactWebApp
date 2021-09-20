import React from "react";
import "./services.css";

let services = [
   {
      title: "Bronze",
      price: 20,
      description: "At $120 per month, the Bronze  Plan provides the cheapest and allows access to our amazing features",
      features: ["Dieting", "Gym Coach", "Stretching Hell"],
      feature: "Popular"
   },
   {
      title: "Gold",
      price: 50,
      description: "At $120 per month, the Platinum Plan provides the value and allows access to our most premium features",
      features: ["dietieng", "gym coach", "protein packs", "yoga"],
      feature: "Best Value!",
      primaryButton: true
   },
   {
      title: "Platinum",
      price: 120,
      description: "At $120 per month, the Platinum Plan provides the most value and allows access to our most premium features",
      features: ["dietieng", "gym coach", "protein packs", "yoga", "stretching hell"],
      feature: "Most Features!"
   },
]

const Services = () => {
   return (
      <div className="flex flex-row lg:max-w-3/4 justify-center  mx-auto">
         {services.map((details) => (
            <div className="mt-20 max-w-sm mx-5 rounded-xl p-10 relative flex flex-col overflow-hidden border-yellow-500 border-2 h-full">

               <span class="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl uppercase ">{details.feature}</span>

               <h1>{details.title}</h1>
               <p class="price text-gray-800 font-bold">${details.price}/month</p>
               <p className="text-wrap text-gray-800 text-lg"> {details.description} </p>


               {/* button go to google.com */}
                  

               <a href="/product" class="flex items-center mt-auto text-white bg-yellow-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded">Purchase
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                     </svg>
               </a>
               <p class="text-xs text-gray-500 mt-3">Checkout our services today!</p>

            </div >
         ))}

      </div>
   )
}

export default Services