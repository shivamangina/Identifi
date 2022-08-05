import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Layout */
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/home/Home";
/** Pages */
import Profile from "./pages/profile/Profile";
import Verify from "./pages/verify/Verify";

import IssuedCertificates from "./pages/issued-certificates/IssuedCertificates";
import IssueNewCertificate from "./pages/issue-new-certificate/IssueNewCertificate";

import SelfCertificates from "./pages/self-certificates/SelfCertificates";
import SharedCertificates from "./pages/shared-certificates/SharedCertificates";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/verify" element={<Verify />} />

          {/* Issuer Routes */}
          <Route path="/issuer/issued" element={<IssuedCertificates />} />
          <Route path="/issuer/issue-new" element={<IssueNewCertificate />} />

          {/* User Routes */}
          <Route path="/user/self" element={<SelfCertificates />} />
          <Route path="/user/shared" element={<SharedCertificates />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
