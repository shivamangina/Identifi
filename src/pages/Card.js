/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactModal from "./ReactModal";
import CertTemplate from "../assets/template.png";

const CreatorCard = (props) => {
  const { data } = props;
  const [show, setShow] = useState(false);

  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col items-center justify-center p-10">
        <img className="w-52 h-32 mb-6" src={data.photo || CertTemplate} />
        <h2 className="text-lg font-medium">{data.name || "Fred Clemens"}</h2>
        <p className="font-medium text-blue-500">{data.typeOfCertificate || "Degree"}</p>
        <p className="font-medium text-green-500">{data.isActive || "true"}</p>
        <p className="text-gray-400">Issued Date: {data.issuedDate || "Fred Clemens"}</p>
      </div>
      <div>
        <span className="px-2 py-1 m-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{data.id}</span>
      </div>
      <br />

      <div className="flex">
        <a
          href="#_"
          className="flex-1 inline-flex block p-5 text-center text-gray-500 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
          <p>View</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  mx-auto fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </a>

        <span
          // href="#_"
          onClick={() => setShow(true)}
          className="flex-1 inline-flex block p-5 text-center text-gray-500 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
          <p>Share</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-auto fill-current"
            version="1.1"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 784.37 1277.39">
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_1421394342400">
                <g>
                  <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 " />
                  <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 " />
                  <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 " />
                  <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 " />
                  <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 " />
                  <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 " />
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>

      {show && <ReactModal setShowModal={setShow} showModal={show} creatorAddress={data.walletAddress} />}
    </div>
  );
};

export default CreatorCard;
