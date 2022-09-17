import React, { useState } from 'react';
import { InputImage } from '../components/InputImage';
import { imageGetterStyle } from '../Utils/style';
import { TRekoHandler } from '../Utils/type';
import { onChangeHandler } from '../Utils/utils';
import { useNavigate } from "react-router-dom";
import Webcam from 'react-webcam';

const RekoHandler: React.FC = () => {
  const [image, setImage] = useState<TRekoHandler>({ image: '', cameraOrInput: false });
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e, setImage);

  return (
    <>
      <div
        style={{ flexDirection: 'column' }}
        className="flex bg-gradient-to-b from-vshad2 to-vshade1 justify-center items-center min-h-screen min-w-full background-image"
      >
        <div>
          {!image.cameraOrInput ? (
            image.image.length > 0 ? (
              <div className="flex justify-content-center" style={imageGetterStyle}>
                <img style={{ width: '500px' }} src={image.image} alt="" />
              </div>
            ) : (
              <InputImage onChange={onChange} />
            )
          ) : (
            <Webcam />
          )}
        </div>
        <div>
          <button onClick={(e) => setImage((e) => ({ ...e, cameraOrInput: !e.cameraOrInput }))}
            className='text-center lg:w-40 py-3 mx-6 mb-5 mt-8 px-4 text-sm font-medium rounded-md text-white shadow-lg  bg-blue-500'
          >
            Prendre une photo
          </button>
          <button
          className='text-center lg:w-40 py-3 mx-6 mb-5 mt-8 px-4 text-sm font-medium rounded-md text-white shadow-lg  bg-gray-500'
          onClick={() => navigate("/landing")}
          >
            Annuler
          </button>
        </div>
      </div>
    </>
  );
};

export default RekoHandler;
