import React from 'react';
import Link from 'next/link';
import { ArrowLeft} from "lucide-react";

export default function Contact(){
    return(
        <div className='w-screen max-w-full overflow-hidden min-h-screen md:h-screen pb-4 text-center bg-[#dfe0e2] text-black'>
            <div className='py-8 relative w-full h-32'>
                {/* Back Button */}
                <Link href="/dashboard" className="absolute top-7 left-8">
                    <ArrowLeft size={32} className="text-black" />
                </Link>
                {/* Janta Logo */}
                <img
                    className='absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 object-cover'
                    src='images/Logo Type_Mix1.png'
                    alt='Janta logo' 
                    style={{height:'15em', width:'15em'}} 
                />
            </div>
            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white py-8 mx-2 md:mx-auto md:w-1/3 px-4'>
                <form method='post'>
                    <div className='pb-4'>
                        <p className='text-4xl font-bold'>Contact us</p>
                    </div>
                    <div className='py-2 flex mx-auto mb-3 text-left'>
                        <div className='flex-1 md:ml-2 mr-2'>
                            <label className="block font-medium mb-2 text-2xl">
                                First Name
                                <span className="text-red-500"> *</span>
                            </label> 
                            <input 
                                type='text' 
                                id='firstname'
                                name='firstname' 
                                className='rounded-lg border-2 w-full p-2'
                                required
                            /> 
                        </div>
                        <div className='flex-1 ml-2 md:mr-2'>
                            <label className='block font-medium mb-2 text-2xl'> 
                                Last Name
                                <span className="text-red-500"> *</span>
                            </label> 
                            <input 
                                type='text' 
                                id='lastname' 
                                name='lastname' 
                                className='rounded-lg border-2 w-full p-2'
                                required
                            /> 
                        </div>
                    </div>
                    <div className='py-2 flex-1 md:ml-2 md:mr-2 mb-3'>
                        <label className="block font-medium mb-2 text-2xl text-left">
                            Email
                            <span className="text-red-500"> *</span> 
                        </label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            className='rounded-lg border-2 w-full p-2'
                            required
                        /> 
                    </div>
                    <div className='py-2 flex-1 md:ml-2 md:mr-2'>
                        <label className="block font-medium mb-2 text-2xl text-left">
                            Message
                            <span className="text-red-500"> *</span> 
                        </label> 
                        <textarea 
                            id='message'
                            placeholder='Draft a message...'
                            name='message'
                            className='pl-1 pt-1 rounded-lg border-2 w-full'
                            style = {{height: '7em'}}
                            required
                        />
                    </div>
                    <div className='text-left md:ml-3 md:mr-2 mb-3'>
                        <input 
                            type='radio' 
                            id='privacy-policy' 
                            name='privacy-policy'
                            className='rounded-lg p-2'
                            required
                        /> 
                        <label className="ml-2 mb-2 text-md">
                            {/* I accept the <a href='/' className='hover:underline'>privacy policy</a> of Janta Power */}
                            <span className="text-red-500"> *</span> 
                        </label> 
                    </div>
                    <div className='flex justify-end mx-5 mt-4'>
                        <button 
                            type="submit" 
                            className="rounded-lg border border-black bg-orange-400 p-1 font-Roboto flex items-center justify-center cursor-pointer hover:brightness-90"
                        >
                            Submit
                            <img src="/images/right-arrow.png" alt="Submit" style={{height:'1em'}}/>
                        </button>
                    </div>
                </form>            
            </div>
        </div>
    )
}
