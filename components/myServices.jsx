import React from 'react'

const MyServices = () => {
  return (
    <div className="flex justify-between">
    <div className="flex flex-1 items-center space-x-2">
      <hr className="w-[100px] h-1 bg-black"/>
      <h3 className="font-bold text-nowrap text-lg">Our Amazing Feature</h3>
    </div>
    <div className="flex justify-between">
      <div className="border px-6 py-6 text-center">
        <h3 className="font-semibold text-lg">100% Satisfied Customers</h3>
        <p className="text-sm">There are multiple satisfied customers here</p>
      </div>
      <div className="border px-6 py-6 text-center">
        <h3 className="font-semibold text-lg">100% Satisfied Customers</h3>
        <p className="text-sm">There are multiple satisfied customers here</p>
      </div>
      <div className="border px-6 py-6 text-center">
        <h3 className="font-semibold text-lg">100% Satisfied Customers</h3>
        <p className="text-sm">There are multiple satisfied customers here</p>
      </div>
      
    </div>
    </div>
  )
}

export default MyServices