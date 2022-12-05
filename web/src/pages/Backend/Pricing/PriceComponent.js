import {useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import http from "../../../http";
import { toast } from 'react-toastify';

export default function PriceComponent({title,description,price,id}){


    const [errors,setErrors]=useState({})

    const [state,setState]=useState({
        title,
        description,
        price

    })

    const handleChange=(e)=>{
        const data={[e.target.name]:e.target.value}
        setState({...state,...data})
    }


    const clientQuery=useQueryClient()

    const mutation=useMutation(values=>http.put(`/products/${id}`,values).then(res=>res.data),{
        onSuccess:async(d)=>{
            await clientQuery.invalidateQueries(['pricing'])
            setErrors({})
            toast.success('updated successfully')
        },
        onError:(d)=>{
            toast.warning('something went wrong')
          setErrors(d.response.data.errors || {})
        }
    })


    const _submit=()=>{
        mutation.mutate(state)
    }


    return (
        <div className='bg-zinc-50 p-5'>
            <div className="flex items-center space-x-3">
                <div className="flex-1">
                    <input
                        type="text"
                        name={'title'}
                        value={state.title}
                        onChange={handleChange}
                        className={`w-full p-2 focus:outline-none bg-transparent text-3xl resize-none appearance-none ${errors.title ? 'border border-red-200' : ''}`}
                    />
                </div>
                <div>
                    <span>$</span>
                    <input
                        type="text"
                        name={'price'}
                        value={state.price}
                        onChange={handleChange}
                        className={`w-10 px-2 focus:outline-none text-sm bg-transparent ${errors.price ? 'border border-red-200' : ''}`}
                    />
                </div>
            </div>

            <div className="mt-5">
                <textarea
                    name={'description'}
                    value={state.description}
                    rows={9}
                    onChange={handleChange}
                    className={`w-full p-2 focus:outline-none bg-transparent text-sm resize-none appearance-none ${errors.description ? 'border border-red-200' : ''}`}
                />
            </div>

            <div className="mt-5 flex justify-end">
                <button onClick={_submit} className="px-5 py-3 text-sm focus:outline-none bg-zinc-100">{
                    mutation.isLoading ? '...Saving Changes' : 'Save Changes'
                }</button>
            </div>
        </div>
    )
}