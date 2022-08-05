/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { shareCertificate } from "../helpers/functions";

const ShareCertificateForm = (props) => {
  console.log(props);
  // get form data in react hooks
  const { Contract } = useContext(GlobalContext);
  const [formData, setFormData] = useState({ address: "" });

  // create a form in react hooks
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // create a form in react hooks
  const handleSubmit = async (e) => {
    e.preventDefault();
    const certId = props.data.certId;
    const address = formData.address;
    await shareCertificate(Contract, certId, address);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {[{ name: "address", label: "Address" }].map((item, index) => (
        <div key={index}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {item.label}
          </label>
          <div className="mt-1">
            <input
              id={item.name}
              name={item.name}
              onChange={handleChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Share Certificate
        </button>
      </div>
    </form>
  );
};

export default ShareCertificateForm;
