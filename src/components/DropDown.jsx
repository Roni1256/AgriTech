import React,{useState} from 'react'

const inputStyle="text-lg text-slate-500 focus:outline-none focus:text-slate-700 font-semibold focus:ring-2 focus:ring-green-900 px-4 py-2 rounded-md w-full  ring-1 ring-green-600/50 capitalize ";
const DropDown = ({name,data,changehandler}) => {
  return (
    <>
    <select name={name}  className={inputStyle} onChange={changehandler}>
        {
            data.map((single,key)=>{
                return(
                    <>
                    <option value={single.value} key={key}>{single.text}</option>
                    </>
                )
            })
        }
    </select>
    </>
  )
}

export default DropDown