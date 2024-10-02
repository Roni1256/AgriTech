import React, { useState } from "react";
import axios from "axios";
import DropDown from "../components/DropDown";

const URL='http://localhost:3000/cropdetail/'
const inputStyle="text-lg text-slate-500 focus:outline-none focus:text-slate-700 font-semibold focus:ring-2 focus:ring-green-900 px-4 py-2 rounded-md w-full  ring-1 ring-green-600/50 capitalize ";


const CropsDetails = () => {

  // const months = [
  //   { value: 1, text: 'January' },
  //   { value: 2, text: 'February' },
  //   { value: 3, text: 'March' },
  //   { value: 4, text: 'April' },
  //   { value: 5, text: 'May' },
  //   { value: 6, text: 'June' },
  //   { value: 7, text: 'July' },
  //   { value: 8, text: 'August' },
  //   { value: 9, text: 'September' },
  //   { value: 10, text: 'October' },
  //   { value: 11, text: 'November' },
  //   { value: 12, text: 'December' },
  // ];


  // const [sowingMonth,setSowing]=useState({
  //   from:"",
  //   to:""
  // })
  // const [harvestMonth,setHarvest]=useState({
  //   from:"",
  //   to:""
  // })
  const defaultDetails={
    name: "",
    growthDuration:"",
    irrigation:"",
    soilType: "",
    idealTemperature:"",
    sowing:[],
    harvesting:[],
    organic: [],
    inorganic: [],
    phValue:"",
    diseases: []
  }
  const [cropDetails, setCropDetails] = useState({
    name: "",
    season:"",
    growthDuration:"",
    irrigation:"",
    soilType: "",
    idealTemperature:"",
    sowing:[],
    harvesting:[],
    organic: [],
    inorganic: [],
    phValue:"",
    diseases: []
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMultiSelect = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => {option.selected;console.log(option.selected);
      })
      .map((option) => option.value);
    setCropDetails((prevState) => ({
      ...prevState,
      [name]: selectedValues,
    }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cropDetails);
    
    await axios
      .post(URL+"addcrop", cropDetails)
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err.message))
      .finally(()=>{setCropDetails(defaultDetails)});
      

  }

  return (
    <div className="bg-green-100 p-10 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-lg p-10 shadow-md w-[650px] "
      >
        <h1 className="text-xl font-bold text-slate-500 mb-10">Enter Crop Information</h1>
        <div className="mb-4">
          <label
            htmlFor="cropName"
            className="block text-gray-700 font-bold mb-2"
          >
            Crop Name
          </label>
          <input
            type="text"
            id="cropName"
            name="name"
            value={cropDetails.cropName}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="growthDuration"
            className="block text-gray-700 font-bold mb-2"
          >
            Growth Duration
          </label>
          <input
            type="text"
            id="growthDuration"
            name="growthDuration"
            value={cropDetails.growthDuration}
            onChange={handleChange}
            className={inputStyle}           
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="irrigationMethods"
            className="block text-gray-700 font-bold mb-2"
          >
            Irrigation Methods
          </label>
          <select
            
            id="irrigationMethods"
            name="irrigation"
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select Irrigation Method </option>
            <option value="drip">Drip Irrigation</option>
            <option value="sprinkler">Sprinkler Irrigation</option>
            <option value="flood">Flood Irrigation</option>
            <option value="furrow">Furrow Irrigation</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="soilType"
            className="block text-gray-700 font-bold mb-2"
          >
            Soil Type
          </label>
          <select
            id="soilType"
            name="soilType"
            value={cropDetails.soilType}
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select Soil Type</option>
            <option value="clay">Clay</option>
            <option value="sandy">Sandy</option>
            <option value="loamy">Loamy</option>
            <option value="silt">Silt</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="idealTemperature"
            className="block text-gray-700 font-bold mb-2"
          >
            Ideal Temperature(celsius)
          </label>
          <input
            type="text"
            id="idealTemperature"
            name="idealTemperature"
            value={cropDetails.idealTemperature}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="irrigationMethods"
            className="block text-gray-700 font-bold mb-2"
          >
            Season 
          </label>
          <select
            
            id="season"
            name="season"
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select Season </option>
            <option value="monsoon">Monsoon</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="months"
            className="block text-gray-700 font-bold mb-2"
          >
           Sowing Months
          </label>

          <select
    
            id="months"
            name="sowing"
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select Months </option>
            <option value="jan-feb" >January - February</option>
            <option value="feb-mar">February - March</option>
            <option value="mar-apr">March - April</option>
            <option value="apr-may">April - May</option>
            <option value="may-jun">May - June</option>
            <option value="jun-jul">June - July</option>
            <option value="jul-aug">July - August</option>
            <option value="aug-sep">August - September</option>
            <option value="sep-oct">September - October</option>
            <option value="oct-nov">October - November</option>
            <option value="nov-dec">November - December</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="months"
            className="block text-gray-700 font-bold mb-2"
          >
           Harvesting Months
          </label>
          <select
            id="months"
            name="harvesting"
            onChange={handleChange}
            className={inputStyle}
            required
          >
            <option value="">Select Months </option>
            <option value="jan-feb" >January - February</option>
            <option value="feb-mar">February - March</option>
            <option value="mar-apr">March - April</option>
            <option value="apr-may">April - May</option>
            <option value="may-jun">May - June</option>
            <option value="jun-jul">June - July</option>
            <option value="jul-aug">July - August</option>
            <option value="aug-sep">August - September</option>
            <option value="sep-oct">September - October</option>
            <option value="oct-nov">October - November</option>
            <option value="nov-dec">November - December</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="organic"
            className="block text-gray-700 font-bold mb-2"
          >
            Organic
          </label>
          <input
            type="text"
            id="organic"
            name="organic"
            value={cropDetails.organic.join(", ")}
            onChange={(e) =>
              setCropDetails((prevState) => ({
                ...prevState,
                organic: e.target.value.split(",").map((item) => item.trim()),
              }))
            }
            className={inputStyle}
            placeholder="Enter comma-separated values"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="inorganic"
            className="block text-gray-700 font-bold mb-2"
          >
            Inorganic
          </label>
          <input
            type="text"
            id="inorganic"
            name="inorganic"
            value={cropDetails.inorganic.join(", ")}
            onChange={(e) =>
              setCropDetails((prevState) => ({
                ...prevState,
                inorganic: e.target.value.split(",").map((item) => item.trim()),
              }))
            }
            className={inputStyle}
            placeholder="Enter comma-separated values"
          />
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="storageSystem"
            className="block text-gray-700 font-bold mb-2"
          >
            Storage System
          </label>
          <input
            type="text"
            id="storageSystem"
            name="storageSystem"
            value={cropDetails.storageSystem}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div> */}

        <div className="mb-4">
          <label
            htmlFor="phValue"
            className="block text-gray-700 font-bold mb-2"
          >
            pH Value
          </label>
          <input
            type="text"
            step="0.1"
            id="phValue"
            name="phValue"
            value={cropDetails.phValue}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="diseases"
            className="block text-gray-700 font-bold mb-2"
          >
            Diseases
          </label>
          <input
            type="text"
            id="diseases"
            name="diseases"
            value={cropDetails.diseases.join(", ")}
            onChange={(e) =>
              setCropDetails((prevState) => ({
                ...prevState,
                diseases: e.target.value.split(",").map((item) => item.trim()),
              }))
            }
            className={inputStyle}
            placeholder="Enter comma-separated values"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CropsDetails;
