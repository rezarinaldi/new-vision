import React from "react";

import HeaderServices from "../parts/Header/HeaderServices";
import WelcomeServices from "../components/Welcome/WelcomeServices";
import FeaturedServices from "../components/Featured/FeaturedServices";

export default function Services() {
  return (
    <div>
      <HeaderServices />
      <main>
        <WelcomeServices />
        <FeaturedServices />
      </main>
    </div>
  );
}
