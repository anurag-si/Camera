import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
import './Stream.css'


const Stream = ({img, setImg}) => {

    const navigate=useNavigate();
    const videoConstraints = {
        width: 500,
        height: 500,
        facingMode: "user"
      };
      
     
      const WebcamCapture = () => (
        <Webcam
          audio={false}
          height={500}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
          
        >
           {({ getScreenshot }) => (
            <button className='button'
              onClick={() => {
                const imageSrc = getScreenshot()
                setImg(imageSrc)
                navigate("/display")
              }}
            >
              SNAP!
            </button>
          )}
        </Webcam>
      );

      
  return (
    <div >
      <div className='webcam'>
      <WebcamCapture />
        
      </div>
     
      
    </div>
    
   
  )
}

export default Stream
