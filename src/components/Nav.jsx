import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export const Nav = () => {
    const linkStyle="hover:font-bold hover:scale-[1.1] hover:text-yellow-500 focus:text-yellow-700 focus:font-bold duration-300 ease-in-out cursor-pointer "
  return (
    <>
    <div className="bg-green-900 shadow-md shadow-black/80 text-white   flex justify-between w-full px-10 py-5 text-lg z-30">
        <Link to={"/"} className={`w-full text-xl font-bold cursor-pointer`}>Argi Technology</Link>
        <div className=" flex justify-around text-right w-full font-normal">
            <Link to={"/cropsdetails"} className={linkStyle}>Plants Informations</Link>
            <Link to={"/allcrops"} className={linkStyle}>Show All Crops</Link>
            <Link to={"/market"} className={linkStyle}>Market Status</Link>
            {/* <Link to={"/news"} className={linkStyle}>News&Blogs</Link>             */}
            {/* <Link to={"/about"} className={linkStyle}>About</Link> */}
        </div>
        <Outlet/>
    </div>
    </>
  )
}
