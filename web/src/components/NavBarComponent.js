import Scroll from 'react-scroll'
export default function NavBarComponent(){


    let Link=Scroll.Link





    return (
        <div className="container mx-auto px-40 bg-indigo-600 sticky top-0">
            <div className="flex items-center space-x-40 py-10">
                <Link to={'landing'} className='flex items-center cursor-pointer space-x-5'>
                    <div className="flex items-center space-x-1 transform -rotate-45">
                        <div className="w-2 h-2 bg-transparent rotate-90 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                        <div className="w-5 h-9 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-transparent -rotate-90 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                    </div>
                    <span className="block text-3xl font-medium text-white">
                            Business
                        </span>
                </Link>
                <div className='flex items-center space-x-10'>
                    <Link to={'landing'} spy={true} smooth={true} duration={500} className="block cursor-pointer text-white text-base font-light hover:text-indigo-300">Home</Link>
                    <Link to={'service'} spy={true} smooth={true} duration={500} className="block cursor-pointer text-indigo-200 text-base font-light hover:text-indigo-300">Services</Link>
                    <Link to={'pricing'} spy={true} smooth={true} duration={500} className="block cursor-pointer text-indigo-200 text-base font-light hover:text-indigo-300">Pricing</Link>
                </div>
            </div>
        </div>
    )
}