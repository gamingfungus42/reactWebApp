import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import Product from "./Product";

let services = [
   {
      title: "Bronze",
      price: 20,
      description: "At $20 per month, the Bronze  Plan provides a simple yet effective option and allows access to Stretching Hell.",
      features: ["Stretching Hell"],
      feature: "Popular"
   },
   {
      title: "Gold",
      price: 50,
      description: "At $50 per month, the Gold Plan provides the highest value and allows access to all premium features.",
      features: ["Dieting,", " Gym Coach,", " Protein Packs,", " Yoga,", " Stretching Hell"],
      feature: "Best Value!",
      primaryButton: true
   },
   {
      title: "Platinum",
      price: 120,
      description: "At $120 per month, the Platinum Plan provides the highest value with additional packages and allows access to our most premium features.",
      features: ["Dieting,", " Gym Coach,", " Protein Packs,", " Yoga,", " Crossfit,", " Stretching Hell,"],
      feature: "Most Features!"
   },
]

const Services = () => {
   return (
      <Router> 
         <Switch>
            <Route path="/product">
               <Product />
            </Route>
            <Route path="/services">
               <Service />
            </Route>
         </Switch>
      </Router>
   );
}


function Service() {
   return (<div className="flex flex-row lg:max-w-3/4 justify-center mx-auto">
      {services.map((details) => (
         <div className="mt-16 max-w-sm mx-5 rounded-xl p-10 relative flex flex-col overflow-hidden border-yellow-500 border-2 h-full">

            <span class="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl uppercase ">{details.feature}</span>

            <h1>{details.title}</h1>
            <p class="price text-gray-800 font-bold">${details.price}/month</p>
            <p className="text-wrap text-gray-800 text-lg"> {details.description} </p>
            <p className="text-wrap text-gray-800 text-md"> Features:<p>{details.features}</p> </p>




            <Link to="/product" className="flex items-center mt-auto text-white bg-yellow-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded no-underline hover:no-underline">Purchase
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
            </Link>
            <p class="text-xs text-gray-500 mt-3">Checkout our services today!</p>

         </div >
      ))}
   </div>
   );
}

export default Services