import {FiCheckCircle} from "react-icons/fi";

export default function PriceComponent({price,description,title,id,isMain}){
    return (
        <div className={`bg-white px-5 py-12 ${isMain === 1 ? 'shadow-xl' : ''}`}>
            <div className="flex items-center justify-center">
                <span className={`text-sm px-7 py-2 rounded-full border-2 border-blue-600 ${isMain===1 ? 'bg-indigo-600 text-white' : 'text-blue-600'}`}>
                    {title}
                </span>
            </div>

            <div className="mt-5">
                <span className="block text-base leading-loose text-center text-gray-500">
                   {description}
                </span>
            </div>

            <div className="flex items-end justify-center mt-10">
                <div className="flex items-start">
                    <span className='block text-xs'>$</span>
                    <span className="block text-6xl font-medium">{price}</span>
                </div>
                <span className="block text-xs">/Mo</span>
            </div>


            <div className="mt-10 flex items-center justify-center">
                <button className={`h-12 px-10 rounded border border-blue-600 uppercase font-bold ${isMain===1 ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>
                    Start free trial
                </button>
            </div>


            <div className="mt-10 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                    <FiCheckCircle size={15}/>
                    <span className="block text-sm text-gray-500">
                        Crus justo odio
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <FiCheckCircle size={15}/>
                    <span className="block text-sm text-gray-500">
                        Dapibus ac facilisis in
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <FiCheckCircle size={15}/>
                    <span className="block text-sm text-gray-500">
                        Morbi leo risus
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <FiCheckCircle size={15}/>
                    <span className="block text-sm text-gray-500">
                        Excepteur sint occaesit velit
                    </span>
                </div>
            </div>
        </div>
    )
}