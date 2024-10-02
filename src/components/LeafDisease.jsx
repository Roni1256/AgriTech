import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

const LeafDiseaseDetection = ({img}) => {
  const [model, setModel] = useState(null);
  const [classifier, setClassifier] = useState(knnClassifier.create());
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const imageRef = useRef(new Image());
  const canvasRef = useRef(null);

  // Load the MobileNet model when the component mounts
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    };
    loadModel();
    console.log(model
        
    );
    
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = imageRef.current;
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        analyzeImage(img);
      };
    }
  };

  const analyzeImage = async (img) => {
    if (!model) {
      alert('Model not loaded yet. Please wait a moment.');
      return;
    }
    setLoading(true);

    // Prepare the image for analysis
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);

    // Classify the image using the MobileNet model
    const tensor = tf.browser.fromPixels(canvas);
    const predictions = await model.classify(tensor);

    setPredictions(predictions);
    setLoading(false);
  };

  return (
    <div>
      <h1>Leaf Disease Detection</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
      />
      <br />
      <canvas ref={canvasRef} style={{ marginTop: '20px' }}></canvas>
      {loading && <p>Loading...</p>}
      {predictions.length > 0 && (
        <div>
          <h2>Analysis Results:</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                {prediction.className}: {(prediction.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeafDiseaseDetection;
