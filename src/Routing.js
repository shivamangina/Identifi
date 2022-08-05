import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Layout */
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/home/Home";
/** Pages */
import Profile from "./pages/profile/Profile";
import IssuedCertificate from "./pages/certificates/issuer/IssuedCertificate";
import IssueCertificate from "./pages/certificates/issuer/IssueCertificate";
import SelfCertificates from "./pages/certificates/user/SelfCertificates";
import SharedCertificates from "./pages/certificates/user/SharedCertificates";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/verify" element={<Home />} />
          {/* Issuer Routes */}

          <Route
            path="/certificates/issuer/issued"
            element={<IssuedCertificate />}
          />
          <Route
            path="/certificates/issuer/issuenew"
            element={<IssueCertificate />}
          />

          {/* User Routes */}

          <Route
            path="/certificates/user/self"
            element={<SelfCertificates />}
          />
          <Route
            path="/certificates/user/shared"
            element={<SharedCertificates />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
