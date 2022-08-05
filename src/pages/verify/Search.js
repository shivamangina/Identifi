/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Search = (props) => {
  const { search } = props;
  const [certId, setCertId] = useState("");

  return (
    <div className="p-5">
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          value={certId}
          onChange={(e) => {
            setCertId(e.target.value);
          }}
          placeholder="Enter the Cert Id to verify details"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <button
          onClick={() => search(certId)}
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
