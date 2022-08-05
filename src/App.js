import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import "./App.css";
import { GlobalContext } from "./context/context";
import { getIssuerData, getUserData } from "./helpers/functions";
import { ethers } from "ethers";
import Config from "./Config";

const App = () => {
  const { loading, addWeb3ProviderToContext, addIssuerData, setUserType, setLoading, addUserData } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const network = await provider.getNetwork();
        if (network.name !== Config.DEPLOYED_CONTRACT.network)
          throw Error(`You are using ${network.name}, Please switch to ${Config.DEPLOYED_CONTRACT.network} to use our App`);
        const signer = provider.getSigner();
        // Connect to the deployed contract
        const Contract = new ethers.Contract(Config.DEPLOYED_CONTRACT.ROPSTEN.CONTRACT_ADDRESS, Config.DEPLOYED_CONTRACT.ROPSTEN.ABI, signer);
        // Add web3 data to context
        await addWeb3ProviderToContext({
          provider,
          signer,
          accounts,
          Contract
        });
        // check if connected wallet is issuer or not. If he is issuer then set his data and usertype to issuer
        const issuerData = await getIssuerData(Contract, accounts[0]);
        issuerData && (await addIssuerData({ issuerData }));
        if (issuerData) {
          const userType = "ISSUER";
          await setUserType({ userType });
        }

        // check if connected wallet is user or not. If he is user then set his data and usertype to user
        const userData = await getUserData(Contract, accounts[0]);
        userData && (await addUserData({ userData }));
        if (userData) {
          const userType = "USER";
          await setUserType({ userType });
        }

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
        setLoading(false);
      }
    })();
  }, []);

  // eslint-disable-next-line no-constant-condition
  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
