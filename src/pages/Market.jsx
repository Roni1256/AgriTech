import { log } from '@tensorflow/tfjs'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { MarketCard } from '../components/MarketCard'


const URL='https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json'

const Market = () => {
  const [marketData,setMarketData]=useState([])
  const [record,setRecords]=useState([])
  const [search,setSearch]=useState("")
  const fetchMarketDetails=async()=>{
    await axios.get(URL)
    .then((res)=>{
      setMarketData(res.data)
      setRecords(res.data.records)
      
    })
    .catch((error)=>{console.log(error.message);
    })
  }
  useEffect(()=>{
    fetchMarketDetails();
  },[])

  const handleSearch=(e)=>{
    setSearch(e.target.value);

  }
  return (
    <>
    <div className="bg-white shadow-lg shadow-black  py-5 text-slate-700 ">
      <h1 className='text-2xl text-center font-bold '>{marketData.title}</h1>
    </div>
    <div className=" bg-teal-100 text-slate-900 flex flex-col gap-10 h-screen p-10 ">

      <div className="bg-slate-100 rounded-lg shadow-lg shadow-black/70 p-10  h-full flex flex-col items-center">
      {/* <input type="text" className='bg-white ring-2 ring-green-600 focus:outline-none text-lg font-bold  p-3 min-w-[600px]  rounded-md shadow-lg shadow-black/70  ' placeholder='Search for Commodity' onChange={handleSearch}/> */}
      <h1 className='text-lg text-slate-500 font-bold  text-left w-full'>Filter</h1>
      <div className="w-full flex flex-row gap-5 ">
        <div className="flex flex-col text-lg text-slate-600 gap-3 font-bold">
          <label htmlFor="">Commodity</label>
          <input type="text" className='text-xl font-bold p-2 focus:outline-none focus:ring-2 focus:ring-slate-800 ring-1 ring-slate-600 rounded-lg ' placeholder='Enter commodity name' />
        </div>
      </div>
      <div className=' overflow-auto grid grid-cols-4 gap-5 h-full p-10 '>
        {
          record.filter((rec)=>{
            return search===""?rec:rec.commodity.toLowerCase().includes(search.toLowerCase())
          }).map((rec)=>{
            return <>
            <MarketCard commodity={rec.commodity} market={rec.market} minprice={rec.min_price} maxprice={rec.max_price} date={rec.arrival_date} state={rec.state} district={rec.district} grade={rec.grade}/>
            </>
          })
        }
      </div>
      </div>

    </div>
    </>
  )
}

export default Market