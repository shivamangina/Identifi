/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactModal from "./ReactModal";
import CertTemplate from "../assets/template.png";
import ShareCertificateForm from "../components/ShareCertificate";

export default function Card(props) {
  const { data } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          className="flex-1 inline-flex block p-5 mx-auto text-center text-gray-500 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
          <p className="mx-auto">View</p>
        </a>

        <span
          // href="#_"
          onClick={() => setModalIsOpen(true)}
          className="flex-1 inline-flex block mx-auto p-5 text-center text-gray-500 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
          <p className="mx-auto">Share</p>
        </span>
      </div>

      {modalIsOpen && (
        <ReactModal
          modalIsOpen={modalIsOpen}
          closeModal={() => {
            setModalIsOpen(false);
          }}
          component={() => (
            <ShareCertificateForm
              closeModal={() => {
                setModalIsOpen(false);
              }}
            />
          )}
          state={{ certId: data.id }}
        />
      )}
    </div>
  );
}
