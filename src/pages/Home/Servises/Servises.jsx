import { useEffect } from "react";
import { useState } from "react";
import ServiseCard from "./ServiseCard";


const Servises = () => {
const [servises, setservises] = useState([]);
   useEffect (()=>{
     fetch('Servises.json')
     .then (res => res.json()) 
     .then  (data => setservises(data));           
   }, [])  
                    
 return (
 <div className="mt-6">
     <div className="text-center">
     <h3 className="text-2xl text-orange-500 font-bold">Servises</h3>
   <h2 className="text-5xl mt-2 font-bold">Our Servises Area</h2>
   <p className="mt-5">the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which do not look even slightly believable. </p>             
     </div>
     <div className="grid grid-cols-3 gap-6">
      {
    servises.map(servises =><ServiseCard
    key={servises. _id}
    servise={servises}
    ></ServiseCard>)             
      }           
     </div>
 </div>
 );
};

export default Servises;