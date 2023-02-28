import React from 'react'
import { preview } from '../assets'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button type='button' onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">
                        Surprise Me
                    </button>
                )}
            </div>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3' />

            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64
            flex justify-center items-center'>
            </div>
        </div>
    )
}

export default FormField
