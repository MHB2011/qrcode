import React from "react";
import "./QrCode.css";

export const QrCode = () => {
  return (
    <div className="qrCodeContainer">
      <div className="imageConatiner" />
      <div className="descriptionContainer">
        <h4> Improve your front-end skills by building projects</h4>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to next level
        </p>
      </div>
    </div>
  );
};
