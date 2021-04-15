import React from "react";

import HeaderContact from "../parts/Header/HeaderContact";
import WelcomeContact from "../components/Welcome/WelcomeContact";
import MapContact from "../components/MapContact";
import FeaturedContact from "../components/Featured/FeaturedContact";

export default function Contact() {
  return (
    <div>
      <HeaderContact />
      <main>
        <section className="tm-welcome">
          <WelcomeContact />
          <MapContact />
          <FeaturedContact />
        </section>
      </main>
    </div>
  );
}
