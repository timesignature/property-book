import {Link, useNavigate} from "react-router-dom";
import InputComponent from "../components/InputComponent";
import {useState} from "react";
import {useMutation} from "react-query";
import http from "../http";
import {TOKEN_LABEL} from "../config";

import { toast } from 'react-toastify';

export default function Login(){


    const [state,setState]=useState({
        email:'',
        password:'',
    })

    const [errors,setErrors]=useState({})

    const handleChange=(e)=>{
        return setState(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }

    // const notify = () => toast("Wow so easy !");




    const navigate=useNavigate()

    const mutation=useMutation(values=>http.post('/login',values).then(res=>res.data),{
        onSuccess:async(data)=>{
            setErrors({})
            localStorage.setItem(TOKEN_LABEL,data)
            toast.success("User has been successfully logged in")
            navigate('/pricing')

        },
        onError:(e)=>{
            toast.warn("Something went wrong")
            setErrors(e.response.data.errors || {})
        }
    })


    const _submit=()=>{
        mutation.mutate(state)
    }


    return (
        <div className='min-h-screen bg-zinc-100'>

            <div className="py-20 flex flex-col items-center justify-center">
                <div className="w-1/3">
                    <div className="bg-white w-full p-10">

                        <div>
                            <div className="flex items-center space-x-5">
                                <div className="w-12 h-12 rounded-full text-orange-900 bg-orange-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <span className="block text-xl font-medium">Login</span>
                            </div>
                            <span className="block text-sm text-gray-500 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, deleniti iste molestias natus nemo numquam.</span>
                        </div>



                        <div className='mt-12'>
                            <InputComponent

                                type={'email'}
                                title={'Email'}
                                name={'email'}
                                value={state.email}
                                error={errors.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='mt-5'>
                                <InputComponent
                                    type={'password'}
                                    title={'Password'}
                                    name={'password'}
                                    value={state.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                />
                        </div>



                        <div className="mt-5">
                            <button onClick={_submit} className="px-5 py-3 text-sm bg-indigo-600 text-white rounded">
                                {
                                    mutation.isLoading ? '...Logging in' : 'Login'
                                }
                            </button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Link to={'/register'}>
                            <span className="block">Dont have an account? <span className='text-indigo-600'>Sign in</span></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}