import React from 'react'

export const SelectInput = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <div className="relative z-0 w-full group">
          <select
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue=""
          >
            <option disabled value="">
              Choose a category
            </option>
            <option>Technology</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">
            Category
          </label>
        </div>
      </div>
    </div>
  )
}
