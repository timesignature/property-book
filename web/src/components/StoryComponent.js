import useStory from "../hooks/useStory";
import {url} from "../config";
import {useState} from "react";

export default function StoryComponent(){



    const [selectedIndex,setSelectedIndex]=useState(0)
    const {data}=useStory()


    return (
        <div>
            {
                data && (
                    <div className='bg-gray-50 font-pop'>
                        <div className="container mx-auto px-40 py-20">
                            <div className="flex items-center gap-x-10">

                                <div className="w-1/2">
                                    <div className="w-full bg-gray-100 h-[600px]">
                                        <img
                                            src={`${url}/app/stories/${data[selectedIndex].image}`}
                                            className='w-full h-full object-cover'
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <span className="block text-xl uppercase font-medium"> <span className="text-indigo-600">&mdash;</span> Our Story</span>
                                    <span className="block text-4xl font-bold mt-3">
                            Our teams comes with the knowledge and experience
                        </span>

                                    <div className="mt-10">
                                        <div className="bg-zinc-100 flex items-center space-x-5 p-3">
                                            {
                                                data.map((d,i)=>(
                                                    <button key={i} onClick={()=>setSelectedIndex(i)}  className={`px-4 py-3 text-sm rounded font-medium transition-all duration-150 ease-in-out ${i===selectedIndex ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'}`}>
                                                        {d.title}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>


                                    <div className="mt-10">
                                        <div
                                            dangerouslySetInnerHTML={{__html:data[selectedIndex].description}}
                                            className="block text-sm text-gray-600 leading-loose">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}