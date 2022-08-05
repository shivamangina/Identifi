/* This example requires Tailwind CSS v2.0+ */
import React, { useContext, useState, useEffect } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../../context/context";
import { getTransactions } from "../../helpers/getAllTransactions";

/* This example requires Tailwind CSS v2.0+ */
const initialStats = [
  { name: "Total fund Donated", stat: "0 ETH" },
  { name: "Total Creators Funded", stat: "0" }
];

export default function Example() {
  const { accounts, userInfo, provider } = useContext(GlobalContext);
  const [stats, setStats] = useState(initialStats);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const stat = userInfo && [
      { name: "Total fund Donated", stat: `${userInfo.totalFundsSent} ETH` },
      { name: "Total Creators Funded", stat: userInfo.totalCreatorsFundedCount }
    ];
    userInfo && setStats(stat);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // const walletAddress = accounts[0].toLowerCase();
        const walletAddress = accounts[0];
        const transac = await getTransactions(walletAddress, provider);
        setTransactions(transac.fromTransactions);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [accounts[0]]);

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-5xl font-bold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>

      <>
        <Transactions transactions={transactions} />
      </>
    </div>
  );
}
