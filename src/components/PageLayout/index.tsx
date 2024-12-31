import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
