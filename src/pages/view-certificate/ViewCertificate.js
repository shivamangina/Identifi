import React from "react";
import Certificate from "../../components/Certificate";
import { useParams } from "react-router-dom";

export default function ViewCertificate() {
  const { certId } = useParams();
  console.log(certId);

  return (
    <>
      <Certificate />
    </>
  );
}
