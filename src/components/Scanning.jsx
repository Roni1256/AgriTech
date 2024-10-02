// WebcamCapture.js
import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import LeafDiseaseDetection from "./LeafDisease";

const Scanning = ({ cam }) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [camOn, setCamOn] = useState(true || cam);




  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCamOn(false);
    setImageSrc(imageSrc);
  }, [webcamRef]);


  const handleAnalyse=async()=>{


  }


 



  return (
    <div className="flex items-center justify-center gap-10 ">
      {camOn && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          height={400}

        />
      )}
      {!imageSrc && (
        <button
          onClick={capture}
          className="text-white bg-teal-950 rounded-lg p-2 mt-3"
        >
          Capture
        </button>
      )}

      {imageSrc && (
        <div>
          <h2 className="text-white bg-teal-800 w-full">Captured Image</h2>
          <img src={imageSrc} alt="Captured" />
          <canvas ref={webcamRef}  style={{ marginTop: '20px' }}></canvas>
          <div className="mt-5 flex items-center justify-center gap-10">
            <button
              onClick={() => {
                setCamOn(true);
                setImageSrc(null);
              }}
              className="text-white bg-teal-900 w-fit p-3 rounded-lg shadow-lg shadow-black/50 hover:scale-[1.1] "
            >
              Re-Capture
            </button>
            <button 
              className="text-white bg-slate-900 w-fit p-3 rounded-lg shadow-lg shadow-black/50 hover:scale-[1.1]"
              onClick={handleAnalyse}

            >
              Analyse
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanning;
