import {FiRefreshCcw, FiTablet} from "react-icons/fi";
import {BsBootstrapFill, BsCodeSlash, BsSpeedometer2} from "react-icons/bs";
import {RiStackLine} from "react-icons/ri";
import useServices from "../hooks/useServices";


export default function ServiceComponent(){


    const {data}=useServices()


    const Icon=({i})=>{
        if(i===0){
            return (
                <FiTablet size={30}/>
            )
        }

        if(i===1){
            return (
                <BsBootstrapFill size={30}/>
            )
        }


        if(i===2){
            return (
                <BsCodeSlash size={30}/>
            )
        }
        if(i===3){
            return (
                <BsSpeedometer2 size={30}/>
            )
        }

        if(i===4){
            return (
                <RiStackLine size={30}/>
            )
        }

        if(i===5){
            return (
                <FiRefreshCcw size={30}/>
            )
        }
    }


    return (
        <div className='bg-white'>
            <div className="py-20">
                <div className="container mx-auto px-40">

                    <div className="py-10 flex items-center justify-center">
                        <span className="block text-xl text-blue-600 border-2 border-blue-600 px-7 py-1 rounded-full">
                            Services
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-10">


                        {
                            data && data.map((d,i)=>(
                                <div key={i} className='border border-gray-100 rounded p-8'>


                                    <div className="w-20 h-20 text-blue-600 rounded-full border-2 border-blue-600 flex items-center justify-center">
                                        <Icon i={i}/>
                                    </div>


                                    <div className="mt-5">
                                        <span className="block text-xl font-medium">{d.title}</span>
                                        <span className="text-sm leading-loose block mt-3">
                                            {d.description}
                                        </span>
                                    </div>

                                </div>
                            ))
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}