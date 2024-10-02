import React from 'react'

export const MarketCard = ({commodity,market,minprice,maxprice,date,state,district,grade}) => {
  return (
    <>
    <div className=" bg-white rounded-lg shadow-md shadow-black/80  w-full p-3 grid grid-cols-2  gap-3">
    {/* <img src="" alt="" className=' row-span-2 ring-1 ring-slate-900 rounded-md'/> */}
    <div className="flex flex-col gap-2 p-2  w-full">
        <span className='font-bold text-xl w-full text-center mt-3 '>{commodity}</span>
        <span className='font-bold text-center '>{grade}</span>
    </div>
    <div className="flex flex-col gap-2 p-2  w-full">
        <label htmlFor="commodity" className='text-md font-semibold text-red-600 w-full '>Market</label>
        <span className='font-bold text-lg w-full'>{market}</span>
    </div>
    <div className="flex flex-col gap-2 p-2  w-full">
        <label htmlFor="commodity" className='text-md font-semibold text-red-500 w-full '>State</label>
        <span className='font-bold text-lg w-full'>{state}</span>
    </div>
    <div className="flex flex-col gap-2 p-2  w-full">
        <label htmlFor="commodity" className='text-md font-semibold text-red-500 w-full '>District</label>
        <span className='font-bold text-lg w-full'>{district}</span>
    </div>
    <div className="flex flex-col gap-2 p-2  w-full">
        <label htmlFor="commodity" className='text-md font-semibold text-red-500 w-full '>Price</label>
        <span className='font-bold text-lg w-full'>₹{minprice}-{maxprice}</span>
    </div>
    <div className="flex flex-col gap-2 p-2  w-full">
        <label htmlFor="commodity" className='text-md font-semibold text-red-500 w-full '>Arrival Date</label>
        <span className='font-bold text-lg w-full'>{date}</span>
    </div>
    </div>
    </>
  )
}
