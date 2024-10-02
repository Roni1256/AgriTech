import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SoilReport } from "./SoilReport";
import axios from "axios";

const URL = "http://localhost:3000/cropdetail/";
const SoilInfo = () => {
  const inputStyle =
    "text-lg text-slate-500 focus:outline-none focus:text-slate-700 font-semibold focus:ring-2 focus:ring-green-900 px-4 py-2 rounded-md w-2/3 shadow-md shadow-green-800/50 ring-1 ring-green-600/50 capitalize";

  const soiltypes = [
      "alluvial",
      "black",
      "red",
      "laterite",
      "desert",
      "forestmountain",
      "marsh",
      "loamy",
    ],
    months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    seasonType = ["summer", "winter", "monsoon", "spring", "autumn"];

  const cropsDetails = [
    {
      name: "corn",
      soil: "loamy",
      season: "monsoon",
      sowing: ["june-july", "october-november"],
      harvesting: ["september-october", "january-february"],
      ph: "6.0-6.8",
      organic: [
        "compost ",
        "blood meal ",
        " bone meal",
        "fish meal",
        "lime",
        "gypsum",
        "straw",
        "biochar",
        "dolomitic limes",
        "calcitic lime",
      ],
      inorganic: [
        "superphosphate",
        "triplesuperphosphate",
        "monoammoniumphosphate",
        "diaammoniumphosphate",
        "calcium carbonate",
        "calcium sulphate",
      ],
      irrigation: "drip irrigation",
      diseases: [
        "stalk rots",
        "southern rust",
        "gray leaf spot",
        "eye spot",
        "seed broad",
        "seed-ling blight",
        "root rot",
      ],
    },
    {
      name: "groundnut",
      soil: "red",
      season: "monsoon",
      sowing: ["june-july", "october-november"],
      harvesting: ["september-october", "january-february"],
      ph: "6.0-6.5",
      organic: [
        "compost",
        "bone meal",
        "kelp meal",
        "green manures",
        "wood ash",
        "well rotted manures",
      ],
      inorganic: [
        "superphosphate",
        "triplesuperphosphate",
        "monoammoniumphosphate",
        "diaammoniumphosphate",
      ],
      irrigation: "drip irrigation",
      diseases: [
        "stalk rots",
        "southern rust",
        "gray leaf spot",
        "eye spot",
        "seed broad",
        "seed-ling blight",
        "root rot",
      ],
    },
  ];
  const navigate = useNavigate();
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [crops, setCrops] = useState([]);
  const [cropData, setCropdata] = useState([]);
  const [NoData,setNoData]=useState(false)

  const fetchCrops = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setCropdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCrops();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(true);
   const filtered= cropData.filter((crop) => {
      if (soilType === crop.soilType && season === crop.season) {
        if (!crops.find((inCrops) => crop.name === inCrops.name))
        {  setCrops([...crops, crop]);
            return crop
        }
      }
    });
    if(filtered.length<=0)
        setNoData(true)
  };

  return (
    <>
      <div className="flex flex-col  justify-center items-center gap-20 w-full">
        <form className="bg-gray-100 text-slate-700 rounded-lg shadow-md shadow-black/80 w-1/2 p-10 flex  flex-col gap-10 ">
          <h1 className="text-xl font-bold text-slate-500 w-full">
            Informations
          </h1>
          {/* Soil type */}
          <div className=" flex flex-col gap-1 ">
            <label
              htmlFor="soiltype"
              className="font-bold text-slate-600 w-full text-left"
            >
              Soil Type
            </label>
            <select
              name="soil"
              placeholder="Soil type"
              className={inputStyle}
              defaultValue={"Soil Type"}
              onChange={(e) => {
                setNoData(false)
                setCrops([])
                setSoilType(e.target.value)
            }}
            >
              {soiltypes.map((data, key) => {
                return (
                  <>
                    <option value={data} key={key} className="capitalize">
                      {data}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          {/* Season */}
          <div className=" flex flex-col gap-1 ">
            <label
              htmlFor="season"
              className="font-bold text-slate-600 w-full text-left"
            >
              Seasons
            </label>
            <select
              name="season"
              placeholder="Season"
              className={inputStyle}
              defaultValue={"Season"}
              onChange={(e) =>{
                setNoData(false)
                setCrops([])
                setSeason(e.target.value)
              } }
            >
              {seasonType.map((data, key) => {
                return (
                  <>
                    <option value={data} key={key} className=" capitalize">
                      {data}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          {NoData&&<><span className="text-red-600 font-semibold text-sm text-left">No Data Found!</span></>}
          {/* Submit btn */}
          <div className="flex w-full justify-center">
            <button
              className={
                "text-lg text-white bg-green-800 rounded-full min-w-[200px] p-3 shadow-md shadow-black/50 hover:bg-green-600 duration-200 ease-in-out"
              }
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        {/* Report */}
        {crops.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md shadow-black/50 w-full max-h-[500px] overflow-auto">
            <SoilReport cropData={crops} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SoilInfo;

{
  /* Crops */
}
{
  /* <div className=" flex flex-col gap-1 ">
                    <label htmlFor="crop" className='font-bold text-slate-600 w-full text-left'>Crops</label>
                    <div className="flex gap-2">
                        <select name="crop" placeholder="Crop type" className={inputStyle} defaultValue={"Soil Type"} onChange={handleCropType}>
                            {croptypes.map((data,key)=>{return <><option value={data} key={key} >{data}</option></>})}
                        </select>
                        <button className='p-2 bg-slate-900 text-white w-fit rounded-lg hover:bg-slate-700' onClick={handleAddCrop}>Add Crop</button>
                    </div>
                   { crops.length?
                        <div className="bg-white ring-2 ring-green-900 rounded-lg p-5 h-[100px] overflow-auto w-full mt-4 flex gap-3">
                            {crops.map((crop)=>{
                                return(<>
                                <div className=' rounded-3xl px-2 py-1  ring-1 bg-gray-50 ring-slate-600 flex gap-2 w-fit h-fit '>{crop}<button><IoCloseCircle size={20} /></button></div>
                                </>)
                            })}
                            
                        </div>
                        :null
                    }
                </div> */
}
