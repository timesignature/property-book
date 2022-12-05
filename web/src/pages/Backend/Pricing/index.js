import PriceComponent from "./PriceComponent";
import usePricing from "../../../hooks/usePricing";

export default function Pricing(){


    const {data}=usePricing()


    return (
        <div className='py-20'>
            <div>

                <span className="block text-3xl font-light">Pricing</span>



               <div className="mt-20 grid grid-cols-3 gap-5">

                   {
                       data && data.map(({title,description,price,id},i)=>(
                           <PriceComponent key={i} title={title} price={price} description={description} id={id}/>
                       ))
                   }

               </div>




            </div>
        </div>
    )
}