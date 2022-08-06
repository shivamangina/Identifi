/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./certificate.css";

const Certificate = (props) => {
  console.log(props.data);
  const [cert, setCert] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setCert(props.data);
      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
      }
    })();
  }, []);

  return (
    <div className="container pm-certificate-container">
      <div className="outer-border"></div>
      <div className="inner-border"></div>
      {cert && Object.keys(cert).length !== 0 && (
        <div className="pm-certificate-border col-xs-12">
          <div className="row pm-certificate-header">
            <div className="pm-certificate-title cursive col-xs-12 text-center">
              <h2>IIM Certificate Of {cert.typeOfCertificate}</h2>
            </div>
          </div>

          <div className="row pm-certificate-body">
            <div className="pm-certificate-block">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                    <span className="pm-name-text bold">{cert.name}</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-earned col-xs-8 text-center">
                    <span className="pm-earned-text padding-0 block cursive">ID</span>
                    <span className="pm-credits-text block bold sans">{cert.id}</span>
                  </div>
                  <div className="col-xs-2"></div>
                  <div className="col-xs-12"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title col-xs-8 text-center">
                    <span className="pm-earned-text block cursive">while completing the training course entitled</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title underline col-xs-8 text-center">
                    <span className="pm-credits-text block bold sans">BPS PGS Initial PLO for Principals at Cluster Meetings</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="row">
                <div className="pm-certificate-footer">
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">Buffalo City School District</span>
                    <span className="pm-empty-space block underline"></span>
                    <span className="bold block">Issued On: {cert.issueDate} </span>
                  </div>
                  <div className="col-xs-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
