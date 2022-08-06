import React, { useEffect, useContext, useState } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import "./App.css";
import { GlobalContext } from "./context/context";
import { getIssuerData, getUserData } from "./helpers/functions";
import { ethers } from "ethers";
import Config from "./Config";

const App = () => {
  const { loading, addWeb3ProviderToContext, addIssuerData, setUserType, setLoading, addUserData } = useContext(GlobalContext);

  const [currentAccount, setCurrentAccount] = useState(null);

  const initializeWeb3 = async () => {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accountsItem = await provider.listAccounts();
    const network = await provider.getNetwork();
    if (network.name !== Config.DEPLOYED_CONTRACT.network)
      throw Error(`You are using ${network.name}, Please switch to ${Config.DEPLOYED_CONTRACT.network} to use our App`);
    const signer = provider.getSigner();
    // Connect to the deployed contract
    const Contract = new ethers.Contract(Config.DEPLOYED_CONTRACT.ROPSTEN.CONTRACT_ADDRESS, Config.DEPLOYED_CONTRACT.ROPSTEN.ABI, signer);
    setCurrentAccount(accountsItem[0]);
    // Add web3 data to context
    await addWeb3ProviderToContext({
      provider,
      signer,
      accounts: accountsItem,
      Contract,
      currentAccount: accountsItem[0]
    });
    return { accounts: accountsItem, contract: Contract };
  };

  const setDataToContext = async ({ contract, accounts }) => {
    // check if connected wallet is issuer or not. If he is issuer then set his data and usertype to issuer
    const issuerData = await getIssuerData(contract, accounts[0]);
    let userData;
    issuerData && (await addIssuerData({ issuerData }));
    if (issuerData) {
      const userType = "ISSUER";
      await setUserType({ userType });
    }

    if (!issuerData) {
      // check if connected wallet is user or not. If he is user then set his data and usertype to user
      userData = await getUserData(contract, accounts[0]);
      userData && (await addUserData({ userData }));
      if (userData) {
        const userType = "USER";
        await setUserType({ userType });
      }
    }
    if (userData && !issuerData) addIssuerData({ issuerData: null });
    if (issuerData && !userData) addUserData({ userData: null });
    if (userData || issuerData) return true;
    else return false;
  };

  const clearContext = async () => {
    setUserType({ userType: null });
    addIssuerData({ issuerData: null });
    addUserData({ userData: null });
  };

  useEffect(() => {
    (async () => {
      try {
        const { contract, accounts } = await initializeWeb3();
        const isDataSet = await setDataToContext({ contract, accounts });
        if (!isDataSet) await clearContext();
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        window.ethereum.on("accountsChanged", async (accounts) => {
          if (accounts[0] !== currentAccount) {
            console.log("Super");
            setLoading(true);
            const { contract, accounts } = await initializeWeb3();
            console.log(accounts);
            const isDataSet = await setDataToContext({ contract, accounts });
            console.log(isDataSet, "isDataSet");
            if (!isDataSet) await clearContext();
            setLoading(false);
          }
        });
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
        setLoading(false);
      }
    })();
  }, []);

  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
