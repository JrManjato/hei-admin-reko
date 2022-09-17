import React, { FC } from "react";
import { imageGetterStyle } from "../Utils/style";
import camera from '../assets/images/cam-rem.png'

export const InputImage: FC<{ onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {

  return (
    <>
      <label htmlFor="input">
        <div
        className="image-container"
          style={imageGetterStyle}
        >
          <img src={camera} alt="logo camera" />
        </div>
      </label>
      <input onChange={onChange} hidden type="file" id="input" accept=".png,.jpg" />
    </>
  );
};