import React, { useEffect, useContext, useState } from "react";
import Certificate from "../../components/Certificate";
import { useParams } from "react-router-dom";
import { verifyCertificate } from "../../helpers/functions";
import { GlobalContext } from "../../context/context";

export default function ViewCertificate() {
  const { certId } = useParams();
  console.log(certId);
  const { Contract, userType } = useContext(GlobalContext);
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (!userType) alert("Please signup to verify the certificate");
        console.log(certId, "certId");
        const certificateDetails = await verifyCertificate(Contract, certId);
        console.log(certificateDetails, "isVerified");
        certificateDetails && setCertificate(certificateDetails);
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
      }
    })();
  }, []);

  return <>{certificate && Object.keys(certificate).length !== 0 && <Certificate data={certificate} />}</>;
}
