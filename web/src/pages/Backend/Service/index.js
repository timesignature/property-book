import useServices from "../../../hooks/useServices";
import ServiceComponent from "./ServiceComponent";

export default function Service(){


    const {data}=useServices()


    return (
        <div className='py-20'>
            <div>

                <span className="block text-3xl font-light">Services</span>



                <div className="mt-20 grid grid-cols-3 gap-5">

                    {
                        data && data.map(({title,description,id},i)=>(
                            <ServiceComponent key={i} title={title} description={description} id={id}/>
                        ))
                    }

                </div>




            </div>
        </div>
    )
}