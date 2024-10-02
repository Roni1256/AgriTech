import React from "react";

export const SoilReport = ({ cropData }) => {

  return (
    <>
      <div className="w-full h-[60vh]  bg-gray-50 text-slate-800 ">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Crop Details </h2>
          <table className="min-w-full bg-white border border-gray-300 overflow-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left bg-green-950 text-white ">
                    S.no
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Crop Name
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Soil Type
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Season
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Sowing Month
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Harvesting Month
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white ">
                    Organic
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Inorganic
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    pH
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Irrigation Method
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Ideal Temperature
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Growth Duration
                  </th>
                  <th className="py-3 px-6 text-left bg-green-950 text-white w-full">
                    Diseases
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-md font-light ">
                {
                    cropData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100 font-semibold text-md capitalize "
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap min-w-[200px]">
                      {index + 1}.
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap min-w-[200px]">
                      {row.name}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[200px]">
                      {row.soilType}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[200px]">
                      {row.season}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[200px]">
                      {row.sowing.map((data) => {
                        return <>{data}  </>;
                      })}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[200px]">
                      {row.harvesting.map((data) => {
                        return <>{data} </>;
                      })}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[400px] ">
                      {row.organic.map((data) => {
                        return <>{data} , </>;
                      })}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[400px]">
                      {row.inorganic.map((data) => {
                        return <>{data} , </>;
                      })}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[100px]">
                      {row.phValue}
                    </td>
                    <td className="py-3 px-6 text-left">{row.irrigation}</td>
                    <td className="py-3 px-6 text-left">
                      {row.idealTemperature}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[200px]">
                      {row.growthDuration}
                    </td>
                    <td className="py-3 px-6 text-left min-w-[400px] ">
                      {row.diseases.map((data) => {
                        return <>{data} , </>
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};
