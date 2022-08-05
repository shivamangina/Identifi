import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/context";

export default function IssueNewCertificate() {
  const { Contract, issuerData } = useContext(GlobalContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [typeOfCertificate, setTypeOfCertificate] = useState("");
  const [version, setVersion] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [isPermanent, setIsPermanent] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [isActive, setIsActive] = useState("");
  const [userPublicKey, setUserPublicKey] = useState("");
  const [issuerPublicKey, setIssuerPublicKey] = useState("");

  useEffect(() => {
    if (issuerData && issuerData.isActive) {
      setIssuerPublicKey(issuerData.publicKey);
    }
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const data = {
      id,
      name,
      typeOfCertificate,
      version,
      issuedDate,
      expiresAt,
      isPermanent,
      isPublic,
      isActive,
      userPublicKey,
      issuerPublicKey
    };

    // dummy Data

    // const dummy = {
    //   expiresAt: "2222-08-06",
    //   id: "IITCSE11100143",
    //   isActive: true,
    //   isPermanent: true,
    //   isPublic: true,
    //   issuedDate: "2022-08-06",
    //   issuerPublicKey: "0x0408c21CAb4ead80476c61BCd139E9E274E05b9E",
    //   name: "Satya Sandeep",
    //   typeOfCertificate: "Degree",
    //   userPublicKey: "0x461dE63c9b38F8717ba387B9ea483711C47C6145",
    //   version: "1"
    // };
    await issueCertificate(data);
    setId("");
    setName("");
    setTypeOfCertificate("");
    setVersion("");
    setIssuedDate("");
    setExpiresAt("");
    setIsPermanent("");
    setIsPublic("");
    setIsActive("");
    setUserPublicKey("");
  };

  const issueCertificate = async (data) => {
    try {
      const { id, name, typeOfCertificate, version, issuedDate, expiresAt, isPermanent, isPublic, isActive, userPublicKey } = data;
      await Contract.issueCertificate(id, name, typeOfCertificate, version, issuedDate, expiresAt, isPermanent, isPublic, isActive, userPublicKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200 p-10" onSubmit={handleSubmitForm}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Issue New Certificate</h3>
            {/* <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p> */}
          </div>
        </div>

        {/** Personal Info */}
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Certificate Details</h3>
            {/* <p className="mt-1 text-sm text-gray-500">Please mention your social id links</p> */}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                Id
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setId(e.target.value)}
                  type="text"
                  name="id"
                  value={id}
                  id="id"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  name="name"
                  id="name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="typeOfCertificate" className="block text-sm font-medium text-gray-700">
                TypeOfCertificate
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setTypeOfCertificate(e.target.value)}
                  type="text"
                  value={typeOfCertificate}
                  name="typeOfCertificate"
                  id="typeOfCertificate"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="version" className="block text-sm font-medium text-gray-700">
                Version
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setVersion(e.target.value)}
                  type="text"
                  value={version}
                  name="version"
                  id="version"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="issuedDate" className="block text-sm font-medium text-gray-700">
                Issued Date
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setIssuedDate(e.target.value)}
                  type="text"
                  value={issuedDate}
                  name="issuedDate"
                  id="issuedDate"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="expiresAt" className="block text-sm font-medium text-gray-700">
                Expires At
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setExpiresAt(e.target.value)}
                  type="text"
                  value={expiresAt}
                  name="expiresAt"
                  id="expiresAt"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="userPublicKey" className="block text-sm font-medium text-gray-700">
                User Public Key
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setUserPublicKey(e.target.value)}
                  type="text"
                  value={userPublicKey}
                  name="userPublicKey"
                  id="userPublicKey"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isPermanent"
                  name="isPermanent"
                  type="checkbox"
                  checked={isPermanent}
                  onChange={(e) => {
                    setIsPermanent(e.target.checked);
                  }}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isPermanent" className="font-medium text-gray-700">
                  Is Permanent
                </label>
                <p className="text-gray-500">Is the cert validity is life time?.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isPublic"
                  name="isPublic"
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => {
                    setIsPublic(e.target.checked);
                  }}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isPublic" className="font-medium text-gray-700">
                  Is Public
                </label>
                <p className="text-gray-500">Is the cert validity is life time?.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isActive"
                  name="isActive"
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => {
                    setIsActive(e.target.checked);
                  }}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isActive" className="font-medium text-gray-700">
                  Is Active
                </label>
                <p className="text-gray-500">Is the cert validity is life time?.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
