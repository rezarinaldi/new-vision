import React from "react";

import HeaderCompany from "../parts/Header/HeaderCompany";
import WelcomeCompany from "../components/Welcome/WelcomeCompany";
import FeaturedCompany from "../components/Featured/FeaturedCompany";

export default function Company() {
  return (
    <div>
      <HeaderCompany />
      <main>
        <WelcomeCompany />
        <FeaturedCompany />
      </main>
    </div>
  );
}
