import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Layout */
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/home/Home";
/** Pages */
import Profile from "./pages/profile/Profile";
import IssuedCertificate from "./pages/issued-certificates/IssuedCertificate";
import IssueCertificate from "./pages/issue-certificates/IssueCertificates";
import SelfCertificates from "./pages/self-certificates/SelfCertificates";
import SharedCertificates from "./pages/shared-certificates/SharedCertificates";

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

          <Route path="/certificates/issuer/issued" element={<IssuedCertificate />} />
          <Route path="/certificates/issuer/issuenew" element={<IssueCertificate />} />

          {/* User Routes */}

          <Route path="/certificates/user/self" element={<SelfCertificates />} />
          <Route path="/certificates/user/shared" element={<SharedCertificates />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
