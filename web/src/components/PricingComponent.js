import {FiCheckCircle} from "react-icons/fi";
import usePricing from "../hooks/usePricing";
import Pricing from "../pages/Backend/Pricing";
import PriceComponent from "./PriceComponent";

export default function PricingComponent(){

    const {data,isLoading,isError}=usePricing()




    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto px-40">
                <div className="py-20">
                    <div className="py-10 flex items-center justify-center">
                        <span className="block text-xl text-blue-600 border-2 border-blue-600 px-7 py-1 rounded-full">
                            Pricing
                        </span>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-3 gap-5">
                            {
                                data && data.map(({id,title,description,price,isMain},i)=>(
                                   <PriceComponent key={i} isMain={isMain} price={price} description={description} id={id} title={title}/>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}