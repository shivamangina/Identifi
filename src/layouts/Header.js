import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link } from "react-router-dom";

import { ethers } from "ethers";
import Config from "../Config";
import { getAllCreators, getLoggedInUser, addNewUserOnLogin } from "../helpers/functions";

import mainLogo from "./logo.png";

const paths = [
  {
    path: "/user/self",
    name: "My Certificates",
    userType: "USER"
  },
  {
    path: "/user/shared",
    name: "Shared Certificates",
    userType: "USER"
  },
  {
    path: "/issuer/issue-new",
    name: "Issue New Certificate",
    userType: "ISSUER"
  },
  {
    path: "/issuer/issued",
    name: "Issued Certificates",
    userType: "ISSUER"
  }
];

export default function Header() {
  const { accounts, addWeb3ProviderToContext, addUserInfo, addCreatorData, userInfo, Contract, userType } = useContext(GlobalContext);

  const doAuth = async () => {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(Config.DEPLOYED_CONTRACT.ROPSTEN.CONTRACT_ADDRESS, Config.DEPLOYED_CONTRACT.ROPSTEN.ABI, signer);
    await addWeb3ProviderToContext({
      provider,
      signer,
      accounts,
      Contract
    });
    const creatorData = await getAllCreators(Contract);
    await addCreatorData({
      creatorData
    });
    const userInfo = await getLoggedInUser(creatorData, accounts[0]);
    await addUserInfo({
      userInfo: userInfo[0]
    });
  };

  const signUp = async () => {
    // insert user if he is not in our records
    if (!userInfo || !userInfo.name) {
      await addNewUserOnLogin(Contract);
    }
  };

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <img src={mainLogo} className="w-12 h-12" alt="fireSpot" />
            <span className="mx-auto ml-0 text-xl font-black leading-none text-gray-900 select-none">
              Certi
              <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500 lg:inline">fi</span>
              <span className="text-indigo-600">.</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {paths
              .filter((_l) => {
                _l.userType === userType;
              })
              .map(({ path, name }) => (
                <Link key={path + name} to={path} className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  {name}
                </Link>
              ))}
          </nav>
        </div>

        <div className="inline-flex items-center ml-1 space-x-5 lg:justify-end">
          {accounts && accounts.length > 0 && (
            <span className="mr-2 font-medium leading-6 text-gray-600 hover:text-gray-900 bg-indigo-100">Connected to : {accounts[0]}</span>
          )}

          <button
            disabled={accounts && accounts.length > 0 && accounts[0] ? true : false}
            onClick={doAuth}
            className="inline-flex items-center justify-center px-2 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            {accounts && accounts.length > 0 && accounts[0] ? "Connected" : "Connect to wallet"}
          </button>
        </div>
        {!userInfo && (
          <button
            disabled={userInfo && userInfo.name ? true : false}
            onClick={signUp}
            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {/* {userInfo && userInfo.name ? `${userInfo.name}` : "Sign Up"} */}
            Sign Up
          </button>
        )}
      </div>
    </section>
  );
}
