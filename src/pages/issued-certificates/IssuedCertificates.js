import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import { getCertificatesByIssuer } from "../../helpers/functions";

export default function IssuedCertificate() {
  const { Contract, issuerData } = useContext(GlobalContext);

  // Dummy Data

  // expiresAt: "2222-08-05"
  // id: "IITCSE11100003"
  // isActive: true
  // isPermanent: true
  // isPublic: true
  // issuedDate: "2022-08-05"
  // issuerPublicKey: "0x0408c21CAb4ead80476c61BCd139E9E274E05b9E"
  // name: "Sandeep Kumar"
  // typeOfCertificate: "Degree"
  // userPublicKey: "0x461dE63c9b38F8717ba387B9ea483711C47C6145"
  // version: "1"

  useEffect(() => {
    (async () => {
      try {
        console.log(issuerData.name, "Issuer");
        const issuedCertificates = await getCertificatesByIssuer(Contract);
        console.log(issuedCertificates, "issuedCertificates");
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <div>IssuedCertificate</div>;
}
