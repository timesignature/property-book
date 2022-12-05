import {Link, useNavigate} from "react-router-dom";
import InputComponent from "../components/InputComponent";
import {useState} from "react";
import {useMutation} from "react-query";
import http from "../http";
import { toast } from 'react-toastify';

export default function Register(){

    const [errors,setErrors]=useState({})

    const [state,setState]=useState({
        email:'',
        password:'',
        confirm_password:'',
        name:''
    })

    const handleChange=(e)=>{
        const data={[e.target.name]:e.target.value}
        setState({...state,...data})
    }


    const navigate=useNavigate()

    const mutation=useMutation(values=>http.post(`/register`,values).then(res=>res.data),{
        onSuccess:async(d)=>{
            setErrors({})
            navigate('/login')
            toast.success('user has been successfully created')
        },
        onError:(d)=>{
            toast.warn('something went wrong')
            setErrors(d.response.data.errors || {})
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
                                <span className="block text-xl font-medium">Sign up</span>
                            </div>
                            <span className="block text-sm text-gray-500 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, deleniti iste molestias natus nemo numquam.</span>
                        </div>

                        <div className='mt-12'>
                            <InputComponent
                                title={'Username'}
                                name={'name'}
                                value={state.name}
                                error={errors.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='mt-5'>
                            <InputComponent

                                type={'email'}
                                title={'Email'}
                                name={'email'}
                                value={state.email}
                                error={errors.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='mt-5 grid grid-cols-2 gap-5'>
                            <div>
                                <InputComponent
                                    type={'password'}
                                    title={'Password'}
                                    name={'password'}
                                    value={state.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                />
                            </div>
                            <div>
                                <InputComponent
                                    value={state.confirm_password}
                                    name={'confirm_password'}
                                    error={errors.confirm_password}
                                    title={'Confirm Password'}
                                    onChange={handleChange}
                                    type={'password'}
                                />
                            </div>
                        </div>



                        <div className="mt-5">
                            <button onClick={_submit} className="px-5 py-3 text-sm bg-indigo-600 text-white rounded">
                                {
                                    mutation.isLoading ? '...Signing up' : 'Sign up'
                                }
                            </button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Link to={'/login'}>
                            <span className="block">Already have an account? <span className='text-indigo-600'>Sign in</span></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}