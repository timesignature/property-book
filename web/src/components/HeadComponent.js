import NavBarComponent from "./NavBarComponent";
import {BsPlay} from "react-icons/bs";

export default function HeadComponent(){



    return (
        <div className='bg-indigo-600 font-pop'>
            <NavBarComponent/>
            <div className="container mx-auto px-40">
                <div className="py-20">
                    <div className="flex items-center gap-x-10">
                        <div className='w-1/2'>
                             <span className="block text-white text-5xl font-medium">
                                Corporate Website
                            </span>
                            <span className="block mt-5 text-indigo-100 leading-loose text-sm font-light">
                                We are digital agencies that help brands to achieve their business outcome.
                                We see technology as a tool to create amazing things
                            </span>


                            <div className="mt-10 flex items-center space-x-10">
                                <button className="bg-white text-indigo-600 tracking-wide uppercase font-bold text-sm px-7 py-3 rounded-sm">
                                    get started
                                </button>


                                <div className="flex items-center space-x-5">

                                    <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                                        <BsPlay size={30}/>
                                    </div>

                                    <span className="block text-white font-medium">Watch Intro</span>

                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className="w-full h-[500px] bg-indigo-500">
                                <img
                                    src={require('../assets/a.jpg')}
                                    className='w-full h-full object-cover'
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}