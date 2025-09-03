import React from "react";
import AdvistingSpace from "../LatestNewsSection/AdvistingSpace";
import { LatestNewsSection } from "./LatestNewss";

const AdvertisingSpace = () => {
  return (
    <section className="container flex flex-col gap-8 py-12 lg:flex-row">
      <div className="w-full lg:w-2/3">
        <LatestNewsSection />
      </div>
      <div className="w-full lg:w-1/3">
        <AdvistingSpace />
      </div>
    </section>
  );
};

export default AdvertisingSpace;
