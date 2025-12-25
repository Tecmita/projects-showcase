import React from "react";
import { featuresData } from "../data/featuresData";
import CardContent from "./ui/CardContent";

const Features = () => {
  return (
    <div className="mx-5 mb-20">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center font-semibold text-white text-3xl">
          Featured Luxury Cars
        </h1>
        <div
          className="
          grid grid-cols-1
          md:grid-cols-3
          lg:grid-cols-3
          gap-2
          place-items-center
          "
        >
          {featuresData.map((item, i) => (
            <CardContent key={i} item={item} variant="simple" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
