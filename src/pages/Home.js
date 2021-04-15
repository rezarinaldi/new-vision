import React from "react";

import HeaderHome from "../parts/Header/HeaderHome";
import WelcomeHome from "../components/Welcome/WelcomeHome";
import FeaturedHome from "../components/Featured/FeaturedHome";

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <main>
        <WelcomeHome />
        <FeaturedHome />
      </main>
    </div>
  );
}
