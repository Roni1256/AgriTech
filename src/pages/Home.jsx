import React from 'react'
import { Nav } from '../components/Nav'
import soil from '../../public/soil.jpg'
import second from '../../public/plant.png'
const Home = () => {
    const btnStyle="bg-green-950 text-white rounded-lg "
  return (
    <>
    <div className="h-screen w-full bg-green-100 text-slate-800">
        <Nav/>
        <div className="p-10 ">
            <button className=' object-fit w-[100px] h-[100px] rounded-lg text-white ' style={{"backgroundImage":`url(${soil})`}}>Soil</button>
        </div>

    </div>
    </>
  )
}

export default Home