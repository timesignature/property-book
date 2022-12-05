import {HiViewGrid} from "react-icons/hi";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {TOKEN_LABEL} from "../config";

export default function AppLayout(){

    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem(TOKEN_LABEL)
        navigate('/login')
    }



    return (
        <div className="min-h-screen bg-white font-pop">
            <div className='bg-indigo-700 text-white py-3 sticky top-0'>
                <div className="container mx-auto">
                   <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-20">
                           <div className='flex items-center space-x-2'>
                               <HiViewGrid size={30}/>
                               <span className="block text-xl font-light">Dash-b</span>
                           </div>
                           <div className="flex items-center space-x-5">
                               <Link to={'/about'}>
                                   <span className="block text-xs hover:text-indigo-200">About</span>
                               </Link>
                               <Link to={'/services'}>
                                   <span className="block text-xs hover:text-indigo-200">Services</span>
                               </Link>
                               <Link to={'/pricing'}>
                                   <span className="block text-xs hover:text-indigo-200">Pricing</span>
                               </Link>
                           </div>
                       </div>

                       <span onClick={logout} className="block text-xs cursor-pointer">Log-out</span>
                   </div>
                </div>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </div>
    )
}