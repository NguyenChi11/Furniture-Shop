import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> ViHi-Shop
      </p>
      <div className="app-download-platforms">
        <div className="download-app">
          <i class="fa-brands fa-app-store-ios"></i>
          <p>app-store</p>
        </div>
        <div className="download-app">
          <i class="fa-brands fa-google-play"></i>
          <p>play-store</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
